# How to Get Firebase Service Account Credentials

## Method 1: Download Service Account JSON (Recommended)

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **riva-scientific**
3. Click the gear icon ⚙️ → **Project Settings**
4. Go to **Service Accounts** tab
5. Click **Generate new private key**
6. Click **Generate key** in the popup
7. A JSON file will download
8. Save it as `server/firebase-service-account.json`

**Important:** Never commit this file to git! It's already in `.gitignore`

## Method 2: Use Environment Variables

If you prefer environment variables:

1. Open the downloaded JSON file
2. Copy these values to your `.env`:
   ```env
   FIREBASE_PROJECT_ID=the-project-id-from-json
   FIREBASE_PRIVATE_KEY="the-private-key-from-json"
   FIREBASE_CLIENT_EMAIL=the-client-email-from-json
   ```

**Note:** The private key may have `\n` characters - keep them as is or replace with actual newlines.

## Verify Setup

After setting up, test the connection:

```bash
cd server
node -e "require('./config/firebase').initializeFirebase(); console.log('Firebase initialized!');"
```

If you see "Firebase Admin initialized successfully", you're good to go!

