# PowerShell script to start both client and server in development mode

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Starting Riva Recruitment Platform" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if node_modules exist
if (-not (Test-Path "client\node_modules")) {
    Write-Host "Installing client dependencies..." -ForegroundColor Yellow
    Set-Location client
    npm install
    Set-Location ..
}

if (-not (Test-Path "server\node_modules")) {
    Write-Host "Installing server dependencies..." -ForegroundColor Yellow
    Set-Location server
    npm install
    Set-Location ..
}

Write-Host ""
Write-Host "Starting development servers..." -ForegroundColor Green
Write-Host ""

# Start server in background
Write-Host "Starting backend server on port 5000..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd server; npm run dev" -WindowStyle Normal

# Wait a bit for server to start
Start-Sleep -Seconds 3

# Start client
Write-Host "Starting frontend on port 3000..." -ForegroundColor Yellow
Set-Location client
npm run dev

