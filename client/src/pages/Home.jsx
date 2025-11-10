import { Link } from 'react-router-dom'
import { useState } from 'react'
import StatsSection from '../components/StatsSection'
import IndustriesSection from '../components/IndustriesSection'
import HowItWorks from '../components/HowItWorks'
import LatestNews from '../components/LatestNews'
import ContactForm from '../components/ContactForm'
import AnimatedIcon from '../components/AnimatedIcon'
import './Home.css'

const Home = () => {
  console.log('Home component rendering...')
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    const video = document.querySelector('.video-player')
    if (video) {
      video.play()
      setIsPlaying(true)
    }
  }

  const handleVideoClick = () => {
    const video = document.querySelector('.video-player')
    if (video) {
      if (video.paused) {
        video.play()
        setIsPlaying(true)
      } else {
        video.pause()
        setIsPlaying(false)
      }
    }
  }
  return (
    <div className="home">
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
              Beyond Solutions, We Build Success – 
              Partnering in Your Growth Journey
            </h1>
            <p className="hero-subtitle">
              We unite Technology, Talent, and Opportunities to align your career 
              goals with the perfect job match.
            </p>
            <Link to="/jobs" className="btn-hero-cta">See Us in Action</Link>
          </div>
        </div>
      </section>

      <section className="video-section">
        <div className="container">
          <div className="video-content-grid">
            <div className="video-column">
              <div className="video-frame-wrapper">
                <div className="video-frame-layer"></div>
                <div className="video-container" onClick={handleVideoClick}>
                  <video 
                    className="video-player" 
                    poster="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    controls={isPlaying}
                    preload="metadata"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  >
                    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {!isPlaying && (
                    <div className="video-overlay">
                      <div className="play-button-container">
                        <div className="play-ripple-outer"></div>
                        <div className="play-ripple-inner"></div>
                        <button className="play-button" onClick={handlePlay} aria-label="Play video">
                          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 18L22 42L42 30L22 18Z" fill="#00ff88"/>
                          </svg>
                        </button>
                      </div>
                      <p className="watch-video-text">Watch Video</p>
                    </div>
                  )}
                  <div className="video-badge">RIVA</div>
                </div>
              </div>
            </div>
            <div className="content-column">
              <div className="about-tag">ABOUT US</div>
              <h2 className="video-section-title">
                The Leading Recruitment <span className="highlight-green">Platform</span>
              </h2>
              <p className="video-section-description">
                This staffing platform provides access to a diverse pool of qualified candidates with specialized skills in areas such as recruitment management.
              </p>
              <ul className="video-section-features">
                <li>
                  <svg className="check-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.667 5L7.5 14.167L3.333 10" stroke="#00ff88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>This helps businesses maintain service excellence</span>
                </li>
                <li>
                  <svg className="check-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.667 5L7.5 14.167L3.333 10" stroke="#00ff88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>This scalability allows businesses to adjust staffing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Riva Recruitment?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <AnimatedIcon type="search" />
              </div>
              <h3>Smart Job Matching</h3>
              <p>Our advanced algorithm matches you with jobs that fit your skills and preferences</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <AnimatedIcon type="lightning" />
              </div>
              <h3>Quick Application</h3>
              <p>Apply to multiple jobs with just a few clicks. Save time and focus on what matters</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <AnimatedIcon type="target" />
              </div>
              <h3>Top Companies</h3>
              <p>Access exclusive job postings from leading companies in your industry</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <AnimatedIcon type="chart" />
              </div>
              <h3>Career Insights</h3>
              <p>Get valuable insights about salary ranges, company culture, and growth opportunities</p>
            </div>
          </div>
        </div>
      </section>

      <IndustriesSection />

      <HowItWorks />

      <LatestNews />

      <ContactForm />

      <section className="cta">
        <div className="container">
          <h2>Ready to Start Your Journey?</h2>
          <p>Join thousands of professionals who found their dream job through Riva Recruitment</p>
          <Link to="/register" className="btn btn-cta">Get Started Now</Link>
        </div>
      </section>
    </div>
  )
}

export default Home

