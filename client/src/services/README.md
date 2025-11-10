# API Services

This directory contains API service functions for connecting to the backend.

## Setup

1. Create a `.env` file in the root directory:
```
REACT_APP_API_URL=http://localhost:5000/api
```

2. Replace `http://localhost:5000/api` with your actual backend API URL.

## Usage

Import the API services in your components:

```javascript
import { jobsAPI, authAPI } from '../services/api'

// Example: Fetch all jobs
const fetchJobs = async () => {
  try {
    const jobs = await jobsAPI.getAllJobs()
    setJobs(jobs)
  } catch (error) {
    console.error('Failed to fetch jobs:', error)
  }
}

// Example: Login
const handleLogin = async (email, password) => {
  try {
    const response = await jobsAPI.login(email, password)
    localStorage.setItem('authToken', response.token)
    // Redirect or update state
  } catch (error) {
    console.error('Login failed:', error)
  }
}
```

## Available APIs

### Authentication (`authAPI`)
- `login(email, password)` - User login
- `register(userData)` - User registration
- `logout()` - User logout
- `getCurrentUser()` - Get current user info

### Jobs (`jobsAPI`)
- `getAllJobs(filters)` - Get all jobs with optional filters
- `getJobById(id)` - Get job by ID
- `createJob(jobData)` - Create new job (employer only)
- `updateJob(id, jobData)` - Update job (employer only)
- `deleteJob(id)` - Delete job (employer only)
- `applyToJob(jobId, applicationData)` - Apply to a job
- `searchJobs(searchTerm, filters)` - Search jobs

### User Profile (`userAPI`)
- `getProfile()` - Get user profile
- `updateProfile(profileData)` - Update user profile
- `uploadResume(file)` - Upload resume
- `getApplications()` - Get user's job applications

### Companies (`companyAPI`)
- `getAllCompanies()` - Get all companies
- `getCompanyById(id)` - Get company by ID
- `getCompanyJobs(companyId)` - Get jobs by company

### Contact (`contactAPI`)
- `sendMessage(messageData)` - Send contact message

