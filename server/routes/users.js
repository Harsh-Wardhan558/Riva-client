const express = require('express');
const router = express.Router();
const { db } = require('../config/firebase');
const { authenticateToken } = require('../middleware/auth');

// Get user profile
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.userId;
    const userDoc = await db().collection('users').doc(userId).get();

    if (!userDoc.exists) {
      return res.status(404).json({ error: 'User not found' });
    }

    const userData = userDoc.data();
    delete userData.password;

    res.json({
      id: userDoc.id,
      ...userData,
    });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ error: 'Failed to get profile' });
  }
});

// Update user profile
router.put('/profile', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.userId;
    const updateData = {
      ...req.body,
      updatedAt: new Date(),
    };

    // Don't allow password update through this endpoint
    delete updateData.password;

    await db().collection('users').doc(userId).update(updateData);

    const updatedUser = await db().collection('users').doc(userId).get();
    const userData = updatedUser.data();
    delete userData.password;

    res.json({
      id: updatedUser.id,
      ...userData,
    });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ error: 'Failed to update profile' });
  }
});

// Get user's applications
router.get('/applications', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.userId;

    const applicationsRef = db()
      .collection('applications')
      .where('userId', '==', userId)
      .orderBy('createdAt', 'desc');

    const snapshot = await applicationsRef.get();

    const applications = [];
    for (const doc of snapshot.docs) {
      const appData = doc.data();
      const jobDoc = await db().collection('jobs').doc(appData.jobId).get();

      applications.push({
        id: doc.id,
        ...appData,
        job: jobDoc.exists ? { id: jobDoc.id, ...jobDoc.data() } : null,
        createdAt: appData.createdAt?.toDate?.()?.toISOString() || appData.createdAt,
      });
    }

    res.json(applications);
  } catch (error) {
    console.error('Get applications error:', error);
    res.status(500).json({ error: 'Failed to get applications' });
  }
});

module.exports = router;

