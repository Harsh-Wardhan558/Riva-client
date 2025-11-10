import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { adminAPI, jobsAPI } from '../services/api'
import './AdminDashboard.css'

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('jobs')
  const [jobs, setJobs] = useState([])
  const [applications, setApplications] = useState([])
  const [contactMessages, setContactMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const [showJobForm, setShowJobForm] = useState(false)
  const [editingJob, setEditingJob] = useState(null)
  const navigate = useNavigate()

  const [jobFormData, setJobFormData] = useState({
    title: '',
    company: '',
    location: '',
    type: 'Full-time',
    salary: '',
    category: 'Technology',
    description: '',
    requirements: '',
    benefits: ''
  })

  useEffect(() => {
    loadData()
  }, [activeTab])

  const loadData = async () => {
    try {
      setLoading(true)
      if (activeTab === 'jobs') {
        const jobsData = await jobsAPI.getAllJobs()
        setJobs(jobsData)
      } else if (activeTab === 'applications') {
        const appsData = await adminAPI.getAllApplications()
        setApplications(appsData)
      } else if (activeTab === 'messages') {
        const messagesData = await adminAPI.getAllContactMessages()
        setContactMessages(messagesData)
      }
    } catch (error) {
      console.error('Error loading data:', error)
      alert('Failed to load data. Please check your authentication.')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('user')
    navigate('/admin/login')
  }

  const handleJobSubmit = async (e) => {
    e.preventDefault()
    try {
      const jobData = {
        ...jobFormData,
        requirements: jobFormData.requirements.split('\n').filter(r => r.trim()),
        benefits: jobFormData.benefits.split('\n').filter(b => b.trim())
      }

      if (editingJob) {
        await adminAPI.updateJob(editingJob.id, jobData)
      } else {
        await adminAPI.createJob(jobData)
      }

      setShowJobForm(false)
      setEditingJob(null)
      setJobFormData({
        title: '',
        company: '',
        location: '',
        type: 'Full-time',
        salary: '',
        category: 'Technology',
        description: '',
        requirements: '',
        benefits: ''
      })
      loadData()
    } catch (error) {
      alert('Failed to save job: ' + error.message)
    }
  }

  const handleDeleteJob = async (jobId) => {
    if (!window.confirm('Are you sure you want to delete this job?')) return

    try {
      await adminAPI.deleteJob(jobId)
      loadData()
    } catch (error) {
      alert('Failed to delete job: ' + error.message)
    }
  }

  const handleEditJob = (job) => {
    setEditingJob(job)
    setJobFormData({
      title: job.title || '',
      company: job.company || '',
      location: job.location || '',
      type: job.type || 'Full-time',
      salary: job.salary || '',
      category: job.category || 'Technology',
      description: job.description || '',
      requirements: (job.requirements || []).join('\n'),
      benefits: (job.benefits || []).join('\n')
    })
    setShowJobForm(true)
  }

  const handleUpdateApplicationStatus = async (applicationId, status) => {
    try {
      await adminAPI.updateApplicationStatus(applicationId, status)
      loadData()
    } catch (error) {
      alert('Failed to update status: ' + error.message)
    }
  }

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>

      <div className="admin-tabs">
        <button
          className={activeTab === 'jobs' ? 'active' : ''}
          onClick={() => setActiveTab('jobs')}
        >
          Jobs
        </button>
        <button
          className={activeTab === 'applications' ? 'active' : ''}
          onClick={() => setActiveTab('applications')}
        >
          Applications ({applications.length})
        </button>
        <button
          className={activeTab === 'messages' ? 'active' : ''}
          onClick={() => setActiveTab('messages')}
        >
          Contact Messages ({contactMessages.length})
        </button>
      </div>

      <div className="admin-content">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <>
            {activeTab === 'jobs' && (
              <div className="jobs-section">
                <div className="section-header">
                  <h2>Job Management</h2>
                  <button onClick={() => { setShowJobForm(true); setEditingJob(null) }} className="add-btn">
                    + Add New Job
                  </button>
                </div>

                {showJobForm && (
                  <div className="job-form-modal">
                    <div className="job-form-content">
                      <h3>{editingJob ? 'Edit Job' : 'Create New Job'}</h3>
                      <form onSubmit={handleJobSubmit}>
                        <div className="form-row">
                          <div className="form-group">
                            <label>Title *</label>
                            <input
                              type="text"
                              value={jobFormData.title}
                              onChange={(e) => setJobFormData({...jobFormData, title: e.target.value})}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label>Company *</label>
                            <input
                              type="text"
                              value={jobFormData.company}
                              onChange={(e) => setJobFormData({...jobFormData, company: e.target.value})}
                              required
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label>Location *</label>
                          <input
                            type="text"
                            value={jobFormData.location}
                            onChange={(e) => setJobFormData({...jobFormData, location: e.target.value})}
                            required
                          />
                        </div>
                        <div className="form-row">
                          <div className="form-group">
                            <label>Type *</label>
                            <select
                              value={jobFormData.type}
                              onChange={(e) => setJobFormData({...jobFormData, type: e.target.value})}
                              required
                            >
                              <option>Full-time</option>
                              <option>Part-time</option>
                              <option>Contract</option>
                              <option>Remote</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label>Category</label>
                            <select
                              value={jobFormData.category}
                              onChange={(e) => setJobFormData({...jobFormData, category: e.target.value})}
                            >
                              <option>Technology</option>
                              <option>Design</option>
                              <option>Marketing</option>
                              <option>Product</option>
                              <option>Sales</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group">
                          <label>Salary</label>
                          <input
                            type="text"
                            value={jobFormData.salary}
                            onChange={(e) => setJobFormData({...jobFormData, salary: e.target.value})}
                            placeholder="$50,000 - $70,000"
                          />
                        </div>

                        <div className="form-group">
                          <label>Description *</label>
                          <textarea
                            value={jobFormData.description}
                            onChange={(e) => setJobFormData({...jobFormData, description: e.target.value})}
                            rows="5"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label>Requirements (one per line)</label>
                          <textarea
                            value={jobFormData.requirements}
                            onChange={(e) => setJobFormData({...jobFormData, requirements: e.target.value})}
                            rows="4"
                            placeholder="5+ years of experience&#10;Strong communication skills"
                          />
                        </div>

                        <div className="form-group">
                          <label>Benefits (one per line)</label>
                          <textarea
                            value={jobFormData.benefits}
                            onChange={(e) => setJobFormData({...jobFormData, benefits: e.target.value})}
                            rows="4"
                            placeholder="Health insurance&#10;401(k) matching"
                          />
                        </div>

                        <div className="form-actions">
                          <button type="submit" className="save-btn">Save</button>
                          <button type="button" onClick={() => { setShowJobForm(false); setEditingJob(null) }} className="cancel-btn">
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}

                <div className="jobs-list">
                  {jobs.map(job => (
                    <div key={job.id} className="job-card">
                      <div className="job-card-header">
                        <h3>{job.title}</h3>
                        <div className="job-actions">
                          <button onClick={() => handleEditJob(job)} className="edit-btn">Edit</button>
                          <button onClick={() => handleDeleteJob(job.id)} className="delete-btn">Delete</button>
                        </div>
                      </div>
                      <p><strong>Company:</strong> {job.company}</p>
                      <p><strong>Location:</strong> {job.location}</p>
                      <p><strong>Type:</strong> {job.type}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'applications' && (
              <div className="applications-section">
                <h2>Job Applications</h2>
                <div className="applications-list">
                  {applications.map(app => (
                    <div key={app.id} className="application-card">
                      <div className="app-header">
                        <div>
                          <h3>{app.firstName} {app.lastName}</h3>
                          <p>{app.email} | {app.phone}</p>
                          {app.job && <p><strong>Applied for:</strong> {app.job.title} at {app.job.company}</p>}
                        </div>
                        <div className={`status-badge status-${app.status}`}>{app.status}</div>
                      </div>
                      {app.coverLetter && (
                        <div className="cover-letter">
                          <strong>Cover Letter:</strong>
                          <p>{app.coverLetter}</p>
                        </div>
                      )}
                      {app.resumeUrl && (
                        <div className="resume-link">
                          <a href={app.resumeUrl} target="_blank" rel="noopener noreferrer">
                            View Resume
                          </a>
                        </div>
                      )}
                      <div className="app-actions">
                        <button
                          onClick={() => handleUpdateApplicationStatus(app.id, 'accepted')}
                          className="accept-btn"
                          disabled={app.status === 'accepted'}
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleUpdateApplicationStatus(app.id, 'rejected')}
                          className="reject-btn"
                          disabled={app.status === 'rejected'}
                        >
                          Reject
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'messages' && (
              <div className="messages-section">
                <h2>Contact Messages</h2>
                <div className="messages-list">
                  {contactMessages.map(msg => (
                    <div key={msg.id} className="message-card">
                      <div className="message-header">
                        <div>
                          <h3>{msg.name}</h3>
                          <p>{msg.email}</p>
                        </div>
                        <div className="message-date">
                          {new Date(msg.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="message-subject">
                        <strong>Subject:</strong> {msg.subject}
                      </div>
                      <div className="message-body">
                        <p>{msg.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard

