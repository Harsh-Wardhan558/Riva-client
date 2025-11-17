import { Link } from 'react-router-dom'
import aboutUs5Image from '../images/aboutus5.png'
import './ExecutiveHiring.css'

const ExecutiveHiring = () => {
  return (
    <div className="executive-hiring-page">
      {/* Hero Section */}
      <section className="service-hero-section">
        <div className="container">
          <div className="service-hero-content">
            <span className="service-hero-label">Executive Hiring</span>
            <h1 className="service-hero-title">Executive Search & C-Suite Placement</h1>
            <p className="service-hero-description">
              High-level recruitment for leadership roles that drive organizational transformation. We identify and place exceptional executives who shape the future of your business.
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
            <h2 className="service-features-title">Why Choose Executive Search</h2>
            <p className="service-features-subtitle">
              Specialized expertise in identifying and placing transformational leaders
            </p>
          </div>

          <div className="service-features-grid">
            {/* Feature 1 */}
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 16V8C20.9996 7.64928 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64928 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.27 6.96L12 12.01L20.73 6.96" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22.08V12" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="service-feature-title">C-Suite Expertise</h3>
              <p className="service-feature-description">
                Specialized focus on senior executive roles including CEOs, CFOs, CTOs, and other C-level positions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="service-feature-title">Confidential Search</h3>
              <p className="service-feature-description">
                Discreet and confidential search process protecting your organization's interests and candidate privacy.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="service-feature-title">Global Network</h3>
              <p className="service-feature-description">
                Access to an extensive network of executive talent across industries and geographies worldwide.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3V21H21" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 16L12 11L16 15L21 10" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 10V3H14" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="service-feature-title">Strategic Assessment</h3>
              <p className="service-feature-description">
                Comprehensive evaluation of leadership capabilities, strategic vision, and cultural fit for executive roles.
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
                <span className="service-benefits-number">03</span>
                <span className="service-benefits-label">Benefits</span>
              </div>
              <span className="service-benefits-subtitle">Executive</span>
              <h2 className="service-benefits-title">Leadership That Transforms</h2>
              <p className="service-benefits-description">
                Executive search is about finding leaders who don't just fill roles—they transform organizations. We identify visionary executives who drive innovation, growth, and strategic success.
              </p>
              <p className="service-benefits-description">
                Our executive search process combines deep industry knowledge, extensive networks, and rigorous assessment to place leaders who make a lasting impact on your organization's trajectory.
              </p>
              <div className="service-benefits-buttons">
                <Link to="/contact" className="service-benefits-btn-primary">
                  <span>Find Executive Talent</span>
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
                  <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 21V13C16 12.4477 15.5523 12 15 12H9C8.44772 12 8 12.4477 8 13V21" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
            <h2 className="service-process-title">Our Executive Search Process</h2>
            <p className="service-process-subtitle">
              A meticulous approach to identifying and placing transformational leaders
            </p>
          </div>

          <div className="service-process-steps">
            {/* Step 1 */}
            <div className="service-process-step">
              <div className="service-process-step-number">01</div>
              <h3 className="service-process-step-title">Strategic Briefing</h3>
              <p className="service-process-step-description">
                In-depth consultation to understand your organization's strategic goals, leadership needs, and cultural requirements.
              </p>
            </div>

            {/* Step 2 */}
            <div className="service-process-step">
              <div className="service-process-step-number">02</div>
              <h3 className="service-process-step-title">Targeted Search</h3>
              <p className="service-process-step-description">
                Leveraging our executive network and research capabilities to identify and approach qualified candidates confidentially.
              </p>
            </div>

            {/* Step 3 */}
            <div className="service-process-step">
              <div className="service-process-step-number">03</div>
              <h3 className="service-process-step-title">Comprehensive Evaluation</h3>
              <p className="service-process-step-description">
                Rigorous assessment including leadership capabilities, strategic thinking, cultural alignment, and reference verification.
              </p>
            </div>

            {/* Step 4 */}
            <div className="service-process-step">
              <div className="service-process-step-number">04</div>
              <h3 className="service-process-step-title">Placement & Integration</h3>
              <p className="service-process-step-description">
                Facilitating smooth executive transitions and providing ongoing support to ensure successful leadership integration.
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
              <h2 className="cta-heading">Ready to find your next executive leader?</h2>
              <p className="cta-description">
                Partner with Riva Scientific to identify and place transformational executives who drive organizational success.
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="cta-btn-primary">Get Started</Link>
                <Link to="/services" className="cta-btn-secondary">View All Services</Link>
              </div>
            </div>
            <div className="cta-image-wrapper">
              <img src={aboutUs5Image} alt="Executive search solutions" className="cta-image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ExecutiveHiring

