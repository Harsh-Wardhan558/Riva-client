# PowerShell script to deploy backend to Cloud Run

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Deploying Backend to Cloud Run" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$PROJECT_ID = "riva-scientific"
$SERVICE_NAME = "riva-backend"
$REGION = "us-central1"

# Build the Docker image
Write-Host "Step 1: Building Docker image..." -ForegroundColor Yellow
gcloud builds submit --tag gcr.io/$PROJECT_ID/$SERVICE_NAME

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Step 2: Deploying to Cloud Run..." -ForegroundColor Yellow

# Deploy to Cloud Run
gcloud run deploy $SERVICE_NAME `
    --image gcr.io/$PROJECT_ID/$SERVICE_NAME `
    --region $REGION `
    --platform managed `
    --allow-unauthenticated `
    --set-env-vars "NODE_ENV=production,SMTP_HOST=smtp.gmail.com,SMTP_PORT=587,SMTP_USER=debasishsadangi452@gmail.com,SMTP_PASS=bkagnoqpsyiadsei,ADMIN_EMAIL=dsadangi31012002@gmail.com,JWT_SECRET=your-jwt-secret-here"

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Deployment successful!" -ForegroundColor Green
    Write-Host ""
    
    # Get the service URL
    $SERVICE_URL = gcloud run services describe $SERVICE_NAME --region $REGION --format 'value(status.url)'
    Write-Host "Backend URL: $SERVICE_URL" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "API Endpoint: $SERVICE_URL/api" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Next step: Update frontend with this URL and deploy!" -ForegroundColor Yellow
} else {
    Write-Host "❌ Deployment failed!" -ForegroundColor Red
    exit 1
}

