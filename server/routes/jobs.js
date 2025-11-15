const express = require('express');
const router = express.Router();
const validator = require('validator');
const { db } = require('../config/firebase');
const { sendEmail, emailTemplates } = require('../utils/emailService');

// Get all jobs with optional filters
router.get('/', async (req, res) => {
  try {
    let jobsRef = db().collection('jobs');

    // Apply filters
    if (req.query.category) {
      jobsRef = jobsRef.where('category', '==', req.query.category);
    }
    if (req.query.type) {
      jobsRef = jobsRef.where('type', '==', req.query.type);
    }
    if (req.query.location) {
      jobsRef = jobsRef.where('location', '==', req.query.location);
    }

    const snapshot = await jobsRef.orderBy('createdAt', 'desc').get();

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
    console.error('Get jobs error:', error);
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
});

// Search jobs
router.get('/search', async (req, res) => {
  try {
    const searchTerm = req.query.q || '';
    const jobsRef = db().collection('jobs');
    const snapshot = await jobsRef.get();

    const jobs = [];
    snapshot.forEach((doc) => {
      const jobData = doc.data();
      const searchLower = searchTerm.toLowerCase();

      // Search in title, company, location, description
      if (
        jobData.title?.toLowerCase().includes(searchLower) ||
        jobData.company?.toLowerCase().includes(searchLower) ||
        jobData.location?.toLowerCase().includes(searchLower) ||
        jobData.description?.toLowerCase().includes(searchLower)
      ) {
        jobs.push({
          id: doc.id,
          ...jobData,
          createdAt: jobData.createdAt?.toDate?.()?.toISOString() || jobData.createdAt,
        });
      }
    });

    res.json(jobs);
  } catch (error) {
    console.error('Search jobs error:', error);
    res.status(500).json({ error: 'Failed to search jobs' });
  }
});

// Get job by ID
router.get('/:id', async (req, res) => {
  try {
    const jobId = req.params.id;
    const jobDoc = await db().collection('jobs').doc(jobId).get();

    if (!jobDoc.exists) {
      return res.status(404).json({ error: 'Job not found' });
    }

    const jobData = jobDoc.data();
    res.json({
      id: jobDoc.id,
      ...jobData,
      createdAt: jobData.createdAt?.toDate?.()?.toISOString() || jobData.createdAt,
    });
  } catch (error) {
    console.error('Get job error:', error);
    res.status(500).json({ error: 'Failed to fetch job' });
  }
});

// Apply to a job (public - no auth required)
router.post('/:id/apply', async (req, res) => {
  try {
    const jobId = req.params.id;
    const { firstName, lastName, email, phone, coverLetter, resumeUrl } = req.body;

    // Validation
    if (!firstName || !lastName || !email || !resumeUrl) {
      return res.status(400).json({ error: 'First name, last name, email, and resume are required' });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    const jobDoc = await db().collection('jobs').doc(jobId).get();

    if (!jobDoc.exists) {
      return res.status(404).json({ error: 'Job not found' });
    }

    const jobData = jobDoc.data();

    // Check if already applied (by email)
    const existingApplication = await db()
      .collection('applications')
      .where('jobId', '==', jobId)
      .where('email', '==', email)
      .get();

    if (!existingApplication.empty) {
      return res.status(400).json({ error: 'You have already applied to this job' });
    }

    const applicationData = {
      jobId,
      firstName,
      lastName,
      email,
      phone: phone || '',
      coverLetter: coverLetter || '',
      resumeUrl,
      status: 'pending',
      createdAt: new Date(),
    };

    const applicationRef = await db().collection('applications').add(applicationData);
    const applicationId = applicationRef.id;

    // Send emails
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@rivarecruitment.com';
    
    // Email to admin
    const adminEmailHtml = emailTemplates.jobApplicationToAdmin(
      applicationData,
      { id: jobId, ...jobData },
      { firstName, lastName, email }
    );
    await sendEmail(adminEmail, `New Application: ${jobData.title}`, adminEmailHtml);

    // Email to applicant
    const userEmailHtml = emailTemplates.jobApplicationToUser(applicationData, { id: jobId, ...jobData });
    await sendEmail(email, 'Application Submitted Successfully', userEmailHtml);

    res.status(201).json({
      message: 'Application submitted successfully',
      id: applicationId,
      ...applicationData,
    });
  } catch (error) {
    console.error('Apply job error:', error);
    res.status(500).json({ error: 'Failed to submit application' });
  }
});

module.exports = router;

