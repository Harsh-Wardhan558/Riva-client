# Deploy Frontend to Firebase Hosting

## Prerequisites

1. **Firebase CLI installed**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase (if not done)**
   ```bash
   firebase init hosting
   ```

## Step 1: Build Frontend

```bash
cd client
npm install
npm run build
```

This creates a `client/dist` folder with production-ready files.

## Step 2: Update API URL for Production

Before building, update the API URL:

**Option A: Create production .env file**
```bash
cd client
echo "VITE_API_URL=https://your-cloud-run-url.run.app/api" > .env.production
```

**Option B: Build with environment variable**
```bash
cd client
VITE_API_URL=https://your-cloud-run-url.run.app/api npm run build
```

Replace `your-cloud-run-url.run.app` with your actual Cloud Run backend URL.

## Step 3: Deploy to Firebase Hosting

```bash
# From project root
firebase deploy --only hosting
```

Or deploy from client directory:
```bash
cd client
npm run build
cd ..
firebase deploy --only hosting
```

## Step 4: Verify Deployment

1. Check Firebase Console: https://console.firebase.google.com/project/riva-scientific/hosting
2. Visit your site: `https://riva-scientific.web.app` (or your custom domain)

## Update Existing Deployment

To update after changes:

```bash
cd client
npm run build
cd ..
firebase deploy --only hosting
```

## Custom Domain (Optional)

1. Go to Firebase Console → Hosting
2. Click "Add custom domain"
3. Follow the instructions to verify your domain

## Environment-Specific Builds

### Development
```bash
cd client
npm run dev
```

### Production
```bash
cd client
VITE_API_URL=https://your-backend-url.run.app/api npm run build
firebase deploy --only hosting
```

## Troubleshooting

**Build fails:**
- Check Node.js version (should be 16+)
- Run `npm install` in client directory
- Check for TypeScript/ESLint errors

**API not connecting:**
- Verify `VITE_API_URL` is set correctly
- Check CORS settings in backend
- Verify backend is deployed and running

**404 errors:**
- Check `firebase.json` rewrites configuration
- Ensure `dist` folder is being deployed

