import { Link } from 'react-router-dom'
import aboutUs5Image from '../images/aboutus5.png'
import './PermanentHiring.css'

const PermanentHiring = () => {
  return (
    <div className="permanent-hiring-page">
      {/* Hero Section */}
      <section className="service-hero-section">
        <div className="container">
          <div className="service-hero-content">
            <span className="service-hero-label">Permanent Hiring</span>
            <h1 className="service-hero-title">Permanent Staffing Solutions</h1>
            <p className="service-hero-description">
              Strategic placement of top-tier talent for long-term organizational success and growth. We connect you with exceptional professionals who become integral parts of your team.
            </p>
            <div className="service-hero-buttons">
              <Link to="/contact" className="service-btn-primary">
                Get Started
              </Link>
              <Link to="/services" className="service-btn-secondary">
                <span>View All Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="service-features-section">
        <div className="container">
          <div className="service-features-header">
            <span className="service-features-label">Features</span>
            <h2 className="service-features-title">Why Choose Permanent Hiring</h2>
            <p className="service-features-subtitle">
              Comprehensive solutions designed to find the perfect long-term fit for your organization
            </p>
          </div>

          <div className="service-features-grid">
            {/* Feature 1 */}
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12L11 15L16 9" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="service-feature-title">Rigorous Screening</h3>
              <p className="service-feature-description">
                Multi-stage vetting process ensuring candidates meet your exact requirements and cultural fit standards.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="service-feature-title">Cultural Alignment</h3>
              <p className="service-feature-description">
                Deep understanding of your company culture to ensure candidates integrate seamlessly into your team.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12L7 8L10.5 11.5L14.5 7.5L21 14" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 20H21" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="service-feature-title">Long-term Retention</h3>
              <p className="service-feature-description">
                Focus on candidates committed to long-term growth and career development within your organization.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="service-feature-title">Comprehensive Support</h3>
              <p className="service-feature-description">
                Ongoing support throughout the hiring process and beyond to ensure successful placements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="service-benefits-section">
        <div className="container">
          <div className="service-benefits-grid">
            {/* Left Column - Content */}
            <div className="service-benefits-content">
              <div className="service-benefits-header">
                <span className="service-benefits-number">01</span>
                <span className="service-benefits-label">Benefits</span>
              </div>
              <span className="service-benefits-subtitle">Permanent</span>
              <h2 className="service-benefits-title">Building Your Core Team</h2>
              <p className="service-benefits-description">
                Permanent hiring establishes the foundation of your organization. We help you build a stable, committed workforce that drives consistent performance and long-term success.
              </p>
              <p className="service-benefits-description">
                Our approach focuses on finding candidates who align with your values, vision, and growth trajectory, ensuring they become valuable long-term assets to your team.
              </p>
              <div className="service-benefits-buttons">
                <Link to="/contact" className="service-benefits-btn-primary">
                  <span>Start Hiring</span>
                </Link>
                <Link to="/services" className="service-benefits-btn-secondary">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="service-benefits-image-wrapper">
              <div className="service-benefits-image-placeholder">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="service-process-section">
        <div className="container">
          <div className="service-process-header">
            <span className="service-process-label">Process</span>
            <h2 className="service-process-title">Our Permanent Hiring Process</h2>
            <p className="service-process-subtitle">
              A systematic approach to finding and placing the right permanent talent
            </p>
          </div>

          <div className="service-process-steps">
            {/* Step 1 */}
            <div className="service-process-step">
              <div className="service-process-step-number">01</div>
              <h3 className="service-process-step-title">Needs Assessment</h3>
              <p className="service-process-step-description">
                We begin by understanding your specific requirements, company culture, and long-term goals to create a detailed candidate profile.
              </p>
            </div>

            {/* Step 2 */}
            <div className="service-process-step">
              <div className="service-process-step-number">02</div>
              <h3 className="service-process-step-title">Talent Sourcing</h3>
              <p className="service-process-step-description">
                Leveraging our extensive network and advanced search techniques to identify qualified candidates who match your criteria.
              </p>
            </div>

            {/* Step 3 */}
            <div className="service-process-step">
              <div className="service-process-step-number">03</div>
              <h3 className="service-process-step-title">Screening & Evaluation</h3>
              <p className="service-process-step-description">
                Comprehensive interviews, skills assessments, and background checks to ensure candidate quality and fit.
              </p>
            </div>

            {/* Step 4 */}
            <div className="service-process-step">
              <div className="service-process-step-number">04</div>
              <h3 className="service-process-step-title">Placement & Onboarding</h3>
              <p className="service-process-step-description">
                Facilitating smooth transitions and providing support during the onboarding process to ensure successful integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2 className="cta-heading">Ready to build your permanent team?</h2>
              <p className="cta-description">
                Let Riva Scientific help you find exceptional permanent talent that drives your organization forward.
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="cta-btn-primary">Get Started</Link>
                <Link to="/services" className="cta-btn-secondary">View All Services</Link>
              </div>
            </div>
            <div className="cta-image-wrapper">
              <img src={aboutUs5Image} alt="Permanent hiring solutions" className="cta-image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PermanentHiring

