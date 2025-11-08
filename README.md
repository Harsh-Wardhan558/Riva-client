# Riva Recruitment Platform

A full-stack recruitment website with React frontend and Node.js backend, using Firestore for data storage.

## Project Structure

```
Riva/
├── client/              # React frontend application
│   ├── src/            # Source code
│   ├── package.json      # Frontend dependencies
│   └── vite.config.js  # Vite configuration
│
├── server/             # Node.js backend application
│   ├── routes/        # API routes
│   ├── config/        # Configuration files
│   ├── middleware/    # Auth middleware
│   ├── utils/         # Utility functions
│   ├── server.js      # Main server file
│   └── package.json   # Backend dependencies
│
├── firestore.rules     # Firestore security rules
└── firestore.indexes.json  # Firestore indexes
```

## Quick Start

### 1. Backend Setup

```bash
cd server
npm install

# Get Firebase credentials (see server/get-firebase-credentials.md)
# Create .env file (see server/.env.example)

npm run dev
```

Backend runs on: `http://localhost:5000`

### 2. Frontend Setup

```bash
cd client
npm install

# Create .env file
echo "REACT_APP_API_URL=http://localhost:5000/api" > .env

npm run dev
```

Frontend runs on: `http://localhost:3000`

## Features

### Frontend (Client)
- Modern, responsive UI with individual CSS for each page
- Job listing and search
- Public job applications with resume upload
- Admin dashboard for managing jobs and applications
- Protected admin routes

### Backend (Server)
- RESTful API with Express.js
- Firestore database integration
- JWT authentication
- Resume upload to Firebase Storage
- Email notifications
- Admin-only protected routes

## Documentation

- **Client:** See `client/README.md`
- **Server:** See `server/README.md`
- **Backend Setup:** See `BACKEND_SETUP.md`
- **Quick Start:** See `QUICK_START.md`
- **Deployment:** See `server/DEPLOYMENT.md`

## Development

### Running Both Client and Server

**Terminal 1 (Backend):**
```bash
cd server
npm run dev
```

**Terminal 2 (Frontend):**
```bash
cd client
npm run dev
```

## Environment Variables

### Client (.env in client/)
```env
REACT_APP_API_URL=http://localhost:5000/api
```

### Server (.env in server/)
```env
PORT=5000
NODE_ENV=development
JWT_SECRET=your-secret-key
FIREBASE_PROJECT_ID=riva-scientific
ADMIN_EMAIL=admin@rivarecruitment.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CORS_ORIGINS=http://localhost:3000,http://localhost:5173
```

## Deployment

### Backend
See `server/DEPLOYMENT.md` for deployment options (Railway, Render, Heroku, etc.)

### Frontend
Build and deploy the `client/dist` folder to any static hosting:
- Firebase Hosting
- Netlify
- Vercel
- GitHub Pages

## License

This project is open source and available for use.
