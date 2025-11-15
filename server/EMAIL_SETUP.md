# Email Service Setup Guide

## Quick Setup for Gmail

### Step 1: Enable 2-Factor Authentication
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** if not already enabled

### Step 2: Generate App Password
1. Go to [App Passwords](https://myaccount.google.com/apppasswords)
2. Select **Mail** and **Other (Custom name)**
3. Enter name: "Riva Recruitment Server"
4. Click **Generate**
5. Copy the 16-character password (no spaces)

### Step 3: Configure .env File

Edit `server/.env` and add:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587

SMTP_USER=debasishsadangi452@gmail.com
SMTP_PASS=bkag noqp syia dsei

ADMIN_EMAIL=dsadangi31012002@gmail.com
```

**Important:** 
- Use the **App Password**, not your regular Gmail password
- Remove any spaces from the app password
- Keep the `.env` file secure and never commit it to git

### Step 4: Restart Server

```bash
cd server
npm run dev
```

## Other Email Providers

### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

### Yahoo
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_USER=your-email@yahoo.com
SMTP_PASS=your-app-password
```

### Custom SMTP Server
```env
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_USER=your-username
SMTP_PASS=your-password
```

## Testing

After configuration, test by:
1. Submitting the contact form
2. Checking server logs for "Email sent successfully"
3. Checking your email inbox

## Troubleshooting

**"Email service not configured"**
- Check that SMTP_USER and SMTP_PASS are set in `.env`
- Restart the server after changing `.env`

**"Invalid login"**
- For Gmail: Make sure you're using an App Password, not regular password
- Check that 2FA is enabled

**"Connection timeout"**
- Check firewall settings
- Verify SMTP_HOST and SMTP_PORT are correct
- Try port 465 with `secure: true` (requires SSL)

## Security Notes

- Never commit `.env` file to git (it's in `.gitignore`)
- Use App Passwords instead of regular passwords
- Rotate passwords regularly
- Use environment variables in production hosting

