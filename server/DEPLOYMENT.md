# Deploying Node.js Backend

This guide covers deploying the Node.js backend to various platforms.

## Option 1: Railway (Recommended - Easy & Free)

1. **Sign up at [Railway](https://railway.app/)**
2. **Create new project**
3. **Connect your GitHub repository** (or deploy directly)
4. **Add environment variables:**
   - Go to Variables tab
   - Add all variables from `.env.example`
5. **Add Firebase Service Account:**
   - Download your service account JSON
   - Add as environment variable `FIREBASE_SERVICE_ACCOUNT` (paste entire JSON)
   - Or upload as file and Railway will handle it
6. **Deploy:**
   - Railway will auto-detect Node.js
   - Set start command: `npm start`
   - Set root directory: `server`

## Option 2: Render

1. **Sign up at [Render](https://render.com/)**
2. **Create new Web Service**
3. **Connect repository**
4. **Configure:**
   - Build Command: `cd server && npm install`
   - Start Command: `cd server && npm start`
   - Environment: Node
5. **Add environment variables** from `.env.example`
6. **Deploy**

## Option 3: Heroku

1. **Install Heroku CLI**
2. **Login:** `heroku login`
3. **Create app:** `heroku create your-app-name`
4. **Set environment variables:**
   ```bash
   heroku config:set JWT_SECRET=your-secret
   heroku config:set FIREBASE_PROJECT_ID=riva-scientific
   # ... add all other variables
   ```
5. **Deploy:** `git push heroku main`

## Option 4: VPS (DigitalOcean, AWS EC2, etc.)

1. **SSH into your server**
2. **Install Node.js:**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```
3. **Clone repository**
4. **Install dependencies:**
   ```bash
   cd server
   npm install --production
   ```
5. **Set up environment variables**
6. **Use PM2 to run:**
   ```bash
   npm install -g pm2
   pm2 start server.js --name riva-backend
   pm2 save
   pm2 startup
   ```

## Option 5: Google Cloud Run

1. **Create Dockerfile:**
   ```dockerfile
   FROM node:18
   WORKDIR /app
   COPY server/package*.json ./
   RUN npm install --production
   COPY server/ .
   EXPOSE 5000
   CMD ["node", "server.js"]
   ```
2. **Build and deploy:**
   ```bash
   gcloud builds submit --tag gcr.io/riva-scientific/backend
   gcloud run deploy backend --image gcr.io/riva-scientific/backend --platform managed
   ```

## Environment Variables for Production

Make sure to set these in your deployment platform:

- `PORT` (usually auto-set by platform)
- `NODE_ENV=production`
- `JWT_SECRET` (strong random string)
- `FIREBASE_PROJECT_ID=riva-scientific`
- `FIREBASE_PRIVATE_KEY` (from service account)
- `FIREBASE_CLIENT_EMAIL` (from service account)
- `ADMIN_EMAIL`
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
- `CORS_ORIGINS` (your frontend URL)

## After Deployment

1. Update frontend `.env`:
   ```
   REACT_APP_API_URL=https://your-backend-url.com/api
   ```

2. Test the API:
   ```bash
   curl https://your-backend-url.com/api/health
   ```

## Monitoring

- Set up error tracking (Sentry, LogRocket)
- Monitor server logs
- Set up uptime monitoring
- Configure auto-scaling if needed

