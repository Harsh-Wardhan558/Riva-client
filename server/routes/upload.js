const express = require('express');
const router = express.Router();
const multer = require('multer');
const { bucket } = require('../config/firebase');

// Configure multer for memory storage
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['application/pdf', 'application/msword', 
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only PDF, DOC, and DOCX files are allowed'), false);
    }
  },
});

// Upload resume to Firebase Storage
router.post('/resume', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const file = req.file;
    const timestamp = Date.now();
    const sanitizedFileName = file.originalname.replace(/[^a-zA-Z0-9.-]/g, '_');
    const storageFileName = `resumes/${timestamp}_${sanitizedFileName}`;
    
    // Upload to Firebase Storage
    const fileRef = bucket().file(storageFileName);
    
    await fileRef.save(file.buffer, {
      metadata: {
        contentType: file.mimetype,
      },
    });

    // Make file publicly accessible
    await fileRef.makePublic();

    // Get public URL
    const publicUrl = `https://storage.googleapis.com/${bucket().name}/${storageFileName}`;

    res.json({
      message: 'Resume uploaded successfully',
      resumeUrl: publicUrl,
      fileName: sanitizedFileName,
    });
  } catch (error) {
    console.error('Upload resume error:', error);
    res.status(500).json({ error: 'Failed to upload resume: ' + error.message });
  }
});

module.exports = router;

