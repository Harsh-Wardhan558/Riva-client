import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { jobsAPI } from '../services/api'
import './Jobs.css'

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    loadJobs()
  }, [selectedCategory])

  const loadJobs = async () => {
    try {
      setLoading(true)
      setError('')
      const filters = {}
      if (selectedCategory !== 'all') {
        filters.category = selectedCategory
      }
      const jobsData = await jobsAPI.getAllJobs(filters)
      setJobs(jobsData)
    } catch (err) {
      console.error('Error loading jobs:', err)
      setError('Failed to load jobs. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      loadJobs()
      return
    }
    try {
      setLoading(true)
      setError('')
      const jobsData = await jobsAPI.searchJobs(searchTerm, selectedCategory !== 'all' ? { category: selectedCategory } : {})
      setJobs(jobsData)
    } catch (err) {
      console.error('Error searching jobs:', err)
      setError('Failed to search jobs. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const categories = ['all', 'Technology', 'Design', 'Marketing', 'Product', 'Sales', 'General']

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

  return (
    <div className="jobs-page">
      <div className="jobs-header">
        <div className="container">
          <h1>Find Your Next Opportunity</h1>
          <p>Browse through thousands of job openings from top companies</p>
        </div>
      </div>

      <div className="jobs-content">
        <div className="container">
          <div className="jobs-filters">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search jobs, companies, or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="search-input"
              />
              <button onClick={handleSearch} className="search-btn">Search</button>
            </div>
            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="jobs-results">
            {loading ? (
              <div className="loading">Loading jobs...</div>
            ) : error ? (
              <div className="error">{error}</div>
            ) : (
              <>
                <p className="results-count">{jobs.length} jobs found</p>
                <div className="jobs-list">
                  {jobs.length === 0 ? (
                    <div className="no-jobs">No jobs found. Try adjusting your filters.</div>
                  ) : (
                    jobs.map(job => (
                      <Link to={`/jobs/${job.id}`} key={job.id} className="job-card">
                        <div className="job-card-header">
                          <h3>{job.title}</h3>
                          <span className="job-type">{job.type}</span>
                        </div>
                        <p className="job-company">{job.company}</p>
                        <div className="job-details">
                          <span className="job-location">📍 {job.location}</span>
                          {job.salary && <span className="job-salary">💰 {job.salary}</span>}
                          <span className="job-category">🏷️ {job.category || 'General'}</span>
                        </div>
                        <p className="job-posted">Posted {formatDate(job.createdAt)}</p>
                      </Link>
                    ))
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jobs

