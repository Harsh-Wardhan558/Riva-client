import { useState } from 'react'
import { Link } from 'react-router-dom'
import aboutUs5Image from '../images/aboutus5.png'
import './AISolutions.css'

const AISolutions = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    productInterest: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      productInterest: '',
      message: ''
    })
  }

  return (
    <div className="ai-solutions-page">
      {/* Hero Section */}
      <section className="ai-hero-section">
        <div className="container">
          <div className="ai-hero-grid">
            {/* Left Column - Text Content */}
            <div className="ai-hero-content">
              <span className="ai-hero-label">AI Solutions</span>
              <h1 className="ai-hero-title">AI Solutions That Transform Recruitment</h1>
              <p className="ai-hero-description">
                Next-gen tools built to automate, analyze, and accelerate hiring. Leverage artificial intelligence to find the perfect candidates faster and more accurately.
              </p>
              <div className="ai-hero-buttons">
                <Link to="#ai-products" className="ai-btn-primary">
                  Explore AI Products
                </Link>
                <Link to="/contact" className="ai-btn-secondary">
                  <span>Book a Demo</span>
                </Link>
              </div>
            </div>

            {/* Right Column - Image Placeholder */}
            <div className="ai-hero-image-wrapper">
              <div className="ai-hero-image-placeholder">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="2" fill="#999"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools & Products Showcase */}
      <section id="ai-products" className="ai-products-section">
        <div className="container">
          <div className="ai-products-header">
            <span className="ai-products-label">Products</span>
            <h2 className="ai-products-title">AI Tools & Products Showcase</h2>
            <p className="ai-products-subtitle">
              Comprehensive suite of AI-powered recruitment solutions designed to streamline your hiring process
            </p>
          </div>

          <div className="ai-products-grid">
            {/* AI Resume Parsing */}
            <div className="ai-product-card">
              <div className="ai-product-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 13H8" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M16 17H8" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M10 9H9H8" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="ai-product-title">AI Resume Parsing</h3>
              <p className="ai-product-description">
                Intelligent extraction and parsing of candidate information from resumes in multiple formats with 99% accuracy.
              </p>
              <Link to="#ai-form" className="ai-product-link">
                Learn More →
              </Link>
            </div>

            {/* Candidate Fit Scoring */}
            <div className="ai-product-card">
              <div className="ai-product-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12L7 8L10.5 11.5L14.5 7.5L21 14" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 20H21" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="18" cy="6" r="3" fill="#4CAF50"/>
                </svg>
              </div>
              <h3 className="ai-product-title">Candidate Fit Scoring</h3>
              <p className="ai-product-description">
                Machine learning algorithms that score candidates based on job requirements, skills, and cultural fit.
              </p>
              <Link to="#ai-form" className="ai-product-link">
                Learn More →
              </Link>
            </div>

            {/* Predictive Hiring Models */}
            <div className="ai-product-card">
              <div className="ai-product-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3V21H21" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 16L12 11L16 15L21 10" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 10V3H14" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="ai-product-title">Predictive Hiring Models</h3>
              <p className="ai-product-description">
                Advanced predictive analytics to forecast candidate success and reduce time-to-hire by up to 60%.
              </p>
              <Link to="#ai-form" className="ai-product-link">
                Learn More →
              </Link>
            </div>

            {/* Intelligent Role Matching */}
            <div className="ai-product-card">
              <div className="ai-product-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12C22 13.3132 21.7413 14.6136 21.2388 15.8268C20.7362 17.0401 19.9997 18.1425 19.0711 19.0711C18.1425 19.9997 17.0401 20.7362 15.8268 21.2388C14.6136 21.7413 13.3132 22 12 22C9.34784 22 6.8043 20.9464 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2Z" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12L11 15L16 9" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="ai-product-title">Intelligent Role Matching</h3>
              <p className="ai-product-description">
                AI-powered matching engine that connects candidates to roles based on skills, experience, and career trajectory.
              </p>
              <Link to="#ai-form" className="ai-product-link">
                Learn More →
              </Link>
            </div>

            {/* Automated Screening Bots */}
            <div className="ai-product-card">
              <div className="ai-product-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 9H15M9 15H15M9 12H15" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="ai-product-title">Automated Screening Bots</h3>
              <p className="ai-product-description">
                Conversational AI bots that conduct initial candidate screenings, schedule interviews, and answer FAQs 24/7.
              </p>
              <Link to="#ai-form" className="ai-product-link">
                Learn More →
              </Link>
            </div>

            {/* Workforce Analytics Dashboard */}
            <div className="ai-product-card">
              <div className="ai-product-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3V21H21" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 16L12 11L16 15L21 10" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 10V3H14" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="5" y="13" width="2" height="5" fill="#4CAF50"/>
                  <rect x="9" y="11" width="2" height="7" fill="#4CAF50"/>
                </svg>
              </div>
              <h3 className="ai-product-title">Workforce Analytics Dashboard</h3>
              <p className="ai-product-description">
                Real-time insights and analytics on hiring metrics, candidate pipelines, and recruitment performance.
              </p>
              <Link to="#ai-form" className="ai-product-link">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Two-Column Feature Section */}
      <section className="ai-feature-section">
        <div className="container">
          <div className="ai-feature-grid">
            {/* Left Column - Image */}
            <div className="ai-feature-image-wrapper">
              <div className="ai-feature-image-placeholder">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="15" y="3" width="8" height="8" rx="1" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 7H19.01" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="ai-feature-content">
              <span className="ai-feature-label">AI-Powered</span>
              <h2 className="ai-feature-title">How Riva Scientific's AI Improves Accuracy and Speed</h2>
              <p className="ai-feature-description">
                Our advanced artificial intelligence algorithms analyze millions of data points to identify the best candidates faster than traditional methods. By leveraging machine learning and natural language processing, we reduce bias, improve matching accuracy, and cut hiring time by up to 70%.
              </p>
              <p className="ai-feature-description">
                The AI continuously learns from your hiring decisions, refining its recommendations to align perfectly with your organization's unique needs and culture.
              </p>
              <div className="ai-feature-buttons">
                <Link to="#ai-products" className="ai-feature-btn-primary">
                  Learn More
                </Link>
                <Link to="/contact" className="ai-feature-btn-secondary">
                  See Demo →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Section */}
      <section className="ai-use-cases-section">
        <div className="container">
          <div className="ai-use-cases-header">
            <span className="ai-use-cases-label">Use Cases</span>
            <h2 className="ai-use-cases-title">Measurable Impact</h2>
            <p className="ai-use-cases-subtitle">
              Real results from AI-powered recruitment solutions
            </p>
          </div>

          <div className="ai-use-cases-grid">
            {/* Faster Shortlisting */}
            <div className="ai-use-case-card">
              <div className="ai-use-case-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 6V12L16 14" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="ai-use-case-title">Faster Shortlisting</h3>
              <p className="ai-use-case-description">
                Reduce time-to-shortlist by 75% with automated candidate ranking and qualification matching.
              </p>
            </div>

            {/* Bias-free Screening */}
            <div className="ai-use-case-card">
              <div className="ai-use-case-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12L11 15L16 9" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="ai-use-case-title">Bias-free Screening</h3>
              <p className="ai-use-case-description">
                Eliminate unconscious bias with objective AI evaluation focused solely on skills and qualifications.
              </p>
            </div>

            {/* Skills Intelligence */}
            <div className="ai-use-case-card">
              <div className="ai-use-case-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="ai-use-case-title">Skills Intelligence</h3>
              <p className="ai-use-case-description">
                Deep analysis of candidate skills, certifications, and competencies with automated verification.
              </p>
            </div>

            {/* Automated Verification */}
            <div className="ai-use-case-card">
              <div className="ai-use-case-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="ai-use-case-title">Automated Verification</h3>
              <p className="ai-use-case-description">
                Instant background checks, credential verification, and reference validation powered by AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Highlight */}
      <section className="ai-client-success-section">
        <div className="container">
          <div className="ai-client-success-card">
            <div className="ai-client-success-image-wrapper">
              <div className="ai-client-success-image-placeholder">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="ai-client-success-content">
              <div className="ai-client-success-quote">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 21C3 17.4 3 15.1 3 14.1C3 13.1 3.4 12.3 4.2 11.7C5 11.1 6.2 10.7 7.8 10.5V8.5C6.2 8.3 4.8 7.7 3.6 6.7C2.4 5.7 1.8 4.4 1.8 2.8H5.4C5.4 3.4 5.6 3.9 6 4.3C6.4 4.7 6.9 4.9 7.5 4.9C8.1 4.9 8.6 4.7 9 4.3C9.4 3.9 9.6 3.4 9.6 2.8V2.2C9.6 1.6 9.4 1.1 9 0.7C8.6 0.3 8.1 0.1 7.5 0.1C6.2 0.1 5.1 0.5 4.2 1.3C3.3 2.1 2.8 3.2 2.8 4.6C2.8 6.2 3.4 7.5 4.6 8.5C5.8 9.5 7.2 10.1 8.8 10.3V12.3C7.2 12.5 6 12.9 5.2 13.5C4.4 14.1 4 14.9 4 15.9C4 16.9 4 19.2 4 22.8H3V21Z" fill="#4CAF50"/>
                </svg>
              </div>
              <p className="ai-client-success-text">
                Riva Scientific's AI platform transformed our hiring process. We've reduced time-to-hire by 65% and improved candidate quality significantly. The predictive analytics help us make better decisions faster.
              </p>
              <div className="ai-client-success-author">
                <div className="ai-client-success-author-name">Sarah Johnson</div>
                <div className="ai-client-success-author-role">VP of Talent Acquisition, TechCorp Industries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section id="ai-form" className="ai-form-section">
        <div className="container">
          <div className="ai-form-card">
            <div className="ai-form-header">
              <h2 className="ai-form-title">Get Started With AI-Powered Hiring</h2>
              <p className="ai-form-subtitle">
                Discover how our AI solutions can transform your recruitment process
              </p>
            </div>

            <form onSubmit={handleSubmit} className="ai-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="ai-name">Name *</label>
                  <input
                    type="text"
                    id="ai-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="ai-company">Company *</label>
                  <input
                    type="text"
                    id="ai-company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="ai-email">Email *</label>
                  <input
                    type="email"
                    id="ai-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@company.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="ai-productInterest">Product Interest *</label>
                  <select
                    id="ai-productInterest"
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select product</option>
                    <option value="resume-parsing">AI Resume Parsing</option>
                    <option value="fit-scoring">Candidate Fit Scoring</option>
                    <option value="predictive-models">Predictive Hiring Models</option>
                    <option value="role-matching">Intelligent Role Matching</option>
                    <option value="screening-bots">Automated Screening Bots</option>
                    <option value="analytics">Workforce Analytics Dashboard</option>
                    <option value="all">All Products</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="ai-message">Message *</label>
                <textarea
                  id="ai-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your hiring challenges and how we can help..."
                ></textarea>
              </div>

              <button type="submit" className="ai-form-submit">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            {/* Left Section - Text Content */}
            <div className="cta-content">
              <h2 className="cta-heading">Ready to transform your recruitment with AI?</h2>
              <p className="cta-description">
                Discover how Riva Scientific's AI-powered solutions can automate, accelerate, and optimize your hiring process for better results.
              </p>
              <div className="cta-buttons">
                <Link to="#ai-form" className="cta-btn-primary">Get Started</Link>
                <Link to="/contact" className="cta-btn-secondary">Book a Demo</Link>
              </div>
            </div>

            {/* Right Section - Image */}
            <div className="cta-image-wrapper">
              <img src={aboutUs5Image} alt="AI-powered recruitment" className="cta-image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AISolutions

