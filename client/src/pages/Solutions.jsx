import { Link } from 'react-router-dom'
import AnimatedIcon from '../components/AnimatedIcon'
import './Solutions.css'

const Solutions = () => {
  const solutions = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Training Session',
      description: 'These experts guide new employees through interactive workshops'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Executive Search',
      description: 'Our executive search services are customized to meet your specific'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Temporary Jobs',
      description: 'Apply for our temporary jobs and become part of our talent pool'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Payroll Services',
      description: 'Utilizing a reliable payroll service can significantly improve operational'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Workforce System',
      description: 'This system leverages advanced technologies such as Applicant Tracking'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Career Growth',
      description: 'Career growth is about fostering a culture where individuals can achieve'
    }
  ]

  return (
    <div className="solutions-page">
      {/* Page Title Section */}
      <section className="solutions-hero">
        <div className="container">
          <div className="page-title-section">
            <h1 className="page-title">Our Solutions</h1>
            <nav className="breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb-separator">-</span>
              <span className="breadcrumb-current">Our Solutions</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="solutions-grid-section">
        <div className="container">
          <div className="solutions-grid">
            {solutions.map((solution) => (
              <div key={solution.id} className="solution-card">
                <div className="solution-image-wrapper">
                  <img src={solution.image} alt={solution.title} className="solution-image" />
                  <div className="solution-overlay"></div>
                </div>
                <div className="solution-content">
                  <h3 className="solution-title">{solution.title}</h3>
                  <p className="solution-description">{solution.description}</p>
                  <button className="solution-btn">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professions and Industries Section */}
      <section className="hiring-section">
        <div className="hiring-grid">
          <div className="hiring-card professions-card">
            <div className="hiring-content">
              <h2 className="hiring-title">Professions Hiring</h2>
              <p className="hiring-description">
                This dynamic hiring landscape presents a wealth of opportunities for professionals across
              </p>
              <button className="hiring-btn">Professions</button>
            </div>
            <div className="hiring-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Professions" 
                className="hiring-image"
              />
            </div>
          </div>

          <div className="hiring-card industries-card">
            <div className="hiring-content">
              <h2 className="hiring-title">Industries Hiring</h2>
              <p className="hiring-description">
                The current job market is dynamic, with numerous industries actively seeking new talent
              </p>
              <button className="hiring-btn">Industries</button>
            </div>
            <div className="hiring-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Industries" 
                className="hiring-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="container">
          <div className="testimonial-content">
            <div className="quote-icon">66</div>
            <div className="testimonial-main">
              <p className="testimonial-text">
                "Company was impressed by the personal approach of their recruitment team for the improvement. 
                They kept informed at every stage of the task."
              </p>
              <div className="testimonial-author">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                  alt="Franklin Bailey" 
                  className="author-image"
                />
                <div className="author-info">
                  <p className="author-name">Franklin Bailey</p>
                  <p className="author-role">CEO, Riva</p>
                </div>
              </div>
            </div>
            <div className="testimonial-nav">
              <button className="nav-arrow prev-arrow">←</button>
              <button className="nav-arrow next-arrow">→</button>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="subscription-section">
        <div className="container">
          <div className="subscription-content">
            <h3 className="subscription-title">Subscribe for latest update</h3>
            <form className="subscription-form">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="subscription-input"
                required
              />
              <button type="submit" className="subscription-btn">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Solutions

