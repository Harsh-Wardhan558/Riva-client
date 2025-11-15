# Complete Setup Guide

## Project Structure

```
Riva/
├── client/          # React Frontend
├── server/          # Node.js Backend
└── (config files)   # Firebase, etc.
```

## Initial Setup

### Step 1: Install All Dependencies

```bash
# Install root dependencies (for running both together)
npm install

# Install client dependencies
cd client
npm install
cd ..

# Install server dependencies
cd server
npm install
cd ..
```

**Or use the helper script:**
```bash
npm run install:all
```

### Step 2: Backend Configuration

1. **Get Firebase Service Account:**
   - Go to: https://console.firebase.google.com/project/riva-scientific/settings/serviceaccounts/adminsdk
   - Click "Generate new private key"
   - Save as `server/firebase-service-account.json`

2. **Create Server .env:**
   ```bash
   cd server
   # Copy .env.example to .env and fill in values
   ```

### Step 3: Frontend Configuration

Create `client/.env`:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

## Running the Application

### Option 1: Run Both Together (Recommended)

```bash
npm run dev
```

This starts both server (port 5000) and client (port 3000) simultaneously.

### Option 2: Run Separately

**Terminal 1 - Server:**
```bash
cd server
npm run dev
```

**Terminal 2 - Client:**
```bash
cd client
npm run dev
```

### Option 3: Use Helper Scripts

**Windows (PowerShell):**
```powershell
.\start-dev.ps1
```

**Linux/Mac:**
```bash
chmod +x start-dev.sh
./start-dev.sh
```

## Access Points

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000/api
- **Health Check:** http://localhost:5000/api/health

## Building for Production

### Build Client
```bash
cd client
npm run build
```
Output: `client/dist/`

### Start Server (Production)
```bash
cd server
npm start
```

## Deployment

### Client Deployment
Deploy `client/dist/` to:
- Firebase Hosting
- Netlify
- Vercel
- Any static hosting

### Server Deployment
Deploy `server/` to:
- Railway (recommended)
- Render
- Heroku
- VPS

See `server/DEPLOYMENT.md` for detailed instructions.

## Troubleshooting

**Port already in use:**
- Change `PORT` in `server/.env`
- Change port in `client/vite.config.js`

**Module not found:**
- Run `npm install` in the respective directory (client or server)

**API connection failed:**
- Check `REACT_APP_API_URL` in `client/.env`
- Verify server is running on the correct port
- Check CORS settings in `server/server.js`

## Next Steps

1. ✅ Set up backend (Firebase credentials, .env)
2. ✅ Set up frontend (.env with API URL)
3. ✅ Start both servers
4. ✅ Test the application
5. ✅ Deploy to production

