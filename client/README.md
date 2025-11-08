# Riva Recruitment - Client (Frontend)

React frontend application for the Riva Recruitment platform.

## Features

- 🏠 **Home Page** - Modern landing page with hero section
- 💼 **Jobs Listing** - Browse and search job openings
- 📄 **Job Details** - Detailed job view with application form
- ℹ️ **About Page** - Company information
- 📧 **Contact Page** - Contact form
- 🔐 **Authentication** - Login and registration
- 👨‍💼 **Admin Dashboard** - Admin panel for managing jobs and applications

## Tech Stack

- React 18
- React Router DOM 6
- Vite
- Individual CSS files for each page

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
cd client
npm install
```

### Development

```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Environment Variables

Create a `.env` file in the `client` directory:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

For production, set this to your deployed backend URL.

## Project Structure

```
client/
├── src/
│   ├── components/       # Reusable components
│   ├── pages/           # Page components with individual CSS
│   ├── services/        # API service functions
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── index.html
├── vite.config.js
└── package.json
```

## API Integration

The frontend connects to the Node.js backend. Make sure the backend is running on the port specified in `REACT_APP_API_URL`.

## Deployment

See the main `README.md` for deployment instructions.

