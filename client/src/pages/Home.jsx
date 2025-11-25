import { Link } from 'react-router-dom'
import { useState } from 'react'
import StatsSection from '../components/StatsSection'
import IndustriesSection from '../components/IndustriesSection'
import HowItWorks from '../components/HowItWorks'
import LatestNews from '../components/LatestNews'
import PartnersSection from '../components/PartnersSection'
import AnimatedIcon from '../components/AnimatedIcon'
import './Home.css'

const Home = () => {
  console.log('Home component rendering...')
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    const video = document.querySelector('.video-player')
    if (video) {
      video.play().then(() => {
        setIsPlaying(true)
      }).catch((error) => {
        console.error('Error playing video:', error)
      })
    }
  }

  const handleVideoClick = (e) => {
    const video = document.querySelector('.video-player')
    const overlay = e.currentTarget.querySelector('.video-overlay')
    
    // Don't toggle if clicking on the play button
    if (e.target.closest('.play-button')) {
      return
    }
    
    if (video && overlay) {
      if (video.paused) {
        video.play().then(() => {
          setIsPlaying(true)
        }).catch((error) => {
          console.error('Error playing video:', error)
        })
      }
    }
  }
  const profileCards = [
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      role: 'Engineer',
      bgColor: '#FFD700',
      tagColor: '#90EE90',
      position: 'top-left',
      size: 'medium'
    },
    {
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      role: 'Healthcare',
      bgColor: '#FFB6C1',
      tagColor: '#FFD700',
      position: 'top-right',
      size: 'medium'
    },
    {
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      role: 'Finance',
      bgColor: '#87CEEB',
      tagColor: '#87CEEB',
      position: 'mid-left',
      size: 'small'
    },
    {
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      role: 'Technology',
      bgColor: '#FFA500',
      tagColor: '#FFA500',
      position: 'mid-right',
      size: 'small'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      role: 'Management',
      bgColor: '#D2B48C',
      tagColor: '#FFFFFF',
      position: 'bottom-left',
      size: 'small'
    },
    {
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      role: 'Education',
      bgColor: '#DDA0DD',
      tagColor: '#DDA0DD',
      position: 'bottom-right',
      size: 'medium'
    }
  ]

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-background" style={{ backgroundImage: "url('/Section (2).png')" }}></div>
        <div className="hero-overlay"></div>
        <div className="hero-container">
          {/* Profile Cards positioned around */}
          {profileCards.map((card, index) => (
            <div key={index} className={`hero-profile-card hero-profile-${card.position} hero-profile-${card.size}`}>
              <div className="hero-profile-image-wrapper" style={{ backgroundColor: card.bgColor }}>
                <img src={card.image} alt={card.role} className="hero-profile-image" />
              </div>
              <div 
                className="hero-profile-role-tag" 
                style={{ 
                  backgroundColor: card.tagColor,
                  color: card.tagColor === '#FFFFFF' || card.tagColor === '#ffffff' ? '#1a3d2e' : '#1a3d2e'
                }}
              >
                {card.role}
              </div>
            </div>
          ))}
          
          <div className="hero-content">
            <h1 className="hero-title">
              Beyond Solutions, We Build Success – 
              Partnering in Your Growth Journey
            </h1>
            <p className="hero-subtitle">
              We unite Technology, Talent, and Opportunities to align your career 
              goals with the perfect job match.
            </p>
            <div className="hero-buttons">
              <Link to="/jobs" className="btn-hero-primary">
                Find Works
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link to="/register" className="btn-hero-secondary">Hire Talents Now</Link>
            </div>
          </div>
        </div>
      </section>

      <PartnersSection />

      <section className="video-section">
        <div className="container">
          <div className="video-content-grid">
            <div className="video-column">
              <div className="video-frame-wrapper">
                <div className="video-background-image video-background-image-1"></div>
                <div className="video-background-image video-background-image-2"></div>
                <div className="video-frame-layer"></div>
                <div className="video-frame-layer-2"></div>
                <div className="video-container" onClick={handleVideoClick}>
                  <video 
                    className="video-player" 
                    poster="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    controls={isPlaying}
                    controlsList="nodownload"
                    preload="metadata"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    playsInline
                  >
                    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {!isPlaying && (
                    <div className="video-overlay">
                      <div className="play-button-container">
                        <div className="play-ripple-outer"></div>
                        <div className="play-ripple-inner"></div>
                        <button className="play-button" onClick={(e) => { e.stopPropagation(); handlePlay(); }} aria-label="Play video">
                          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="40" cy="40" r="35" fill="none" stroke="white" strokeWidth="2" strokeDasharray="5,5"/>
                            <path d="M32 28L32 52L52 40L32 28Z" fill="#00ff88"/>
                          </svg>
                        </button>
                      </div>
                      <p className="watch-video-text">Watch Video</p>
                    </div>
                  )}
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
                  <div className="check-icon">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.667 3.5L5.25 9.917L2.333 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>This helps businesses maintain service excellence</span>
                </li>
                <li>
                  <div className="check-icon">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.667 3.5L5.25 9.917L2.333 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
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
          <h2 className="section-title">Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/partners/review.png" alt="Review" className="feature-icon-image" />
              </div>
              <h3>Retain Top Talent</h3>
              <p>Providing clear career paths and growth opportunities is key to retaining top talent.</p>
              <a href="#" className="learn-more-link">Learn More →</a>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4L8 10V22C8 30 12 37.2 18 41.6C20 43.2 22 44 24 44C26 44 28 43.2 30 41.6C36 37.2 40 30 40 22V10L24 4Z" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M18 24L22 28L30 20" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
              <h3>Stay Compliant</h3>
              <p>Educate employees about compliance requirements through regular training</p>
              <a href="#" className="learn-more-link">Learn More →</a>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/partners/growth.png" alt="Growth" className="feature-icon-image" />
              </div>
              <h3>Improve Employee</h3>
              <p>Invest in employee training development programs enhance skill and knowledge.</p>
              <a href="#" className="learn-more-link">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      <IndustriesSection />

      <HowItWorks />

      <LatestNews />

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

