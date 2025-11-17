import { Link } from 'react-router-dom'
import aboutUs5Image from '../images/aboutus5.png'
import './Services.css'

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero-section">
        <div className="container">
          <div className="services-hero-content">
            <span className="services-hero-label">Talent</span>
            <h1 className="services-hero-title">Our services</h1>
            <p className="services-hero-description">
              Precision recruitment solutions that transform businesses through strategic talent acquisition and expert placement.
            </p>
            <div className="services-hero-buttons">
              <Link to="/contact" className="services-btn-connect">
                Connect
              </Link>
              <Link to="/about" className="services-btn-learn">
                <span>Learn more</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="services-grid-section">
        <div className="container">
          {/* Header */}
          <div className="services-grid-header">
            <span className="services-grid-label">Solutions</span>
            <h2 className="services-grid-title">Comprehensive staffing services</h2>
            <p className="services-grid-subtitle">
              Tailored recruitment strategies for dynamic business needs
            </p>
          </div>

          {/* Main Grid */}
          <div className="services-grid">
            {/* Left Column - Large Primary Card */}
            <div className="services-card-large">
              <div className="services-card-image-wrapper">
                <div className="services-card-image-placeholder">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 16L4 4L20 4L20 20L4 20Z" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 8L16 8M8 12L16 12M8 16L12 16" stroke="#999" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <div className="services-card-content">
                <span className="services-card-category">Permanent</span>
                <h3 className="services-card-title">Permanent staffing solutions</h3>
                <p className="services-card-description">
                  Strategic placement of top-tier talent for long-term organizational success and growth.
                </p>
                <div className="services-card-buttons">
                  <button className="services-btn-explore"><span>Explore</span></button>
                  <Link to="/services" className="services-btn-learn-more">Learn →</Link>
                </div>
              </div>
            </div>

            {/* Right Column - Two Stacked Cards */}
            <div className="services-cards-stack">
              {/* Top Small Card */}
              <div className="services-card-small">
                <div className="services-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2V8H20" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 13H8" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M16 17H8" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M10 9H9H8" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h4 className="services-card-small-title">Contract and temporary staffing</h4>
                <p className="services-card-small-description">
                  Flexible workforce solutions for agile business environments.
                </p>
                <Link to="/services" className="services-btn-learn-more">Learn →</Link>
              </div>

              {/* Bottom Small Card */}
              <div className="services-card-small">
                <div className="services-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="2" fill="#000"/>
                  </svg>
                </div>
                <h4 className="services-card-small-title">Specialized IT and advisory</h4>
                <p className="services-card-small-description">
                  Expert technology and strategic consulting talent for complex business challenges.
                </p>
                <Link to="/services" className="services-btn-learn-more">Learn →</Link>
              </div>
            </div>

            {/* Bottom Right - Medium Wide Card */}
            <div className="services-card-medium">
              <div className="services-card-medium-image-wrapper">
                <div className="services-card-image-placeholder">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 16L4 4L20 4L20 20L4 20Z" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 8L16 8M8 12L16 12M8 16L12 16" stroke="#999" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <div className="services-card-medium-content">
                <span className="services-card-category">Executive</span>
                <h3 className="services-card-title">Executive search and C-suite placement</h3>
                <p className="services-card-description">
                  High-level recruitment for leadership roles that drive organizational transformation.
                </p>
                <Link to="/services" className="services-btn-learn-more">Learn →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Talent Section */}
      <section className="specialized-talent-section">
        <div className="container">
          <div className="specialized-talent-grid">
            {/* Left Column - Text Content */}
            <div className="specialized-talent-content">
              <div className="specialized-talent-header">
                <span className="specialized-talent-number">01</span>
                <span className="specialized-talent-label">Talent focus</span>
              </div>
              <span className="specialized-talent-subtitle">Specialized</span>
              <h2 className="specialized-talent-title">Precision talent solutions for your industry</h2>
              <p className="specialized-talent-description">
                Targeted recruitment strategies that match top professionals with critical business needs across specialized sectors.
              </p>
              <div className="specialized-talent-buttons">
                <button className="specialized-btn-explore"><span>Explore</span></button>
                <Link to="/services" className="specialized-btn-learn">Learn →</Link>
              </div>
            </div>

            {/* Right Column - Image Placeholder */}
            <div className="specialized-talent-image-wrapper">
              <div className="specialized-talent-image-placeholder">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12L7 8L10.5 11.5L14.5 7.5L21 14" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 20H21" stroke="#999" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="18" cy="6" r="3" fill="#999"/>
                </svg>
                <div className="specialized-image-badge">
                  <span>1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* Industry Expertise Section */}
      <section className="industry-expertise-section">
        <div className="container">
          <div className="industry-expertise-grid">
            {/* Left Column - Text Content */}
            <div className="industry-expertise-content">
              <div className="industry-expertise-header">
                <span className="industry-expertise-number">02</span>
                <span className="industry-expertise-label">Industry expertise</span>
              </div>
              <span className="industry-expertise-subtitle">Targeted</span>
              <h2 className="industry-expertise-title">Comprehensive talent mapping for complex roles</h2>
              <p className="industry-expertise-description">
                Deep understanding of industry-specific talent landscapes and strategic placement methodologies.
              </p>
              <div className="industry-expertise-buttons">
                <button className="industry-btn-discover"><span>Discover</span></button>
                <Link to="/contact" className="industry-btn-connect">Connect →</Link>
              </div>
            </div>

            {/* Right Column - Image Placeholder */}
            <div className="industry-expertise-image-wrapper">
              <div className="industry-expertise-image-placeholder">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12L7 8L10.5 11.5L14.5 7.5L21 14" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 20H21" stroke="#999" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="18" cy="6" r="3" fill="#999"/>
                </svg>
                <div className="industry-image-badge">
                  <span>2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* Third Section - Duplicate */}
      <section className="industry-expertise-section">
        <div className="container">
          <div className="industry-expertise-grid">
            {/* Left Column - Text Content */}
            <div className="industry-expertise-content">
              <div className="industry-expertise-header">
                <span className="industry-expertise-number">03</span>
                <span className="industry-expertise-label">Strategic placement</span>
              </div>
              <span className="industry-expertise-subtitle">Expert</span>
              <h2 className="industry-expertise-title">Advanced recruitment methodologies</h2>
              <p className="industry-expertise-description">
                Innovative approaches to talent acquisition that deliver exceptional results for your organization.
              </p>
              <div className="industry-expertise-buttons">
                <button className="industry-btn-discover"><span>Discover</span></button>
                <Link to="/contact" className="industry-btn-connect">Connect →</Link>
              </div>
            </div>

            {/* Right Column - Image Placeholder */}
            <div className="industry-expertise-image-wrapper">
              <div className="industry-expertise-image-placeholder">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12L7 8L10.5 11.5L14.5 7.5L21 14" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 20H21" stroke="#999" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="18" cy="6" r="3" fill="#999"/>
                </svg>
                <div className="industry-image-badge">
                  <span>3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* Fourth Section - Duplicate */}
      <section className="industry-expertise-section">
        <div className="container">
          <div className="industry-expertise-grid">
            {/* Left Column - Text Content */}
            <div className="industry-expertise-content">
              <div className="industry-expertise-header">
                <span className="industry-expertise-number">04</span>
                <span className="industry-expertise-label">Talent excellence</span>
              </div>
              <span className="industry-expertise-subtitle">Premium</span>
              <h2 className="industry-expertise-title">Elite talent acquisition services</h2>
              <p className="industry-expertise-description">
                Premium recruitment solutions designed to connect you with the finest professionals in your industry.
              </p>
              <div className="industry-expertise-buttons">
                <button className="industry-btn-discover"><span>Discover</span></button>
                <Link to="/contact" className="industry-btn-connect">Connect →</Link>
              </div>
            </div>

            {/* Right Column - Image Placeholder */}
            <div className="industry-expertise-image-wrapper">
              <div className="industry-expertise-image-placeholder">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12L7 8L10.5 11.5L14.5 7.5L21 14" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 20H21" stroke="#999" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="18" cy="6" r="3" fill="#999"/>
                </svg>
                <div className="industry-image-badge">
                  <span>4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* Inspiring Staffing Solutions Section */}
      <section className="staffing-solutions-section">
        <div className="container">
          <div className="staffing-solutions-header">
            <span className="staffing-solutions-tag">WHAT WE PROVIDE</span>
            <h2 className="staffing-solutions-title">Inspiring Staffing Solutions</h2>
          </div>
          <div className="staffing-solutions-grid">
            {/* Training Session Card */}
            <div className="staffing-solution-card">
              <div className="staffing-solution-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Training Session" 
                  className="staffing-solution-image"
                />
              </div>
              <div className="staffing-solution-content">
                <h3 className="staffing-solution-title">Training Session</h3>
                <p className="staffing-solution-description">
                  These experts guide new employees through interactive workshops
                </p>
                <button className="staffing-solution-btn"><span>View Details</span></button>
              </div>
            </div>

            {/* Executive Search Card */}
            <div className="staffing-solution-card">
              <div className="staffing-solution-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Executive Search" 
                  className="staffing-solution-image"
                />
              </div>
              <div className="staffing-solution-content">
                <h3 className="staffing-solution-title">Executive Search</h3>
                <p className="staffing-solution-description">
                  Our executive search services are customized to meet your specific
                </p>
                <button className="staffing-solution-btn"><span>View Details</span></button>
              </div>
            </div>

            {/* Temporary Jobs Card */}
            <div className="staffing-solution-card">
              <div className="staffing-solution-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Temporary Jobs" 
                  className="staffing-solution-image"
                />
              </div>
              <div className="staffing-solution-content">
                <h3 className="staffing-solution-title">Temporary Jobs</h3>
                <p className="staffing-solution-description">
                  Apply for our temporary jobs and become part of our talent pool
                </p>
                <button className="staffing-solution-btn"><span>View Details</span></button>
              </div>
            </div>

            {/* Payroll Services Card */}
            <div className="staffing-solution-card">
              <div className="staffing-solution-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Payroll Services" 
                  className="staffing-solution-image"
                />
              </div>
              <div className="staffing-solution-content">
                <h3 className="staffing-solution-title">Payroll Services</h3>
                <p className="staffing-solution-description">
                  Utilizing a reliable payroll service can significantly improve operational
                </p>
                <button className="staffing-solution-btn"><span>View Details</span></button>
              </div>
            </div>

            {/* Workforce System Card */}
            <div className="staffing-solution-card">
              <div className="staffing-solution-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Workforce System" 
                  className="staffing-solution-image"
                />
              </div>
              <div className="staffing-solution-content">
                <h3 className="staffing-solution-title">Workforce System</h3>
                <p className="staffing-solution-description">
                  This system leverages advanced technologies such as Applicant Tracking
                </p>
                <button className="staffing-solution-btn"><span>View Details</span></button>
              </div>
            </div>

            {/* Career Growth Card */}
            <div className="staffing-solution-card">
              <div className="staffing-solution-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Career Growth" 
                  className="staffing-solution-image"
                />
              </div>
              <div className="staffing-solution-content">
                <h3 className="staffing-solution-title">Career Growth</h3>
                <p className="staffing-solution-description">
                  Career growth is about fostering a culture where individuals can achieve
                </p>
                <button className="staffing-solution-btn"><span>View Details</span></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* Approach Section */}
      <section className="approach-section">
        <div className="container">
          <div className="approach-header">
            <span className="approach-label">Approach</span>
            <h2 className="approach-title">Why Riva Scientific stands out</h2>
            <p className="approach-subtitle">
              Our commitment transforms recruitment from a transaction to a strategic partnership.
            </p>
          </div>

          <div className="approach-cards-grid">
            {/* Card 1 */}
            <div className="approach-card">
              <div className="approach-card-image-wrapper">
                <div className="approach-card-image-placeholder">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12L7 8L10.5 11.5L14.5 7.5L21 14" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 20H21" stroke="#999" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="18" cy="6" r="3" fill="#999"/>
                  </svg>
                </div>
              </div>
              <h3 className="approach-card-title">Human-centered recruitment</h3>
              <p className="approach-card-description">
                We understand people are more than resumes and match talent with cultural and professional alignment.
              </p>
            </div>

            {/* Card 2 */}
            <div className="approach-card">
              <div className="approach-card-image-wrapper">
                <div className="approach-card-image-placeholder">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12L7 8L10.5 11.5L14.5 7.5L21 14" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 20H21" stroke="#999" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="18" cy="6" r="3" fill="#999"/>
                  </svg>
                </div>
              </div>
              <h3 className="approach-card-title">Comprehensive talent solutions</h3>
              <p className="approach-card-description">
                End-to-end recruitment services that cover every aspect of talent acquisition and management.
              </p>
            </div>

            {/* Card 3 */}
            <div className="approach-card">
              <div className="approach-card-image-wrapper">
                <div className="approach-card-image-placeholder">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12L7 8L10.5 11.5L14.5 7.5L21 14" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 20H21" stroke="#999" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="18" cy="6" r="3" fill="#999"/>
                  </svg>
                </div>
              </div>
              <h3 className="approach-card-title">Uncompromising quality</h3>
              <p className="approach-card-description">
                Rigorous screening and assessment processes ensure only the highest caliber candidates.
              </p>
            </div>

            {/* Card 4 */}
            <div className="approach-card">
              <div className="approach-card-image-wrapper">
                <div className="approach-card-image-placeholder">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12L7 8L10.5 11.5L14.5 7.5L21 14" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 20H21" stroke="#999" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="18" cy="6" r="3" fill="#999"/>
                  </svg>
                </div>
              </div>
              <h3 className="approach-card-title">Global reach</h3>
              <p className="approach-card-description">
                International networks and local insights provide unique talent acquisition capabilities.
              </p>
            </div>
          </div>

          <div className="approach-buttons">
            <button className="approach-btn-learn"><span>Learn more</span></button>
            <Link to="/contact" className="approach-btn-connect">Connect →</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            {/* Left Section - Text Content */}
            <div className="cta-content">
              <h2 className="cta-heading">Ready to transform your talent strategy?</h2>
              <p className="cta-description">
                Partner with Riva Scientific and unlock precision hiring across global industries.
              </p>
              <div className="cta-buttons">
                <Link to="/jobs" className="cta-btn-primary">Hire talent</Link>
                <Link to="/jobs" className="cta-btn-secondary">Find jobs</Link>
              </div>
            </div>

            {/* Right Section - Image */}
            <div className="cta-image-wrapper">
              <img src={aboutUs5Image} alt="Transform your talent strategy" className="cta-image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

