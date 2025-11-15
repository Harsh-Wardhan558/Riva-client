# Security Fix - Firebase Service Account Credentials

## Issue Fixed
The Firebase service account JSON file (`server/firebase-service-account.json`) was exposed in the GitHub repository, which is a critical security vulnerability.

## Actions Taken

1. ✅ **Deleted the exposed file** - Removed `server/firebase-service-account.json` from the repository
2. ✅ **Updated .gitignore** - Added comprehensive rules to prevent sensitive files from being committed
3. ✅ **Updated Firebase configuration** - Modified `server/config/firebase.js` to:
   - Prioritize environment variables over file-based authentication
   - Disable file-based auth in production
   - Only allow file-based auth in development (local only)
4. ✅ **Created .env.example** - Added template for environment variables

## Next Steps (REQUIRED)

### 1. Revoke the Exposed Service Account Key

**CRITICAL:** The exposed service account key must be revoked immediately:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to: **IAM & Admin** → **Service Accounts**
3. Find: `firebase-adminsdk-fbsvc@riva-scientific.iam.gserviceaccount.com`
4. Click on the service account
5. Go to **Keys** tab
6. Find key ID: `3ef3e375b230aad53b238e14da83860952449573`
7. Click **Delete** to revoke the exposed key
8. Generate a new key if needed

### 2. Set Up Environment Variables

For **local development**, create a `.env` file in the `server` directory:

```env
FIREBASE_PROJECT_ID=riva-scientific
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_NEW_PRIVATE_KEY\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-fbsvc@riva-scientific.iam.gserviceaccount.com
JWT_SECRET=your-secret-key
```

For **production** (Cloud Run, etc.), set these as environment variables in your deployment platform.

### 3. Verify .gitignore is Working

Run this command to ensure sensitive files are ignored:

```bash
git status
```

You should NOT see:
- `firebase-service-account.json`
- `.env`
- Any other sensitive files

### 4. Commit and Push

```bash
git add .gitignore server/config/firebase.js server/.env.example SECURITY_FIX.md
git commit -m "Security fix: Remove exposed Firebase credentials, use environment variables"
git push
```

## Important Notes

- ⚠️ **Never commit** `firebase-service-account.json` or `.env` files
- ✅ **Always use** environment variables for credentials
- ✅ The `.gitignore` file now prevents these files from being committed
- ✅ The code now prioritizes environment variables over files

## Verification

After setting up environment variables, test the connection:

```bash
cd server
node -e "require('./config/firebase').initializeFirebase(); console.log('✅ Firebase initialized successfully!');"
```

If you see "Firebase Admin initialized successfully", you're good to go!

