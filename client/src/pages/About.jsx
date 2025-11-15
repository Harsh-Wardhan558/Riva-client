import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import AnimatedIcon from '../components/AnimatedIcon'
import frameImage from '../images/Frame 1.png'
import './About.css'

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [floatOffset, setFloatOffset] = useState(0)
  const imageRef = useRef(null)
  const wrapperRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (wrapperRef.current) {
        const rect = wrapperRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const x = (e.clientX - centerX) / rect.width
        const y = (e.clientY - centerY) / rect.height
        setMousePosition({ x, y })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    let animationFrame
    let startTime = Date.now()

    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000
      const offset = Math.sin(elapsed * 2) * 20 // Floating up and down
      setFloatOffset(offset)
      animationFrame = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(animationFrame)
  }, [])
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
      {/* Hero Section - About Us Design */}
      <section className="about-hero-section">
        <div className="container">
          <div className="about-hero-grid">
            {/* Left Side - Image */}
            <div className="about-hero-left">
              <div 
                className="about-hero-image-wrapper"
                ref={wrapperRef}
              >
                <img 
                  ref={imageRef}
                  src={frameImage} 
                  alt="About us" 
                  className="about-hero-image"
                  style={{
                    transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20 + floatOffset}px)`
                  }}
                />
              </div>
            </div>

            {/* Right Side - Text and Features */}
            <div className="about-hero-right">
              <span className="about-hero-tag">ABOUT US</span>
              <h1 className="about-hero-title">
                The most loved <span className="about-hero-title-highlight">Agency</span>
              </h1>
              <p className="about-hero-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              {/* Feature Cards Grid */}
              <div className="about-hero-features">
                <div className="about-hero-feature-card">
                  <div className="about-hero-feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Person with star badge */}
                      <circle cx="12" cy="8" r="3" stroke="white" strokeWidth="1.5" fill="none"/>
                      <path d="M6 18v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M12 6l1 2 2 0.5-1.5 1.5 0.5 2-2-1.5-2 1.5 0.5-2-1.5-1.5 2-0.5z" fill="white"/>
                    </svg>
                  </div>
                  <div className="about-hero-feature-text">
                    <div className="about-hero-feature-title">Easiest Admin</div>
                    <div className="about-hero-feature-date">Fall 2023</div>
                  </div>
                </div>
                
                <div className="about-hero-feature-card">
                  <div className="about-hero-feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Thumbs up */}
                      <path d="M7 10v11M7 10l-4-1v6l4-1M7 10l5-1v6l-5-1M17 7v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="white"/>
                    </svg>
                  </div>
                  <div className="about-hero-feature-text">
                    <div className="about-hero-feature-title">Users love Us</div>
                    <div className="about-hero-feature-date">Winter 2023</div>
                  </div>
                </div>
                
                <div className="about-hero-feature-card">
                  <div className="about-hero-feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Hand holding gear */}
                      <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                      <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5" fill="none"/>
                      <path d="M8 10l-2-1v2l2-1M16 10l2-1v2l-2-1" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="about-hero-feature-text">
                    <div className="about-hero-feature-title">Leader</div>
                    <div className="about-hero-feature-date">Winter 2023</div>
                  </div>
                </div>
                
                <div className="about-hero-feature-card">
                  <div className="about-hero-feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Person at desk with speech bubble */}
                      <circle cx="12" cy="8" r="2.5" stroke="white" strokeWidth="1.5" fill="none"/>
                      <path d="M7 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                      <rect x="6" y="14" width="12" height="2" rx="1" fill="white"/>
                      <path d="M14 10h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2l-2 2v-2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  </div>
                  <div className="about-hero-feature-text">
                    <div className="about-hero-feature-title">Best support</div>
                    <div className="about-hero-feature-date">Winter 2023</div>
                  </div>
                </div>
              </div>
            </div>
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
