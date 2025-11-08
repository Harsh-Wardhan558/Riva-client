const nodemailer = require('nodemailer');

// Email configuration
const getEmailConfig = () => {
  return {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER || '',
      pass: process.env.SMTP_PASS || '',
    },
  };
};

// Create transporter
const createTransporter = () => {
  const config = getEmailConfig();
  return nodemailer.createTransport(config);
};

// Send email
const sendEmail = async (to, subject, html, text) => {
  try {
    const config = getEmailConfig();
    
    // Check if email is configured
    if (!config.auth.user || !config.auth.pass) {
      console.warn('Email not configured. Skipping email send.');
      return { success: false, error: 'Email service not configured' };
    }

    const transporter = createTransporter();
    const mailOptions = {
      from: `"Riva Recruitment" <${config.auth.user}>`,
      to,
      subject,
      html,
      text: text || html.replace(/<[^>]*>/g, ''),
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Email error:', error.message);
    return { success: false, error: error.message };
  }
};

// Email templates
const emailTemplates = {
  jobApplicationToAdmin: (applicationData, jobData, userData) => {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #2563eb; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #f9fafb; }
          .info-box { background: white; padding: 15px; margin: 10px 0; border-left: 4px solid #2563eb; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Job Application Received</h2>
          </div>
          <div class="content">
            <p>A new application has been submitted for the position:</p>
            <div class="info-box">
              <strong>Job Title:</strong> ${jobData.title}<br>
              <strong>Company:</strong> ${jobData.company}<br>
              <strong>Location:</strong> ${jobData.location}
            </div>
            <div class="info-box">
              <strong>Applicant Name:</strong> ${userData.firstName} ${userData.lastName}<br>
              <strong>Email:</strong> ${userData.email}<br>
              ${applicationData.resumeUrl ? `<strong>Resume:</strong> <a href="${applicationData.resumeUrl}">View Resume</a><br>` : ''}
            </div>
            ${applicationData.coverLetter ? `<div class="info-box"><strong>Cover Letter:</strong><br>${applicationData.coverLetter}</div>` : ''}
            <p>Please review this application in the admin dashboard.</p>
          </div>
        </div>
      </body>
      </html>
    `;
  },

  jobApplicationToUser: (applicationData, jobData) => {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #2563eb; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #f9fafb; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Application Submitted Successfully</h2>
          </div>
          <div class="content">
            <p>Thank you for applying! We have received your application for:</p>
            <p><strong>${jobData.title}</strong> at <strong>${jobData.company}</strong></p>
            <p>We will review your application and get back to you soon.</p>
            <p>Best regards,<br>Riva Recruitment Team</p>
          </div>
        </div>
      </body>
      </html>
    `;
  },

  contactFormToAdmin: (contactData) => {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #2563eb; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #f9fafb; }
          .info-box { background: white; padding: 15px; margin: 10px 0; border-left: 4px solid #2563eb; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Contact Form Submission</h2>
          </div>
          <div class="content">
            <div class="info-box">
              <strong>Name:</strong> ${contactData.name}<br>
              <strong>Email:</strong> ${contactData.email}<br>
              <strong>Subject:</strong> ${contactData.subject}
            </div>
            <div class="info-box">
              <strong>Message:</strong><br>${contactData.message}
            </div>
          </div>
        </div>
      </body>
      </html>
    `;
  },

  contactFormToUser: (contactData) => {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #2563eb; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #f9fafb; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Thank You for Contacting Us</h2>
          </div>
          <div class="content">
            <p>Hello ${contactData.name},</p>
            <p>We have received your message regarding "${contactData.subject}".</p>
            <p>Our team will review your inquiry and get back to you as soon as possible.</p>
            <p>Best regards,<br>Riva Recruitment Team</p>
          </div>
        </div>
      </body>
      </html>
    `;
  },
};

module.exports = {
  sendEmail,
  emailTemplates,
};

