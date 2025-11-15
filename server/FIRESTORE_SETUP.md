# Firestore Database Setup

## Error: 5 NOT_FOUND

This error means the Firestore database doesn't exist or the Firestore API is not enabled.

## Solution

### Step 1: Create Firestore Database

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **riva-scientific**
3. Click on **Firestore Database** in the left menu
4. If you see "Create database" button, click it
5. Choose one of these options:
   - **Start in production mode** (recommended) - You'll need to set up security rules
   - **Start in test mode** - Allows read/write for 30 days (for development)
6. Select a **location** for your database (e.g., `us-central1`, `us-east1`)
7. Click **Enable**

### Step 2: Enable Firestore API (if needed)

If the database still doesn't work:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select project: **riva-scientific**
3. Go to **APIs & Services** → **Library**
4. Search for "Cloud Firestore API"
5. Click **Enable** if it's not already enabled

### Step 3: Verify Database Location

Make sure the database location matches what's in your service account:
- Check your `firebase-service-account.json` file
- The `project_id` should be `riva-scientific`

### Step 4: Test Connection

After creating the database, restart your server:

```bash
cd server
npm run dev
```

Try the contact form again. It should work now.

## Quick Check

You can verify Firestore is set up by:
1. Going to Firebase Console → Firestore Database
2. You should see an empty database with no collections
3. After submitting the contact form, you should see a `contactMessages` collection appear

## Security Rules (Production Mode)

If you chose production mode, you'll need to set up security rules. For now, you can use test mode rules temporarily:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.time < timestamp.date(2025, 12, 31);
    }
  }
}
```

**Note:** Test mode rules expire after 30 days. Update them before then!

