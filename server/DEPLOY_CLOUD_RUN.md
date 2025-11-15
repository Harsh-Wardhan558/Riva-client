# Deploy Backend to Google Cloud Run

## Prerequisites

1. **Google Cloud SDK installed**
   ```bash
   # Download from: https://cloud.google.com/sdk/docs/install
   ```

2. **Authenticate with Google Cloud**
   ```bash
   gcloud auth login
   gcloud config set project riva-scientific
   ```

3. **Enable required APIs**
   ```bash
   gcloud services enable cloudbuild.googleapis.com
   gcloud services enable run.googleapis.com
   gcloud services enable containerregistry.googleapis.com
   ```

## Method 1: Deploy using gcloud CLI (Recommended)

### Step 1: Build and Deploy

```bash
cd server

# Build the container
gcloud builds submit --tag gcr.io/riva-scientific/riva-backend

# Deploy to Cloud Run (PowerShell - single line)
gcloud run deploy riva-backend --image gcr.io/riva-scientific/riva-backend --region us-central1 --platform managed --allow-unauthenticated --set-env-vars "NODE_ENV=production,SMTP_HOST=smtp.gmail.com,SMTP_PORT=587,SMTP_USER=debasishsadangi452@gmail.com,SMTP_PASS=bkagnoqpsyiadsei,ADMIN_EMAIL=dsadangi31012002@gmail.com,JWT_SECRET=your-jwt-secret-here"
```

### Step 2: Set Environment Variables

After deployment, set environment variables:

**PowerShell:**
```powershell
gcloud run services update riva-backend --region us-central1 --set-env-vars "NODE_ENV=production,SMTP_HOST=smtp.gmail.com,SMTP_PORT=587,CORS_ORIGINS=https://your-frontend-url.web.app"
```

**Bash:**
```bash
gcloud run services update riva-backend \
  --region us-central1 \
  --set-env-vars "NODE_ENV=production,SMTP_HOST=smtp.gmail.com,SMTP_PORT=587,CORS_ORIGINS=https://your-frontend-url.web.app"
```

### Step 3: Upload Secrets (Recommended for sensitive data)

**PowerShell:**
```powershell
# Upload Firebase service account
gcloud secrets create firebase-service-account --data-file=firebase-service-account.json

# Upload email credentials
"debasishsadangi452@gmail.com" | gcloud secrets create smtp-user --data-file=-
"your-app-password" | gcloud secrets create smtp-pass --data-file=-
"your-jwt-secret" | gcloud secrets create jwt-secret --data-file=-
"dsadangi31012002@gmail.com" | gcloud secrets create admin-email --data-file=-

# Grant Cloud Run access to secrets
gcloud secrets add-iam-policy-binding firebase-service-account --member="serviceAccount:YOUR_SERVICE_ACCOUNT@riva-scientific.iam.gserviceaccount.com" --role="roles/secretmanager.secretAccessor"
```

**Bash:**
```bash
# Upload Firebase service account
gcloud secrets create firebase-service-account --data-file=firebase-service-account.json

# Upload email credentials
echo -n "debasishsadangi452@gmail.com" | gcloud secrets create smtp-user --data-file=-
echo -n "your-app-password" | gcloud secrets create smtp-pass --data-file=-
echo -n "your-jwt-secret" | gcloud secrets create jwt-secret --data-file=-
echo -n "dsadangi31012002@gmail.com" | gcloud secrets create admin-email --data-file=-

# Grant Cloud Run access to secrets
gcloud secrets add-iam-policy-binding firebase-service-account \
  --member="serviceAccount:YOUR_SERVICE_ACCOUNT@riva-scientific.iam.gserviceaccount.com" \
  --role="roles/secretmanager.secretAccessor"
```

## Method 2: Deploy using Cloud Build

**PowerShell:**
```powershell
cd server
gcloud builds submit --config cloudbuild.yaml
```

**Bash:**
```bash
cd server
gcloud builds submit --config cloudbuild.yaml
```

## Get Your Backend URL

After deployment, get your Cloud Run URL:

**PowerShell/Bash:**
```powershell
gcloud run services describe riva-backend --region us-central1 --format 'value(status.url)'
```

The URL will look like: `https://riva-backend-xxxxx-uc.a.run.app`

## Update Frontend

Update your frontend `.env` or build with:

```env
VITE_API_URL=https://riva-backend-xxxxx-uc.a.run.app/api
```

## Troubleshooting

**View logs:**
```powershell
gcloud run services logs read riva-backend --region us-central1
```

**Update service:**
```powershell
gcloud run services update riva-backend --region us-central1
```

**Check service status:**
```powershell
gcloud run services describe riva-backend --region us-central1
```

## Important Notes

1. **Firebase Service Account**: Upload as secret or include in Docker image (less secure)
2. **Environment Variables**: Set all required env vars in Cloud Run
3. **CORS**: Update `CORS_ORIGINS` with your frontend URL
4. **Cold Starts**: First request may be slow (Cloud Run scales to zero)

