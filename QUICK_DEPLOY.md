# Quick Deployment Guide

## Prerequisites

1. **Google Cloud SDK**: https://cloud.google.com/sdk/docs/install
2. **Firebase CLI**: `npm install -g firebase-tools`
3. **Authenticated**: 
   ```bash
   gcloud auth login
   firebase login
   ```

## Step 1: Deploy Backend to Cloud Run

```bash
cd server

# Build and deploy
gcloud builds submit --tag gcr.io/riva-scientific/riva-backend

# PowerShell (Windows)
gcloud run deploy riva-backend --image gcr.io/riva-scientific/riva-backend --region us-central1 --platform managed --allow-unauthenticated --set-env-vars "NODE_ENV=production,SMTP_HOST=smtp.gmail.com,SMTP_PORT=587,SMTP_USER=debasishsadangi452@gmail.com,SMTP_PASS=bkagnoqpsyiadsei,ADMIN_EMAIL=dsadangi31012002@gmail.com,JWT_SECRET=your-jwt-secret-here"

# Or use backticks for line continuation in PowerShell:
# gcloud run deploy riva-backend `
#   --image gcr.io/riva-scientific/riva-backend `
#   --region us-central1 `
#   --platform managed `
#   --allow-unauthenticated `
#   --set-env-vars "NODE_ENV=production,SMTP_HOST=smtp.gmail.com,SMTP_PORT=587,SMTP_USER=debasishsadangi452@gmail.com,SMTP_PASS=bkagnoqpsyiadsei,ADMIN_EMAIL=dsadangi31012002@gmail.com,JWT_SECRET=your-jwt-secret-here"

    # Get backend URL
    gcloud run services describe riva-backend --region us-central1 --format 'value(status.url)'
    
    # ✅ Your backend URL: https://riva-backend-254418131945.us-central1.run.app
```

**Save the backend URL** - you'll need it for the frontend!

## Step 2: Deploy Frontend to Firebase Hosting

```bash
# Replace YOUR_BACKEND_URL with the URL from Step 1
BACKEND_URL="https://riva-backend-xxxxx-uc.a.run.app"

# Build frontend
cd client
VITE_API_URL="$BACKEND_URL/api" npm run build

# Deploy
cd ..
firebase deploy --only hosting
```

## Step 3: Update CORS (Important!)

After deploying frontend, update backend CORS:

**PowerShell:**
```powershell
gcloud run services update riva-backend --region us-central1 --set-env-vars "CORS_ORIGINS=https://riva-scientific.web.app,https://riva-scientific.firebaseapp.com"
```

**Bash:**
```bash
gcloud run services update riva-backend \
  --region us-central1 \
  --set-env-vars "CORS_ORIGINS=https://riva-scientific.web.app,https://riva-scientific.firebaseapp.com"
```

## Done! 🎉

Your app should now be live at:
- **Frontend**: https://riva-scientific.web.app
- **Backend**: https://riva-backend-xxxxx-uc.a.run.app

## Troubleshooting

**Backend not accessible:**
- Check `--allow-unauthenticated` flag
- Verify service is running: `gcloud run services list`

**Frontend API errors:**
- Verify CORS_ORIGINS includes your frontend URL
- Check backend URL is correct in frontend build

**Need help?** See `DEPLOYMENT_COMPLETE.md` for detailed instructions.

