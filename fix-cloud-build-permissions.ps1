# Fix Cloud Build Permissions for Cloud Run Deployment

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Fixing Cloud Build Permissions" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$PROJECT_ID = "riva-scientific"
$SERVICE_ACCOUNT = "254418131945-compute@developer.gserviceaccount.com"

Write-Host "Granting permissions to Cloud Build service account..." -ForegroundColor Yellow
Write-Host "Service Account: $SERVICE_ACCOUNT" -ForegroundColor Cyan
Write-Host ""

# Grant Cloud Build Service Account role
Write-Host "1. Granting Cloud Build Service Account role..." -ForegroundColor Yellow
gcloud projects add-iam-policy-binding $PROJECT_ID `
    --member="serviceAccount:$SERVICE_ACCOUNT" `
    --role="roles/cloudbuild.builds.builder"

# Grant Service Account User role
Write-Host "2. Granting Service Account User role..." -ForegroundColor Yellow
gcloud projects add-iam-policy-binding $PROJECT_ID `
    --member="serviceAccount:$SERVICE_ACCOUNT" `
    --role="roles/iam.serviceAccountUser"

# Grant Storage Admin role (for accessing GCS)
Write-Host "3. Granting Storage Admin role..." -ForegroundColor Yellow
gcloud projects add-iam-policy-binding $PROJECT_ID `
    --member="serviceAccount:$SERVICE_ACCOUNT" `
    --role="roles/storage.admin"

# Grant Cloud Run Admin role
Write-Host "4. Granting Cloud Run Admin role..." -ForegroundColor Yellow
gcloud projects add-iam-policy-binding $PROJECT_ID `
    --member="serviceAccount:$SERVICE_ACCOUNT" `
    --role="roles/run.admin"

# Grant Artifact Registry Writer role
Write-Host "5. Granting Artifact Registry Writer role..." -ForegroundColor Yellow
gcloud projects add-iam-policy-binding $PROJECT_ID `
    --member="serviceAccount:$SERVICE_ACCOUNT" `
    --role="roles/artifactregistry.writer"

Write-Host ""
Write-Host "✅ Permissions granted!" -ForegroundColor Green
Write-Host ""
Write-Host "You can now try deploying again:" -ForegroundColor Cyan
Write-Host "  cd server" -ForegroundColor Yellow
Write-Host "  gcloud builds submit --tag gcr.io/riva-scientific/riva-backend" -ForegroundColor Yellow

