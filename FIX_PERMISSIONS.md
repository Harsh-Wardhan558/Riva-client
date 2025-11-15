# Fix Cloud Build Permissions

## Error
```
ERROR: (gcloud.builds.submit) INVALID_ARGUMENT: could not resolve source: 
googleapi: Error 403: 254418131945-compute@developer.gserviceaccount.com 
does not have storage.objects.get access
```

## Quick Fix

Run the PowerShell script:
```powershell
.\fix-cloud-build-permissions.ps1
```

## Manual Fix

Run these commands one by one:

```bash
PROJECT_ID="riva-scientific"
SERVICE_ACCOUNT="254418131945-compute@developer.gserviceaccount.com"

# Grant Cloud Build Service Account role
gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:$SERVICE_ACCOUNT" \
    --role="roles/cloudbuild.builds.builder"

# Grant Service Account User role
gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:$SERVICE_ACCOUNT" \
    --role="roles/iam.serviceAccountUser"

# Grant Storage Admin role (for accessing GCS)
gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:$SERVICE_ACCOUNT" \
    --role="roles/storage.admin"

# Grant Cloud Run Admin role
gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:$SERVICE_ACCOUNT" \
    --role="roles/run.admin"

# Grant Artifact Registry Writer role
gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:$SERVICE_ACCOUNT" \
    --role="roles/artifactregistry.writer"
```

## After Fixing Permissions

Try deploying again:

```bash
cd server
gcloud builds submit --tag gcr.io/riva-scientific/riva-backend
```

## Verify Permissions

Check if permissions are set:

```bash
gcloud projects get-iam-policy riva-scientific \
    --flatten="bindings[].members" \
    --filter="bindings.members:254418131945-compute@developer.gserviceaccount.com" \
    --format="table(bindings.role)"
```

## Alternative: Use Cloud Build Service Account

If the above doesn't work, try using the Cloud Build service account directly:

```bash
# Get Cloud Build service account
CLOUD_BUILD_SA=$(gcloud projects describe riva-scientific --format="value(projectNumber)")@cloudbuild.gserviceaccount.com

# Grant permissions
gcloud projects add-iam-policy-binding riva-scientific \
    --member="serviceAccount:$CLOUD_BUILD_SA" \
    --role="roles/storage.admin"
```

