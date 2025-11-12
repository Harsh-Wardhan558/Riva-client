const admin = require('firebase-admin');
const path = require('path');

// Initialize Firebase Admin
let initialized = false;

const initializeFirebase = () => {
  if (initialized) {
    return admin;
  }

  try {
    // SECURITY: Always use environment variables in production
    // Never use service account files in production
    if (process.env.FIREBASE_PRIVATE_KEY && process.env.FIREBASE_CLIENT_EMAIL) {
      console.log('Loading Firebase credentials from environment variables...');
      // Use environment variables (preferred method)
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: process.env.FIREBASE_PROJECT_ID || 'riva-scientific',
          privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        }),
        storageBucket: `${process.env.FIREBASE_PROJECT_ID || 'riva-scientific'}.appspot.com`
      });
    } else if (process.env.NODE_ENV !== 'production') {
      // Only allow file-based auth in development
      const fs = require('fs');
      const serviceAccountPath = path.join(__dirname, '../firebase-service-account.json');
      
      if (fs.existsSync(serviceAccountPath)) {
        console.log('⚠️  Loading Firebase credentials from file (development only)...');
        const serviceAccount = require(serviceAccountPath);
        admin.initializeApp({
          credential: admin.credential.cert(serviceAccount),
          storageBucket: serviceAccount.project_id ? `${serviceAccount.project_id}.appspot.com` : `${process.env.FIREBASE_PROJECT_ID || 'riva-scientific'}.appspot.com`
        });
      } else {
        const errorMsg = 'Firebase credentials not found. Please set environment variables (FIREBASE_PRIVATE_KEY, FIREBASE_CLIENT_EMAIL, FIREBASE_PROJECT_ID).';
        console.error('❌', errorMsg);
        throw new Error(errorMsg);
      }
    } else {
      const errorMsg = 'Firebase credentials not found. Please set environment variables (FIREBASE_PRIVATE_KEY, FIREBASE_CLIENT_EMAIL, FIREBASE_PROJECT_ID).';
      console.error('❌', errorMsg);
      console.warn('⚠️  Continuing without Firebase (health check may still work)');
      return null;
    }

    initialized = true;
    console.log('✅ Firebase Admin initialized successfully');
    return admin;
  } catch (error) {
    console.error('❌ Error initializing Firebase Admin:', error.message);
    console.error('Please ensure firebase-service-account.json exists or environment variables are set.');
    // In production, don't throw - let server start for health checks
    if (process.env.NODE_ENV === 'production') {
      console.warn('⚠️  Continuing without Firebase (health check may still work)');
      return null;
    }
    throw error;
  }
};

const db = () => {
  if (!initialized) {
    const result = initializeFirebase();
    if (!result) {
      throw new Error('Firebase not initialized. Cannot access Firestore.');
    }
  }
  if (!admin.apps.length) {
    throw new Error('Firebase app not initialized. Cannot access Firestore.');
  }
  return admin.firestore();
};

const bucket = () => {
  if (!initialized) {
    const result = initializeFirebase();
    if (!result) {
      throw new Error('Firebase not initialized. Cannot access Storage.');
    }
  }
  if (!admin.apps.length) {
    throw new Error('Firebase app not initialized. Cannot access Storage.');
  }
  return admin.storage().bucket();
};

module.exports = {
  admin,
  db,
  bucket,
  initializeFirebase
};

