# Troubleshooting Blank Screen

## Quick Fixes

### 1. Check Browser Console
Press **F12** in your browser and check the **Console** tab for errors.

### 2. Verify Server is Running
The backend server must be running on port 5000:
```bash
cd server
npm run dev
```

### 3. Restart Dev Server
Stop the client dev server (Ctrl+C) and restart:
```bash
cd client
npm run dev
```

### 4. Clear Browser Cache
- Press **Ctrl+Shift+R** (Windows/Linux) or **Cmd+Shift+R** (Mac)
- Or clear cache in browser settings

### 5. Check Network Tab
In browser DevTools (F12), check the **Network** tab:
- Are requests to `http://localhost:5000/api` failing?
- If yes, make sure the backend server is running

## Common Errors

### "Failed to fetch" or "NetworkError"
- **Cause:** Backend server is not running
- **Fix:** Start the server: `cd server && npm run dev`

### "Cannot read property of undefined"
- **Cause:** API response structure mismatch
- **Fix:** Check browser console for the exact error

### White screen with no errors
- **Cause:** React component error that's being swallowed
- **Fix:** 
  1. Check React DevTools extension
  2. Look for errors in browser console
  3. Try accessing a different route (e.g., `/about`)

## Verify Setup

1. **Backend running?**
   ```bash
   curl http://localhost:5000/api/health
   ```
   Should return: `{"status":"ok","message":"Server is running"}`

2. **Frontend .env file exists?**
   ```bash
   cd client
   cat .env
   ```
   Should contain: `REACT_APP_API_URL=http://localhost:5000/api`

3. **Dependencies installed?**
   ```bash
   cd client
   npm install
   ```

## Still Not Working?

1. Check the terminal where `npm run dev` is running for errors
2. Check browser console (F12) for JavaScript errors
3. Verify both client and server are running
4. Try accessing `http://localhost:3000/about` directly

