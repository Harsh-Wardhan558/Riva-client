const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const { db } = require('../config/firebase');
const { authenticateToken } = require('../middleware/auth');

// Register a new user
router.post('/register', async (req, res) => {
  try {
    const { firstName, lastName, email, password, userType } = req.body;

    // Validation
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    if (password.length < 8) {
      return res.status(400).json({ error: 'Password must be at least 8 characters' });
    }

    // Check if user already exists
    const userRef = db().collection('users').where('email', '==', email);
    const snapshot = await userRef.get();

    if (!snapshot.empty) {
      return res.status(400).json({ error: 'User already exists with this email' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user in Firestore
    const userData = {
      firstName,
      lastName,
      email,
      password: hashedPassword,
      userType: userType || 'jobseeker',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const newUserRef = await db().collection('users').add(userData);
    const userId = newUserRef.id;

    // Generate JWT token
    const token = jwt.sign(
      { userId, email, userType: userData.userType },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    // Remove password from response
    delete userData.password;

    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: {
        id: userId,
        ...userData,
      },
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Failed to register user' });
  }
});

// Login user
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Find user by email
    const userRef = db().collection('users').where('email', '==', email);
    const snapshot = await userRef.get();

    if (snapshot.empty) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const userDoc = snapshot.docs[0];
    const userData = userDoc.data();
    const userId = userDoc.id;

    // Verify password
    const isValidPassword = await bcrypt.compare(password, userData.password);

    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId, email: userData.email, userType: userData.userType },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    // Remove password from response
    delete userData.password;

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: userId,
        ...userData,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Failed to login' });
  }
});

// Get current user
router.get('/me', authenticateToken, async (req, res) => {
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
    console.error('Get user error:', error);
    res.status(500).json({ error: 'Failed to get user' });
  }
});

// Logout user
router.post('/logout', authenticateToken, async (req, res) => {
  // In a stateless JWT system, logout is handled client-side
  res.json({ message: 'Logged out successfully' });
});

module.exports = router;

