import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import jobsData, { jobCategories, jobTypes, popularKeywords } from '../data/jobsData'
import './Jobs.css'

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedType, setSelectedType] = useState('All')
  const [selectedKeyword, setSelectedKeyword] = useState(null)

  // Filter jobs based on search, category, type, and keywords
  const filteredJobs = useMemo(() => {
    return jobsData.filter(job => {
      const matchesSearch = searchQuery === '' || 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (job.keywords && job.keywords.some(keyword => 
          keyword.toLowerCase().includes(searchQuery.toLowerCase())
        ))
      
      const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory
      const matchesType = selectedType === 'All' || job.type === selectedType
      const matchesKeyword = !selectedKeyword || 
        (job.keywords && job.keywords.some(keyword => 
          keyword.toLowerCase().includes(selectedKeyword.toLowerCase())
        ))
      
      return matchesSearch && matchesCategory && matchesType && matchesKeyword
    })
  }, [searchQuery, selectedCategory, selectedType, selectedKeyword])

  // Get latest jobs (most recent 3)
  const latestJobs = [...jobsData]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 3)

  // Get unique locations
  const locations = [...new Set(jobsData.map(job => job.location))]

  const formatDate = (date) => {
    if (!date) return 'Recently'
    const dateObj = date instanceof Date ? date : new Date(date)
    const now = new Date()
    const diff = now - dateObj
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    if (days === 0) return 'Today'
    if (days === 1) return 'Yesterday'
    if (days < 7) return `${days} days ago`
    return dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  const handleKeywordClick = (keyword) => {
    setSelectedKeyword(selectedKeyword === keyword ? null : keyword)
    setSearchQuery(keyword)
  }

  return (
    <div className="jobs-page">
      {/* Hero Section */}
      <section className="jobs-hero-section">
        <div className="container">
          <div className="jobs-hero-content">
            <span className="jobs-hero-label">Opportunities</span>
            <h1 className="jobs-hero-title">Find your next job</h1>
            <p className="jobs-hero-description">
              Discover exciting career opportunities with top companies. Browse through thousands of job openings and find the perfect match for your skills.
            </p>
            <div className="jobs-hero-buttons">
              <Link to="/contact" className="jobs-btn-connect">
                Get Started
              </Link>
              <Link to="/about" className="jobs-btn-learn">
                <span>Learn more</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Content Section */}
      <section className="jobs-content-section">
        <div className="container">
          <div className="jobs-layout">
            {/* Left Sidebar */}
            <aside className="jobs-sidebar">
              {/* Search Bar */}
              <div className="sidebar-widget">
                <div className="search-box">
                  <input
                    type="text"
                    placeholder="Search jobs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                  />
                  <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Categories */}
              <div className="sidebar-widget">
                <h3 className="widget-title">Categories</h3>
                <ul className="categories-list">
                  {jobCategories.map((category, index) => (
                    <li key={index}>
                      <button
                        className={`category-link ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Job Types */}
              <div className="sidebar-widget">
                <h3 className="widget-title">Job Type</h3>
                <ul className="categories-list">
                  {jobTypes.map((type, index) => (
                    <li key={index}>
                      <button
                        className={`category-link ${selectedType === type ? 'active' : ''}`}
                        onClick={() => setSelectedType(type)}
                      >
                        {type}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Latest Jobs */}
              <div className="sidebar-widget">
                <h3 className="widget-title">Latest Jobs</h3>
                <div className="latest-jobs-list">
                  {latestJobs.map((job) => (
                    <Link key={job.id} to={`/jobs/${job.id}`} className="latest-job-item">
                      <div className="latest-job-content">
                        <h4 className="latest-job-title">{job.title}</h4>
                        <p className="latest-job-company">{job.company}</p>
                        <span className="latest-job-date">{formatDate(job.createdAt)}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Popular Keywords */}
              <div className="sidebar-widget">
                <h3 className="widget-title">Popular Keywords</h3>
                <div className="tags-list">
                  {popularKeywords.map((keyword, index) => (
                    <button
                      key={index}
                      className={`tag-button ${selectedKeyword === keyword ? 'active' : ''}`}
                      onClick={() => handleKeywordClick(keyword)}
                    >
                      {keyword}
                    </button>
                  ))}
                </div>
              </div>

              {/* Locations */}
              <div className="sidebar-widget">
                <h3 className="widget-title">Locations</h3>
                <ul className="categories-list">
                  {locations.slice(0, 6).map((location, index) => (
                    <li key={index}>
                      <button
                        className="category-link"
                        onClick={() => setSearchQuery(location)}
                      >
                        {location}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="jobs-main-content">
              <div className="jobs-header-bar">
                <h2 className="jobs-results-title">
                  {filteredJobs.length} {filteredJobs.length === 1 ? 'Job' : 'Jobs'} Found
                </h2>
                {(searchQuery || selectedCategory !== 'All' || selectedType !== 'All' || selectedKeyword) && (
                  <button
                    className="clear-filters-btn"
                    onClick={() => {
                      setSearchQuery('')
                      setSelectedCategory('All')
                      setSelectedType('All')
                      setSelectedKeyword(null)
                    }}
                  >
                    Clear Filters
                  </button>
                )}
              </div>

              <div className="jobs-grid">
                {filteredJobs.length === 0 ? (
                  <div className="no-jobs-found">
                    <p>No jobs found matching your criteria.</p>
                    <p>Try adjusting your filters or search terms.</p>
                  </div>
                ) : (
                  filteredJobs.map((job) => (
                    <article key={job.id} className="job-card">
                      <Link to={`/jobs/${job.id}`} className="job-card-link">
                        <div className="job-card-content">
                          <div className="job-card-header">
                            <h3 className="job-card-title">{job.title}</h3>
                            <span className="job-card-type">{job.type}</span>
                          </div>
                          <p className="job-card-company">{job.company}</p>
                          <div className="job-card-meta">
                            <span className="job-location">📍 {job.location}</span>
                            {job.salary && <span className="job-salary">💰 {job.salary}</span>}
                            <span className="job-category">🏷️ {job.category}</span>
                          </div>
                          <p className="job-card-description">{job.description.substring(0, 120)}...</p>
                          <div className="job-card-footer">
                            <span className="job-posted">Posted {formatDate(job.createdAt)}</span>
                            <span className="job-apply-link">Apply Now →</span>
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))
                )}
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Jobs
