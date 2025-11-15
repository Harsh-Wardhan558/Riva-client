const express = require('express');
const router = express.Router();
const { db } = require('../config/firebase');
const { authenticateAdmin } = require('../middleware/auth');

// All admin routes require authentication
router.use(authenticateAdmin);

// Get all applications
router.get('/applications', async (req, res) => {
  try {
    const snapshot = await db()
      .collection('applications')
      .orderBy('createdAt', 'desc')
      .get();

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

// Get all contact messages
router.get('/contact-messages', async (req, res) => {
  try {
    const snapshot = await db()
      .collection('contactMessages')
      .orderBy('createdAt', 'desc')
      .get();

    const messages = [];
    snapshot.forEach((doc) => {
      const data = doc.data();
      messages.push({
        id: doc.id,
        ...data,
        createdAt: data.createdAt?.toDate?.()?.toISOString() || data.createdAt,
      });
    });

    res.json(messages);
  } catch (error) {
    console.error('Get contact messages error:', error);
    res.status(500).json({ error: 'Failed to get contact messages' });
  }
});

// Create job
router.post('/jobs', async (req, res) => {
  try {
    const {
      title,
      company,
      location,
      type,
      salary,
      category,
      description,
      requirements,
      benefits,
    } = req.body;

    if (!title || !company || !location || !type || !description) {
      return res.status(400).json({ error: 'Required fields are missing' });
    }

    const jobData = {
      title,
      company,
      location,
      type,
      salary: salary || '',
      category: category || 'General',
      description,
      requirements: requirements || [],
      benefits: benefits || [],
      createdBy: req.user.userId,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const jobRef = await db().collection('jobs').add(jobData);
    const jobId = jobRef.id;

    res.status(201).json({
      message: 'Job created successfully',
      id: jobId,
      ...jobData,
    });
  } catch (error) {
    console.error('Create job error:', error);
    res.status(500).json({ error: 'Failed to create job' });
  }
});

// Update job
router.put('/jobs/:id', async (req, res) => {
  try {
    const jobId = req.params.id;

    const jobDoc = await db().collection('jobs').doc(jobId).get();

    if (!jobDoc.exists) {
      return res.status(404).json({ error: 'Job not found' });
    }

    const updateData = {
      ...req.body,
      updatedAt: new Date(),
    };

    await db().collection('jobs').doc(jobId).update(updateData);

    const updatedJob = await db().collection('jobs').doc(jobId).get();
    res.json({
      id: updatedJob.id,
      ...updatedJob.data(),
    });
  } catch (error) {
    console.error('Update job error:', error);
    res.status(500).json({ error: 'Failed to update job' });
  }
});

// Delete job
router.delete('/jobs/:id', async (req, res) => {
  try {
    const jobId = req.params.id;

    const jobDoc = await db().collection('jobs').doc(jobId).get();

    if (!jobDoc.exists) {
      return res.status(404).json({ error: 'Job not found' });
    }

    await db().collection('jobs').doc(jobId).delete();

    res.json({ message: 'Job deleted successfully' });
  } catch (error) {
    console.error('Delete job error:', error);
    res.status(500).json({ error: 'Failed to delete job' });
  }
});

// Update application status
router.put('/applications/:id/status', async (req, res) => {
  try {
    const applicationId = req.params.id;
    const { status } = req.body;

    if (!['pending', 'accepted', 'rejected'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    await db().collection('applications').doc(applicationId).update({
      status,
      updatedAt: new Date(),
    });

    const updatedApp = await db().collection('applications').doc(applicationId).get();
    res.json({
      id: updatedApp.id,
      ...updatedApp.data(),
    });
  } catch (error) {
    console.error('Update application status error:', error);
    res.status(500).json({ error: 'Failed to update application status' });
  }
});

module.exports = router;

