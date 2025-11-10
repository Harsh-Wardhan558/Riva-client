import { Link } from 'react-router-dom'
import AnimatedIcon from '../components/AnimatedIcon'
import './About.css'

const About = () => {
  const missionVisionValues = [
    {
      tag: 'OUR MISSION',
      title: 'A great recruitment is all about great dedication',
      description: 'We are committed to connecting talented professionals with exceptional opportunities through innovative technology and personalized service. Our mission drives everything we do.'
    },
    {
      tag: 'OUR VISION',
      title: 'The most creative recruitment experience of the century',
      description: 'We envision a future where finding the perfect job match is seamless, intuitive, and empowering. We strive to revolutionize the recruitment industry.'
    },
    {
      tag: 'OUR VALUE',
      title: 'Constant learning The secret of successful placement',
      description: 'We believe in continuous improvement, transparency, and building lasting relationships. Our values guide us in every interaction and decision we make.'
    }
  ]

  const teamMembers = [
    {
      name: 'Marco Guerra',
      role: 'DESIGNER / WEB DEVELOPER',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Stacey Pickering',
      role: 'DESIGNER / PROJECT MANAGER',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Andrew McGregor',
      role: 'CO-FOUNDER / DESIGNER',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Jena Lambert',
      role: 'SALES & MARKETING MANAGER',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ]

  return (
    <div className="about-page">
      {/* Hero Section - Same as Home Page */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-rating">
              <span className="rating-number">4.9</span>
              <span className="rating-star">★</span>
              <span className="rating-text">on Trustpilot</span>
            </div>
            <h1 className="hero-title">
              About Riva Recruitment
            </h1>
            <p className="hero-subtitle">
              Connecting talented professionals with exceptional opportunities. 
              Learn more about our mission, vision, and the team behind Riva.
            </p>
            <Link to="/jobs" className="btn-hero-cta">Explore Our Jobs</Link>
          </div>
        </div>
      </section>

      {/* Our Main Goal Section - Two Column Layout */}
      <section className="about-main-goal-section">
        <div className="container">
          <div className="about-two-column-grid">
            <div className="about-text-column">
              <span className="about-tag">FEW WORDS ABOUT US</span>
              <h2 className="about-section-title">Our Main Goal Is Excellence</h2>
              <p className="about-section-subtitle">Know our services, company culture, the team members.</p>
              <div className="about-description">
                <p>
                  At Riva Recruitment, we believe that finding the right job should be a seamless and empowering experience. 
                  Our platform combines cutting-edge technology with personalized service to connect talented professionals 
                  with exceptional opportunities.
                </p>
                <p>
                  We understand that every career journey is unique, which is why we've built a comprehensive platform 
                  that adapts to your needs. Whether you're just starting out or looking to make your next career move, 
                  we're here to support you every step of the way.
                </p>
              </div>
              <Link to="/jobs" className="about-cta-btn">VIEW JOBS</Link>
            </div>
            <div className="about-image-column">
              <div className="about-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Team working together" 
                  className="about-main-image"
                />
                <div className="about-image-pattern"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Value Section - Three Cards */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="mission-vision-grid">
            {missionVisionValues.map((item, index) => (
              <div key={index} className="mission-vision-card">
                <span className="mission-vision-tag">{item.tag}</span>
                <h3 className="mission-vision-title">{item.title}</h3>
                <p className="mission-vision-description">{item.description}</p>
                <div className="mission-vision-pattern"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Imagine A New World Section - Reversed Two Column */}
      <section className="imagine-section">
        <div className="container">
          <div className="about-two-column-grid reverse">
            <div className="about-image-column">
              <div className="about-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Future of recruitment" 
                  className="about-main-image"
                />
              </div>
            </div>
            <div className="about-text-column">
              <span className="about-tag">FUTURE OF RECRUITMENT</span>
              <h2 className="about-section-title">Imagine A New World</h2>
              <p className="about-section-subtitle">Know our services, company culture, the team members.</p>
              <div className="about-description">
                <p>
                  The recruitment industry is evolving rapidly, and we're at the forefront of this transformation. 
                  Our innovative platform leverages artificial intelligence and machine learning to create smarter, 
                  more efficient job matching experiences.
                </p>
                <p>
                  We're building a future where job seekers and employers connect seamlessly, where career growth 
                  is accessible to everyone, and where technology serves humanity in meaningful ways. Join us 
                  in shaping the future of work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width Banner Section */}
      <section className="about-banner-section">
        <div className="about-banner-background"></div>
        <div className="container">
          <div className="about-banner-content">
            <h2 className="about-banner-text">
              Objectively Innovate Empowered Manufactured Products Whereas Parallel Platforms.
            </h2>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Reuse Features from Home */}
      <section className="features about-features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <AnimatedIcon type="target" />
              </div>
              <h3>Exclusive Design</h3>
              <p>Our platform features a unique, user-friendly design that makes job searching intuitive and enjoyable</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <AnimatedIcon type="chart" />
              </div>
              <h3>Bug Free Experience</h3>
              <p>We ensure a seamless, error-free experience with rigorous testing and continuous monitoring</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <AnimatedIcon type="lightning" />
              </div>
              <h3>Easy To Customize</h3>
              <p>Personalize your profile and preferences to get job recommendations tailored to your needs</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <AnimatedIcon type="search" />
              </div>
              <h3>Digital Marketing</h3>
              <p>We help you showcase your skills and connect with top employers through our advanced platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="team-header">
            <h2 className="team-title">Our Team</h2>
            <p className="team-subtitle">
              We Work With Organisations To Craft Immersive Customer Experiences.
            </p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member-card">
                <div className="team-member-image-wrapper">
                  <img src={member.image} alt={member.name} className="team-member-image" />
                </div>
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
