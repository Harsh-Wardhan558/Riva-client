import { useState } from 'react'
import { Link } from 'react-router-dom'
import aboutUs5Image from '../images/aboutus5.png'
import './Partnerships.css'

const Partnerships = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    partnershipType: '',
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
      partnershipType: '',
      message: ''
    })
  }

  return (
    <div className="partnerships-page">
      {/* Hero Section */}
      <section className="partnerships-hero-section">
        <div className="container">
          <div className="partnerships-hero-content">
            <span className="partnerships-hero-label">Partnerships</span>
            <h1 className="partnerships-hero-title">Strategic Partnerships for Shared Growth</h1>
            <p className="partnerships-hero-description">
              Join forces with Riva Scientific to build long-term value and future-ready solutions.
            </p>
            <div className="partnerships-hero-buttons">
              <Link to="#partnership-form" className="partnerships-btn-primary">
                Become a Partner
              </Link>
              <Link to="/contact" className="partnerships-btn-secondary">
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="partnerships-hero-image-wrapper">
          <div className="partnerships-hero-image-placeholder">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Collaboration Models Section */}
      <section className="collaboration-models-section">
        <div className="container">
          <div className="collaboration-models-header">
            <span className="collaboration-models-label">Partnership Models</span>
            <h2 className="collaboration-models-title">Choose Your Collaboration Path</h2>
            <p className="collaboration-models-subtitle">
              Flexible partnership structures designed to align with your business goals
            </p>
          </div>

          <div className="collaboration-models-grid">
            {/* Reseller Partnerships */}
            <div className="collaboration-model-card">
              <div className="collaboration-model-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 22V12H15V22" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="collaboration-model-title">Reseller Partnerships</h3>
              <p className="collaboration-model-description">
                Expand your service offerings by reselling Riva Scientific's recruitment solutions to your client base.
              </p>
              <Link to="#partnership-form" className="collaboration-model-link">
                Learn More →
              </Link>
            </div>

            {/* Vendor Alliances */}
            <div className="collaboration-model-card">
              <div className="collaboration-model-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="collaboration-model-title">Vendor Alliances</h3>
              <p className="collaboration-model-description">
                Strategic alliances with complementary vendors to deliver integrated solutions and enhanced value.
              </p>
              <Link to="#partnership-form" className="collaboration-model-link">
                Learn More →
              </Link>
            </div>

            {/* Technology & Integration Partners */}
            <div className="collaboration-model-card">
              <div className="collaboration-model-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12L11 15L16 9" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="collaboration-model-title">Technology & Integration Partners</h3>
              <p className="collaboration-model-description">
                Deep technical integrations with leading platforms to create seamless workflows and enhanced capabilities.
              </p>
              <Link to="#partnership-form" className="collaboration-model-link">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Benefits Section */}
      <section className="partner-benefits-section">
        <div className="container">
          <div className="partner-benefits-header">
            <span className="partner-benefits-label">Benefits</span>
            <h2 className="partner-benefits-title">Why Partner With Riva Scientific</h2>
          </div>

          <div className="partner-benefits-grid">
            {/* Increased Market Reach */}
            <div className="partner-benefit-card">
              <div className="partner-benefit-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="partner-benefit-title">Increased Market Reach</h3>
              <p className="partner-benefit-description">
                Access new markets and customer segments through our established network and brand presence.
              </p>
            </div>

            {/* Shared Innovation */}
            <div className="partner-benefit-card">
              <div className="partner-benefit-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="partner-benefit-title">Shared Innovation</h3>
              <p className="partner-benefit-description">
                Collaborate on cutting-edge solutions and leverage joint R&D efforts to stay ahead of the curve.
              </p>
            </div>

            {/* Dedicated Account Support */}
            <div className="partner-benefit-card">
              <div className="partner-benefit-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="partner-benefit-title">Dedicated Account Support</h3>
              <p className="partner-benefit-description">
                Receive personalized support from dedicated partnership managers committed to your success.
              </p>
            </div>

            {/* Co-marketing Opportunities */}
            <div className="partner-benefit-card">
              <div className="partner-benefit-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8H20C20.5304 8 21.0391 8.21071 21.4142 8.58579C21.7893 8.96086 22 9.46957 22 10V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V10C2 9.46957 2.21071 8.96086 2.58579 8.58579C2.96086 8.21071 3.46957 8 4 8H6" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 8V6C8 4.93913 8.42143 3.92172 9.17157 3.17157C9.92172 2.42143 10.9391 2 12 2C13.0609 2 14.0783 2.42143 14.8284 3.17157C15.5786 3.92172 16 4.93913 16 6V8" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="partner-benefit-title">Co-marketing Opportunities</h3>
              <p className="partner-benefit-description">
                Amplify your brand visibility through joint marketing initiatives and co-branded campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Partner With */}
      <section className="industries-partner-section">
        <div className="container">
          <div className="industries-partner-header">
            <span className="industries-partner-label">Industries</span>
            <h2 className="industries-partner-title">Industries We Partner With</h2>
            <p className="industries-partner-subtitle">
              We collaborate across diverse sectors to deliver specialized recruitment solutions
            </p>
          </div>

          <div className="industries-partner-list">
            {/* Healthcare */}
            <div className="industry-partner-card">
              <div className="industry-partner-image-wrapper">
                <div className="industry-partner-image-placeholder">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8V14M9 11H15" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="industry-partner-content">
                <h3 className="industry-partner-title">Healthcare</h3>
                <p className="industry-partner-description">
                  Connecting healthcare organizations with qualified medical professionals, administrators, and specialized talent across all levels.
                </p>
              </div>
            </div>

            {/* IT & Technology */}
            <div className="industry-partner-card">
              <div className="industry-partner-image-wrapper">
                <div className="industry-partner-image-placeholder">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 21H16" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 17V21" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="industry-partner-content">
                <h3 className="industry-partner-title">IT & Technology</h3>
                <p className="industry-partner-description">
                  Partnering with tech companies to source top engineering talent, developers, data scientists, and IT professionals.
                </p>
              </div>
            </div>

            {/* Manufacturing */}
            <div className="industry-partner-card">
              <div className="industry-partner-image-wrapper">
                <div className="industry-partner-image-placeholder">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 7H16C16.5304 7 17.0391 7.21071 17.4142 7.58579C17.7893 7.96086 18 8.46957 18 9V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H8C7.46957 21 6.96086 20.7893 6.58579 20.4142C6.21071 20.0391 6 19.5304 6 19V9C6 8.46957 6.21071 7.96086 6.58579 7.58579C6.96086 7.21071 7.46957 7 8 7H10" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 7V5C9 4.46957 9.21071 3.96086 9.58579 3.58579C9.96086 3.21071 10.4696 3 11 3H13C13.5304 3 14.0391 3.21071 14.4142 3.58579C14.7893 3.96086 15 4.46957 15 5V7" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11V17" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="industry-partner-content">
                <h3 className="industry-partner-title">Manufacturing</h3>
                <p className="industry-partner-description">
                  Supporting manufacturing firms with skilled workers, engineers, production managers, and operational leadership.
                </p>
              </div>
            </div>

            {/* Business Services */}
            <div className="industry-partner-card">
              <div className="industry-partner-image-wrapper">
                <div className="industry-partner-image-placeholder">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 16V8C20.9996 7.64928 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64928 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.27 6.96L12 12.01L20.73 6.96" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22.08V12" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="industry-partner-content">
                <h3 className="industry-partner-title">Business Services</h3>
                <p className="industry-partner-description">
                  Enabling service organizations to find consultants, analysts, project managers, and strategic advisors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Inquiry Form */}
      <section id="partnership-form" className="partnership-form-section">
        <div className="container">
          <div className="partnership-form-card">
            <div className="partnership-form-header">
              <h2 className="partnership-form-title">Partnership Inquiry</h2>
              <p className="partnership-form-subtitle">
                Let's explore how we can work together to create mutual value
              </p>
            </div>

            <form onSubmit={handleSubmit} className="partnership-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company *</label>
                  <input
                    type="text"
                    id="company"
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
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@company.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="partnershipType">Partnership Type *</label>
                  <select
                    id="partnershipType"
                    name="partnershipType"
                    value={formData.partnershipType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select partnership type</option>
                    <option value="reseller">Reseller Partnership</option>
                    <option value="vendor">Vendor Alliance</option>
                    <option value="technology">Technology & Integration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your partnership goals and how we can collaborate..."
                ></textarea>
              </div>

              <button type="submit" className="partnership-form-submit">
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
              <h2 className="cta-heading">Ready to build strategic partnerships?</h2>
              <p className="cta-description">
                Join forces with Riva Scientific and unlock new opportunities for growth, innovation, and market expansion through strategic collaboration.
              </p>
              <div className="cta-buttons">
                <Link to="#partnership-form" className="cta-btn-primary">Become a Partner</Link>
                <Link to="/contact" className="cta-btn-secondary">Contact Us</Link>
              </div>
            </div>

            {/* Right Section - Image */}
            <div className="cta-image-wrapper">
              <img src={aboutUs5Image} alt="Strategic partnerships" className="cta-image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Partnerships

