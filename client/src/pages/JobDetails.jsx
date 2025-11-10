import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { jobsAPI } from '../services/api'
import './JobDetails.css'

const JobDetails = () => {
  const { id } = useParams()
  const [job, setJob] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [applicationData, setApplicationData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    coverLetter: '',
    resume: null,
    resumeUrl: ''
  })
  const [uploading, setUploading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    loadJob()
  }, [id])

  const loadJob = async () => {
    try {
      const jobData = await jobsAPI.getJobById(id)
      setJob(jobData)
    } catch (error) {
      console.error('Error loading job:', error)
      setMessage('Failed to load job details')
    } finally {
      setLoading(false)
    }
  }

  const handleFileChange = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    if (file.size > 5 * 1024 * 1024) {
      setMessage('File size must be less than 5MB')
      return
    }

    if (!['application/pdf', 'application/msword', 
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)) {
      setMessage('Only PDF, DOC, and DOCX files are allowed')
      return
    }

    setUploading(true)
    setMessage('')

    try {
      const data = await jobsAPI.uploadResume(file)
      setApplicationData({...applicationData, resume: file, resumeUrl: data.resumeUrl})
      setMessage('Resume uploaded successfully!')
    } catch (error) {
      setMessage('Failed to upload resume: ' + error.message)
    } finally {
      setUploading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setMessage('')

    if (!applicationData.resumeUrl) {
      setMessage('Please upload your resume')
      setSubmitting(false)
      return
    }

    try {
      await jobsAPI.applyToJob(id, {
        firstName: applicationData.firstName,
        lastName: applicationData.lastName,
        email: applicationData.email,
        phone: applicationData.phone,
        coverLetter: applicationData.coverLetter,
        resumeUrl: applicationData.resumeUrl
      })

      setMessage('Application submitted successfully! You will receive a confirmation email.')
      setApplicationData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        coverLetter: '',
        resume: null,
        resumeUrl: ''
      })
      setShowApplicationForm(false)
    } catch (error) {
      setMessage('Failed to submit application: ' + error.message)
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) {
    return <div className="job-details-page"><div className="container">Loading...</div></div>
  }

  if (!job) {
    return <div className="job-details-page"><div className="container">Job not found</div></div>
  }

  // Format job data for display
  const formatDate = (timestamp) => {
    if (!timestamp) return 'Recently'
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
    const now = new Date()
    const diff = now - date
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    if (days === 0) return 'Today'
    if (days === 1) return 'Yesterday'
    if (days < 7) return `${days} days ago`
    return date.toLocaleDateString()
  }

  const jobData = {
    ...job,
    posted: formatDate(job.createdAt),
    description: `We are looking for an experienced Senior Frontend Developer to join our dynamic team. You will be responsible for building and maintaining high-quality web applications using modern JavaScript frameworks.

Key Responsibilities:
- Develop and maintain responsive web applications
- Collaborate with cross-functional teams to define and implement new features
- Write clean, maintainable, and efficient code
- Participate in code reviews and provide constructive feedback
- Optimize applications for maximum speed and scalability
- Stay up-to-date with emerging technologies and best practices

Requirements:
- 5+ years of experience in frontend development
- Strong proficiency in React, JavaScript, and TypeScript
- Experience with state management libraries (Redux, Zustand)
- Familiarity with modern build tools (Webpack, Vite)
- Understanding of RESTful APIs and GraphQL
- Strong problem-solving skills and attention to detail
- Excellent communication and teamwork abilities

Nice to Have:
- Experience with Next.js or similar frameworks
- Knowledge of testing frameworks (Jest, React Testing Library)
- Understanding of CI/CD pipelines
- Experience with design systems`,
    requirements: [
      '5+ years of experience in frontend development',
      'Strong proficiency in React, JavaScript, and TypeScript',
      'Experience with state management libraries',
      'Familiarity with modern build tools',
      'Understanding of RESTful APIs and GraphQL'
    ],
    benefits: [
      'Competitive salary and equity package',
      'Comprehensive health insurance',
      'Flexible working hours and remote options',
      'Professional development budget',
      '401(k) matching',
      'Unlimited PTO',
      'Stocked kitchen and team lunches'
    ]
  }

  return (
    <div className="job-details-page">
      <div className="container">
        <Link to="/jobs" className="back-link">← Back to Jobs</Link>
        
        <div className="job-details-content">
          <div className="job-details-main">
            <div className="job-header">
              <div>
                <h1>{job.title || 'Job Title'}</h1>
                <p className="job-company-name">{job.company || 'Company'}</p>
              </div>
              <div className="job-meta">
                <span className="job-type-badge">{job.type}</span>
              </div>
            </div>

            <div className="job-info-grid">
              <div className="info-item">
                <span className="info-label">📍 Location</span>
                <span className="info-value">{job.location}</span>
              </div>
              <div className="info-item">
                <span className="info-label">💰 Salary</span>
                <span className="info-value">{job.salary || 'Not specified'}</span>
              </div>
              <div className="info-item">
                <span className="info-label">🏷️ Category</span>
                <span className="info-value">{job.category || 'General'}</span>
              </div>
              <div className="info-item">
                <span className="info-label">📅 Posted</span>
                <span className="info-value">{jobData.posted}</span>
              </div>
            </div>

            <div className="job-section">
              <h2>Job Description</h2>
              <div className="job-description">
                {job.description ? (
                  typeof job.description === 'string' ? (
                    job.description.split('\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))
                  ) : (
                    <p>{job.description}</p>
                  )
                ) : (
                  <p>No description available</p>
                )}
              </div>
            </div>

            {job.requirements && job.requirements.length > 0 && (
              <div className="job-section">
                <h2>Requirements</h2>
                <ul className="requirements-list">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            )}

            {job.benefits && job.benefits.length > 0 && (
              <div className="job-section">
                <h2>Benefits</h2>
                <ul className="benefits-list">
                  {job.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="job-details-sidebar">
            {!showApplicationForm ? (
              <div className="apply-card">
                <h3>Interested in this position?</h3>
                <p>Apply now and take the next step in your career</p>
                <button className="btn-apply" onClick={() => setShowApplicationForm(true)}>Apply Now</button>
              </div>
            ) : (
              <div className="apply-card application-form">
                <h3>Apply for this Position</h3>
                {message && <div className={`message ${message.includes('success') ? 'success' : 'error'}`}>{message}</div>}
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>First Name *</label>
                    <input
                      type="text"
                      value={applicationData.firstName}
                      onChange={(e) => setApplicationData({...applicationData, firstName: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name *</label>
                    <input
                      type="text"
                      value={applicationData.lastName}
                      onChange={(e) => setApplicationData({...applicationData, lastName: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      value={applicationData.email}
                      onChange={(e) => setApplicationData({...applicationData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="tel"
                      value={applicationData.phone}
                      onChange={(e) => setApplicationData({...applicationData, phone: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Resume * (PDF, DOC, DOCX)</label>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      disabled={uploading}
                      required
                    />
                    {uploading && <p className="upload-status">Uploading...</p>}
                    {applicationData.resumeUrl && <p className="upload-success">✓ Resume uploaded</p>}
                  </div>
                  <div className="form-group">
                    <label>Cover Letter</label>
                    <textarea
                      value={applicationData.coverLetter}
                      onChange={(e) => setApplicationData({...applicationData, coverLetter: e.target.value})}
                      rows="4"
                      placeholder="Tell us why you're interested in this position..."
                    />
                  </div>
                  <div className="form-actions">
                    <button type="submit" className="btn-apply" disabled={submitting || uploading}>
                      {submitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                    <button type="button" className="btn-cancel" onClick={() => setShowApplicationForm(false)}>
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            {!showApplicationForm && (
              <div className="company-card">
                <h3>About {job.company || 'Company'}</h3>
                <p>We are a leading technology company focused on innovation and excellence. Join us to be part of a team that's shaping the future of technology.</p>
                <Link to="/about" className="company-link">Learn More →</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetails

