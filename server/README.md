# Riva Recruitment - Node.js Backend

Node.js/Express backend for Riva Recruitment application using Firestore for data storage.

## Features

- 🔐 **Authentication**: User registration, login, JWT tokens
- 💼 **Jobs Management**: CRUD operations for job postings
- 📝 **Applications**: Public job applications with resume upload
- 👤 **User Profiles**: Profile management
- 🏢 **Companies**: Company listings
- 📧 **Contact**: Contact form with email notifications
- 🔒 **Admin Dashboard**: Admin-only routes for managing jobs, applications, and messages
- 📎 **File Upload**: Resume upload to Firebase Storage
- ✉️ **Email Notifications**: Automated emails for applications and contact forms

## Tech Stack

- **Node.js** with Express.js
- **Firestore** (Firebase) for database
- **Firebase Storage** for file uploads
- **JWT** for authentication
- **Nodemailer** for email notifications
- **Multer** for file uploads

## Setup Instructions

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Firebase Service Account Setup

You need to get your Firebase service account credentials:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `riva-scientific`
3. Go to Project Settings → Service Accounts
4. Click "Generate new private key"
5. Save the JSON file as `server/firebase-service-account.json`

**OR** use environment variables (see `.env.example`)

### 3. Environment Configuration

Create a `.env` file in the `server` directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Firebase Configuration (if not using service account file)
FIREBASE_PROJECT_ID=riva-scientific
FIREBASE_PRIVATE_KEY=your-private-key
FIREBASE_CLIENT_EMAIL=your-client-email

# JWT Secret
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Admin Email
ADMIN_EMAIL=admin@rivarecruitment.com

# Email Configuration (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# CORS Origins (comma-separated)
CORS_ORIGINS=http://localhost:3000,http://localhost:5173
```

### 4. Start the Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)
- `POST /api/auth/logout` - Logout (protected)

### Jobs
- `GET /api/jobs` - Get all jobs (with filters: category, type, location)
- `GET /api/jobs/search?q=term` - Search jobs
- `GET /api/jobs/:id` - Get job by ID
- `POST /api/jobs/:id/apply` - Apply to job (public)

### Upload
- `POST /api/upload/resume` - Upload resume (multipart/form-data)

### User Profile
- `GET /api/users/profile` - Get user profile (protected)
- `PUT /api/users/profile` - Update profile (protected)
- `GET /api/users/applications` - Get user's applications (protected)

### Companies
- `GET /api/companies` - Get all companies
- `GET /api/companies/:id` - Get company by ID
- `GET /api/companies/:id/jobs` - Get company's jobs

### Contact
- `POST /api/contact` - Send contact message

### Admin (Protected - Admin only)
- `GET /api/admin/applications` - Get all applications
- `GET /api/admin/contact-messages` - Get all contact messages
- `POST /api/admin/jobs` - Create job
- `PUT /api/admin/jobs/:id` - Update job
- `DELETE /api/admin/jobs/:id` - Delete job
- `PUT /api/admin/applications/:id/status` - Update application status

## Project Structure

```
server/
├── config/
│   └── firebase.js          # Firebase Admin initialization
├── middleware/
│   └── auth.js              # Authentication middleware
├── routes/
│   ├── auth.js              # Authentication routes
│   ├── jobs.js              # Job routes
│   ├── users.js             # User profile routes
│   ├── companies.js         # Company routes
│   ├── contact.js           # Contact form routes
│   ├── admin.js             # Admin routes
│   └── upload.js            # File upload routes
├── utils/
│   └── emailService.js      # Email service and templates
├── server.js                # Main server file
├── package.json
└── .env                     # Environment variables (create this)
```

## Creating Admin User

To create an admin user, you can:

1. **Via Firestore Console:**
   - Go to Firestore Database
   - Create a document in `users` collection
   - Set `userType: "admin"`
   - Hash the password using bcrypt

2. **Via Node.js script:**
   ```javascript
   const bcrypt = require('bcryptjs');
   const hash = bcrypt.hashSync('your-password', 10);
   console.log(hash); // Use this hash in Firestore
   ```

## Testing

Test the API using tools like Postman or curl:

```bash
# Health check
curl http://localhost:5000/api/health

# Register user
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"firstName":"John","lastName":"Doe","email":"john@example.com","password":"password123"}'

# Get jobs
curl http://localhost:5000/api/jobs
```

## Deployment

See `DEPLOYMENT.md` for deployment instructions to various platforms (Heroku, Railway, Render, etc.)

## Security Notes

- Never commit `.env` file or `firebase-service-account.json` to git
- Use strong JWT secret in production
- Enable CORS only for your frontend domain in production
- Use environment variables for all sensitive data
- Keep Firebase service account credentials secure

