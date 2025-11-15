# Complete Deployment Guide

## Overview

This guide covers deploying:
- **Backend**: Google Cloud Run
- **Frontend**: Firebase Hosting

## Quick Deploy Script

Use the PowerShell script for easy deployment:

```powershell
.\deploy.ps1
```

## Manual Deployment

### Part 1: Deploy Backend to Cloud Run

#### Prerequisites
```bash
# Install Google Cloud SDK
# Download from: https://cloud.google.com/sdk/docs/install

# Authenticate
gcloud auth login
gcloud config set project riva-scientific

# Enable APIs
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com
```

#### Deploy
```bash
cd server

# Build and deploy
gcloud builds submit --tag gcr.io/riva-scientific/riva-backend

gcloud run deploy riva-backend \
  --image gcr.io/riva-scientific/riva-backend \
  --region us-central1 \
  --platform managed \
  --allow-unauthenticated \
  --set-env-vars "NODE_ENV=production,SMTP_HOST=smtp.gmail.com,SMTP_PORT=587,CORS_ORIGINS=https://riva-scientific.web.app"
```

#### Set Environment Variables
```bash
# Get your backend URL first
BACKEND_URL=$(gcloud run services describe riva-backend --region us-central1 --format 'value(status.url)')

# Set environment variables (you'll need to set secrets for sensitive data)
gcloud run services update riva-backend \
  --region us-central1 \
  --set-env-vars "NODE_ENV=production,SMTP_HOST=smtp.gmail.com,SMTP_PORT=587,SMTP_USER=debasishsadangi452@gmail.com,SMTP_PASS=your-app-password,ADMIN_EMAIL=dsadangi31012002@gmail.com,JWT_SECRET=your-jwt-secret,CORS_ORIGINS=https://riva-scientific.web.app"
```

**Note:** For production, use Google Secret Manager for sensitive data instead of env vars.

#### Get Backend URL
```bash
gcloud run services describe riva-backend --region us-central1 --format 'value(status.url)'
```

### Part 2: Deploy Frontend to Firebase Hosting

#### Prerequisites
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize (if not done)
firebase init hosting
```

#### Build and Deploy
```bash
# Get your backend URL
BACKEND_URL="https://riva-backend-xxxxx-uc.a.run.app"

# Build frontend with production API URL
cd client
VITE_API_URL="$BACKEND_URL/api" npm run build

# Deploy
cd ..
firebase deploy --only hosting
```

## Post-Deployment

### 1. Update CORS in Backend

Make sure your backend allows requests from your frontend domain:

```bash
gcloud run services update riva-backend \
  --region us-central1 \
  --set-env-vars "CORS_ORIGINS=https://riva-scientific.web.app,https://riva-scientific.firebaseapp.com"
```

### 2. Verify Deployment

**Backend:**
- Visit: `https://your-backend-url.run.app/api/health`
- Should return: `{"status":"ok","message":"Server is running"}`

**Frontend:**
- Visit: `https://riva-scientific.web.app`
- Check browser console for API connection

### 3. Test Functionality

1. ✅ Contact form submission
2. ✅ Job listing
3. ✅ User registration/login
4. ✅ Admin dashboard

## Environment Variables Reference

### Backend (Cloud Run)
- `NODE_ENV=production`
- `SMTP_HOST=smtp.gmail.com`
- `SMTP_PORT=587`
- `SMTP_USER=your-email@gmail.com`
- `SMTP_PASS=your-app-password`
- `ADMIN_EMAIL=admin@example.com`
- `JWT_SECRET=your-secret-key`
- `CORS_ORIGINS=https://your-frontend-url.web.app`

### Frontend (Build-time)
- `VITE_API_URL=https://your-backend-url.run.app/api`

## Using Google Secret Manager (Recommended for Production)

Instead of environment variables, use secrets:

```bash
# Create secrets
echo -n "your-value" | gcloud secrets create secret-name --data-file=-

# Grant access
gcloud secrets add-iam-policy-binding secret-name \
  --member="serviceAccount:PROJECT_NUMBER-compute@developer.gserviceaccount.com" \
  --role="roles/secretmanager.secretAccessor"

# Use in Cloud Run
gcloud run services update riva-backend \
  --region us-central1 \
  --set-secrets "SMTP_PASS=smtp-pass:latest"
```

## Troubleshooting

### Backend Issues

**Service not accessible:**
- Check `--allow-unauthenticated` flag
- Verify IAM permissions

**Environment variables not working:**
- Check secret access permissions
- Verify variable names match code

**CORS errors:**
- Update `CORS_ORIGINS` with frontend URL
- Restart service after updating

### Frontend Issues

**API not connecting:**
- Verify `VITE_API_URL` is set during build
- Check backend CORS settings
- Verify backend is running

**404 errors:**
- Check Firebase hosting rewrites
- Ensure `dist` folder exists

## Cost Estimation

**Cloud Run:**
- Free tier: 2 million requests/month
- After: ~$0.40 per million requests

**Firebase Hosting:**
- Free tier: 10 GB storage, 360 MB/day transfer
- After: Pay as you go

## Next Steps

1. ✅ Set up custom domain (optional)
2. ✅ Configure SSL certificates (automatic)
3. ✅ Set up monitoring and alerts
4. ✅ Configure backup strategy
5. ✅ Set up CI/CD pipeline

## Support

- Cloud Run Docs: https://cloud.google.com/run/docs
- Firebase Hosting: https://firebase.google.com/docs/hosting
- See `server/DEPLOY_CLOUD_RUN.md` for detailed backend deployment
- See `DEPLOY_FRONTEND.md` for detailed frontend deployment

