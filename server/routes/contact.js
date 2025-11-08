const express = require('express');
const router = express.Router();
const validator = require('validator');
const { db, admin } = require('../config/firebase');
const { sendEmail, emailTemplates } = require('../utils/emailService');

// Send contact message
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Ensure Firebase is initialized
    const firestore = db();
    if (!firestore) {
      throw new Error('Firestore not initialized');
    }

    const contactData = {
      name,
      email,
      subject,
      message,
      status: 'new',
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };

    const contactRef = await firestore.collection('contactMessages').add(contactData);

    // Send emails (don't fail if email service is not configured)
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@rivarecruitment.com';
    
    // Email to admin (non-blocking)
    const adminEmailHtml = emailTemplates.contactFormToAdmin(contactData);
    sendEmail(adminEmail, `New Contact Form: ${subject}`, adminEmailHtml)
      .then(result => {
        if (result.success) {
          console.log('Admin email sent successfully');
        } else {
          console.warn('Admin email not sent:', result.error);
        }
      })
      .catch(err => console.error('Admin email error:', err));

    // Email to user (non-blocking)
    const userEmailHtml = emailTemplates.contactFormToUser(contactData);
    sendEmail(email, 'Thank You for Contacting Us', userEmailHtml)
      .then(result => {
        if (result.success) {
          console.log('User email sent successfully');
        } else {
          console.warn('User email not sent:', result.error);
        }
      })
      .catch(err => console.error('User email error:', err));

    res.status(201).json({
      message: 'Your message has been sent successfully',
      id: contactRef.id,
    });
  } catch (error) {
    console.error('Contact error:', error);
    console.error('Error stack:', error.stack);
    res.status(500).json({ 
      error: 'Failed to send message',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

module.exports = router;

