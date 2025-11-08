const express = require('express');
const router = express.Router();
const { db } = require('../config/firebase');

// Get all companies
router.get('/', async (req, res) => {
  try {
    const snapshot = await db().collection('companies').get();

    const companies = [];
    snapshot.forEach((doc) => {
      companies.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    res.json(companies);
  } catch (error) {
    console.error('Get companies error:', error);
    res.status(500).json({ error: 'Failed to fetch companies' });
  }
});

// Get company by ID
router.get('/:id', async (req, res) => {
  try {
    const companyId = req.params.id;
    const companyDoc = await db().collection('companies').doc(companyId).get();

    if (!companyDoc.exists) {
      return res.status(404).json({ error: 'Company not found' });
    }

    res.json({
      id: companyDoc.id,
      ...companyDoc.data(),
    });
  } catch (error) {
    console.error('Get company error:', error);
    res.status(500).json({ error: 'Failed to fetch company' });
  }
});

// Get jobs by company
router.get('/:id/jobs', async (req, res) => {
  try {
    const companyId = req.params.id;
    const snapshot = await db()
      .collection('jobs')
      .where('companyId', '==', companyId)
      .orderBy('createdAt', 'desc')
      .get();

    const jobs = [];
    snapshot.forEach((doc) => {
      const data = doc.data();
      jobs.push({
        id: doc.id,
        ...data,
        createdAt: data.createdAt?.toDate?.()?.toISOString() || data.createdAt,
      });
    });

    res.json(jobs);
  } catch (error) {
    console.error('Get company jobs error:', error);
    res.status(500).json({ error: 'Failed to fetch company jobs' });
  }
});

module.exports = router;

