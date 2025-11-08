# PowerShell script to deploy both backend and frontend

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Riva Recruitment Deployment Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if gcloud is installed
$gcloudInstalled = Get-Command gcloud -ErrorAction SilentlyContinue
if (-not $gcloudInstalled) {
    Write-Host "❌ Google Cloud SDK not found!" -ForegroundColor Red
    Write-Host "Please install: https://cloud.google.com/sdk/docs/install" -ForegroundColor Yellow
    exit 1
}

# Check if firebase CLI is installed
$firebaseInstalled = Get-Command firebase -ErrorAction SilentlyContinue
if (-not $firebaseInstalled) {
    Write-Host "❌ Firebase CLI not found!" -ForegroundColor Red
    Write-Host "Installing Firebase CLI..." -ForegroundColor Yellow
    npm install -g firebase-tools
}

Write-Host "Select deployment option:" -ForegroundColor Green
Write-Host "1. Deploy Backend (Cloud Run)" -ForegroundColor Yellow
Write-Host "2. Deploy Frontend (Firebase Hosting)" -ForegroundColor Yellow
Write-Host "3. Deploy Both" -ForegroundColor Yellow
Write-Host ""
$choice = Read-Host "Enter choice (1/2/3)"

if ($choice -eq "1" -or $choice -eq "3") {
    Write-Host ""
    Write-Host "Deploying Backend to Cloud Run..." -ForegroundColor Green
    Write-Host ""
    
    Set-Location server
    
    # Build and deploy
    Write-Host "Building Docker image..." -ForegroundColor Yellow
    gcloud builds submit --tag gcr.io/riva-scientific/riva-backend
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Deploying to Cloud Run..." -ForegroundColor Yellow
        gcloud run deploy riva-backend `
            --image gcr.io/riva-scientific/riva-backend `
            --region us-central1 `
            --platform managed `
            --allow-unauthenticated `
            --set-env-vars "NODE_ENV=production,SMTP_HOST=smtp.gmail.com,SMTP_PORT=587"
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "✅ Backend deployed successfully!" -ForegroundColor Green
            $backendUrl = gcloud run services describe riva-backend --region us-central1 --format 'value(status.url)'
            Write-Host "Backend URL: $backendUrl" -ForegroundColor Cyan
        } else {
            Write-Host "❌ Backend deployment failed!" -ForegroundColor Red
        }
    } else {
        Write-Host "❌ Docker build failed!" -ForegroundColor Red
    }
    
    Set-Location ..
}

if ($choice -eq "2" -or $choice -eq "3") {
    Write-Host ""
    Write-Host "Deploying Frontend to Firebase Hosting..." -ForegroundColor Green
    Write-Host ""
    
    # Get backend URL if deploying both
    if ($choice -eq "3") {
        $backendUrl = gcloud run services describe riva-backend --region us-central1 --format 'value(status.url)' 2>$null
        if ($backendUrl) {
            Write-Host "Backend URL: $backendUrl" -ForegroundColor Cyan
            Write-Host "Updating frontend API URL..." -ForegroundColor Yellow
            $apiUrl = "$backendUrl/api"
        } else {
            Write-Host "⚠️  Could not get backend URL. Please enter manually:" -ForegroundColor Yellow
            $apiUrl = Read-Host "Enter backend API URL (e.g., https://xxx.run.app/api)"
        }
    } else {
        Write-Host "Enter your backend API URL:" -ForegroundColor Yellow
        $apiUrl = Read-Host "Backend URL (e.g., https://xxx.run.app/api)"
    }
    
    Set-Location client
    
    # Build with production API URL
    Write-Host "Building frontend..." -ForegroundColor Yellow
    $env:VITE_API_URL = $apiUrl
    npm run build
    
    if ($LASTEXITCODE -eq 0) {
        Set-Location ..
        Write-Host "Deploying to Firebase..." -ForegroundColor Yellow
        firebase deploy --only hosting
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "✅ Frontend deployed successfully!" -ForegroundColor Green
        } else {
            Write-Host "❌ Frontend deployment failed!" -ForegroundColor Red
        }
    } else {
        Write-Host "❌ Frontend build failed!" -ForegroundColor Red
    }
    
    Set-Location ..
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Deployment Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan

