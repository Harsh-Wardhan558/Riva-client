import { Link } from 'react-router-dom'
import aboutUs5Image from '../images/aboutus5.png'
import './ContractHiring.css'

const ContractHiring = () => {
  return (
    <div className="contract-hiring-page">
      {/* Hero Section */}
      <section className="service-hero-section">
        <div className="container">
          <div className="service-hero-content">
            <span className="service-hero-label">Contract Hiring</span>
            <h1 className="service-hero-title">Contract & Temporary Staffing</h1>
            <p className="service-hero-description">
              Flexible workforce solutions for agile business environments. Access skilled professionals on-demand to meet project deadlines and scale your team as needed.
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
            <h2 className="service-features-title">Why Choose Contract Hiring</h2>
            <p className="service-features-subtitle">
              Flexible staffing solutions that adapt to your changing business needs
            </p>
          </div>

          <div className="service-features-grid">
            {/* Feature 1 */}
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 6V12L16 14" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="service-feature-title">Rapid Deployment</h3>
              <p className="service-feature-description">
                Quick access to qualified professionals ready to start immediately, reducing time-to-productivity.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3V21H21" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 16L12 11L16 15L21 10" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="service-feature-title">Scalable Solutions</h3>
              <p className="service-feature-description">
                Scale your team up or down based on project requirements without long-term commitments.
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
              <h3 className="service-feature-title">Specialized Skills</h3>
              <p className="service-feature-description">
                Access niche expertise and specialized skills for specific projects without permanent overhead.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 11L12 14L22 4" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="service-feature-title">Cost Efficiency</h3>
              <p className="service-feature-description">
                Optimize your workforce costs by hiring contract talent only when needed, reducing fixed expenses.
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
                <span className="service-benefits-number">02</span>
                <span className="service-benefits-label">Benefits</span>
              </div>
              <span className="service-benefits-subtitle">Flexible</span>
              <h2 className="service-benefits-title">Agile Workforce Solutions</h2>
              <p className="service-benefits-description">
                Contract hiring provides the flexibility to respond quickly to market changes, project demands, and seasonal fluctuations. Build a dynamic team that adapts to your business needs.
              </p>
              <p className="service-benefits-description">
                Whether you need short-term support for a specific project or ongoing contract resources, we connect you with skilled professionals ready to contribute immediately.
              </p>
              <div className="service-benefits-buttons">
                <Link to="/contact" className="service-benefits-btn-primary">
                  <span>Find Contract Talent</span>
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

      {/* Process Section */}
      <section className="service-process-section">
        <div className="container">
          <div className="service-process-header">
            <span className="service-process-label">Process</span>
            <h2 className="service-process-title">Our Contract Hiring Process</h2>
            <p className="service-process-subtitle">
              Streamlined process to quickly match you with contract professionals
            </p>
          </div>

          <div className="service-process-steps">
            {/* Step 1 */}
            <div className="service-process-step">
              <div className="service-process-step-number">01</div>
              <h3 className="service-process-step-title">Requirement Analysis</h3>
              <p className="service-process-step-description">
                Understanding your project scope, timeline, and specific skill requirements to identify the ideal contract candidate profile.
              </p>
            </div>

            {/* Step 2 */}
            <div className="service-process-step">
              <div className="service-process-step-number">02</div>
              <h3 className="service-process-step-title">Quick Matching</h3>
              <p className="service-process-step-description">
                Rapid identification and presentation of pre-screened contract professionals from our extensive talent pool.
              </p>
            </div>

            {/* Step 3 */}
            <div className="service-process-step">
              <div className="service-process-step-number">03</div>
              <h3 className="service-process-step-title">Fast-Track Onboarding</h3>
              <p className="service-process-step-description">
                Expedited onboarding process to get contract professionals productive quickly, minimizing ramp-up time.
              </p>
            </div>

            {/* Step 4 */}
            <div className="service-process-step">
              <div className="service-process-step-number">04</div>
              <h3 className="service-process-step-title">Ongoing Management</h3>
              <p className="service-process-step-description">
                Continuous support and management throughout the contract period to ensure project success and satisfaction.
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
              <h2 className="cta-heading">Need flexible contract talent?</h2>
              <p className="cta-description">
                Connect with skilled contract professionals ready to contribute to your projects immediately.
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="cta-btn-primary">Get Started</Link>
                <Link to="/services" className="cta-btn-secondary">View All Services</Link>
              </div>
            </div>
            <div className="cta-image-wrapper">
              <img src={aboutUs5Image} alt="Contract hiring solutions" className="cta-image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContractHiring

