// API service for backend integration
// Node.js backend running on port 5000 (default)
// For production: Replace with your deployed backend URL
// For local development: http://localhost:5000/api

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

// Helper function to handle API requests
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  }

  // Add auth token if available
  const token = localStorage.getItem('authToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  try {
    const response = await fetch(url, config)
    
    // Handle non-JSON responses
    let data
    const contentType = response.headers.get('content-type')
    if (contentType && contentType.includes('application/json')) {
      data = await response.json()
    } else {
      const text = await response.text()
      throw new Error(text || 'An error occurred')
    }

    if (!response.ok) {
      throw new Error(data.error || data.message || 'An error occurred')
    }

    return data
  } catch (error) {
    // Don't log network errors if server is not running
    if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
      console.warn('API Error: Server may not be running', error.message)
    } else {
      console.error('API Error:', error)
    }
    throw error
  }
}

// Authentication APIs
export const authAPI = {
  login: async (email, password) => {
    return apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })
  },

  register: async (userData) => {
    return apiRequest('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    })
  },

  logout: async () => {
    return apiRequest('/auth/logout', {
      method: 'POST',
    })
  },

  getCurrentUser: async () => {
    return apiRequest('/auth/me')
  },
}

// Jobs APIs
export const jobsAPI = {
  getAllJobs: async (filters = {}) => {
    const queryParams = new URLSearchParams(filters).toString()
    return apiRequest(`/jobs?${queryParams}`)
  },

  getJobById: async (id) => {
    return apiRequest(`/jobs/${id}`)
  },

  createJob: async (jobData) => {
    return apiRequest('/jobs', {
      method: 'POST',
      body: JSON.stringify(jobData),
    })
  },

  updateJob: async (id, jobData) => {
    return apiRequest(`/jobs/${id}`, {
      method: 'PUT',
      body: JSON.stringify(jobData),
    })
  },

  deleteJob: async (id) => {
    return apiRequest(`/jobs/${id}`, {
      method: 'DELETE',
    })
  },

  applyToJob: async (jobId, applicationData) => {
    return apiRequest(`/jobs/${jobId}/apply`, {
      method: 'POST',
      body: JSON.stringify(applicationData),
    })
  },

  uploadResume: async (file) => {
    const formData = new FormData()
    formData.append('file', file)
    
    const url = `${API_BASE_URL}/upload/resume`
    
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    })
    
    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Upload failed')
    }
    
    return response.json()
  },

  searchJobs: async (searchTerm, filters = {}) => {
    const params = { q: searchTerm, ...filters }
    const queryParams = new URLSearchParams(params).toString()
    return apiRequest(`/jobs/search?${queryParams}`)
  },
}

// User Profile APIs
export const userAPI = {
  getProfile: async () => {
    return apiRequest('/users/profile')
  },

  updateProfile: async (profileData) => {
    return apiRequest('/users/profile', {
      method: 'PUT',
      body: JSON.stringify(profileData),
    })
  },

  uploadResume: async (file) => {
    const formData = new FormData()
    formData.append('resume', file)
    
    return apiRequest('/users/resume', {
      method: 'POST',
      headers: {}, // Let browser set Content-Type for FormData
      body: formData,
    })
  },

  getApplications: async () => {
    return apiRequest('/users/applications')
  },
}

// Company APIs
export const companyAPI = {
  getAllCompanies: async () => {
    return apiRequest('/companies')
  },

  getCompanyById: async (id) => {
    return apiRequest(`/companies/${id}`)
  },

  getCompanyJobs: async (companyId) => {
    return apiRequest(`/companies/${companyId}/jobs`)
  },
}

// Contact/Support APIs
export const contactAPI = {
  sendMessage: async (messageData) => {
    return apiRequest('/contact', {
      method: 'POST',
      body: JSON.stringify(messageData),
    })
  },
}

// Admin APIs
export const adminAPI = {
  login: async (email, password) => {
    const response = await authAPI.login(email, password)
    // Check if user is admin
    if (response.user.userType !== 'admin') {
      throw new Error('Admin access required')
    }
    return response
  },

  getAllApplications: async () => {
    return apiRequest('/admin/applications')
  },

  getAllContactMessages: async () => {
    return apiRequest('/admin/contact-messages')
  },

  createJob: async (jobData) => {
    return apiRequest('/admin/jobs', {
      method: 'POST',
      body: JSON.stringify(jobData),
    })
  },

  updateJob: async (id, jobData) => {
    return apiRequest(`/admin/jobs/${id}`, {
      method: 'PUT',
      body: JSON.stringify(jobData),
    })
  },

  deleteJob: async (id) => {
    return apiRequest(`/admin/jobs/${id}`, {
      method: 'DELETE',
    })
  },

  updateApplicationStatus: async (applicationId, status) => {
    return apiRequest(`/admin/applications/${applicationId}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    })
  },
}

export default {
  authAPI,
  jobsAPI,
  userAPI,
  companyAPI,
  contactAPI,
  adminAPI,
}

