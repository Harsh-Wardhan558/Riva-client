import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import logoImage from '../images/rivascientific-logo-website (1).png'
import './Footer.css'

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 - Company Information */}
        <div className="footer-section footer-company">
          <div className="footer-logo">
            <img src={logoImage} alt="Riva Scientific" className="footer-logo-image" />
          </div>
          <p className="footer-description">
            Since 2018, Riva has been connecting hospitality workers to thousands of businesses, private events and universities.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/ai-solutions">AI Solutions</Link></li>
            <li><Link to="/partnerships">Partnerships</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/jobs">Jobs</Link></li>
          </ul>
        </div>

        {/* Column 3 - Services */}
        <div className="footer-section">
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-links">
            <li><Link to="/services">Permanent Staffing</Link></li>
            <li><Link to="/services">Contract & Temporary</Link></li>
            <li><Link to="/services">Executive Search</Link></li>
            <li><Link to="/ai-solutions">AI Solutions</Link></li>
            <li><Link to="/partnerships">Partnerships</Link></li>
          </ul>
        </div>

        {/* Column 4 - Company */}
        <div className="footer-section">
          <h4 className="footer-heading">Company</h4>
          <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/jobs">Career Opportunities</Link></li>
            <li><Link to="/contact">Get in Touch</Link></li>
          </ul>
        </div>

        {/* Column 5 - Resources */}
        <div className="footer-section">
          <h4 className="footer-heading">Resources</h4>
          <ul className="footer-links">
            <li><Link to="/blog">Blog & Insights</Link></li>
            <li><Link to="/jobs">Job Listings</Link></li>
            <li><Link to="/services">Our Solutions</Link></li>
            <li><Link to="/contact">Support</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="footer-copyright">
            Copyright © 2025 <span className="footer-brand">Riva</span> All rights reserved.
          </p>
          <div className="footer-social">
            <span className="footer-social-text">Follow Us On:</span>
            <div className="footer-social-icons">
              <a href="#" className="footer-social-icon" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" fill="white"/>
                </svg>
              </a>
              <a href="#" className="footer-social-icon" aria-label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.88 4.53C19.2942 3.83751 18.5307 3.34669 17.689 3.12393C16.8472 2.90116 15.9641 2.95791 15.157 3.28651C14.3499 3.6151 13.6587 4.20046 13.175 4.97C12.6913 5.73954 12.4379 6.65702 12.45 7.59V8.59C10.6813 8.62359 8.92763 8.23678 7.312 7.46C5.69637 6.68322 4.25807 5.54461 3.1 4.13C3.1 4.13 -0.9 12.13 8.1 16.13C6.186 17.4902 3.9 18.13 1.5 18.13C10.5 23.13 21.5 18.13 21.5 7.5C21.4993 7.30048 21.4773 7.10162 21.435 6.91C22.4256 6.09337 23.1533 4.97671 23.5 3.73L23 3Z" fill="white"/>
                </svg>
              </a>
              <a href="#" className="footer-social-icon" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.367C3.274 4.224 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.224 7.401 5.367C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" fill="white"/>
                </svg>
              </a>
              <a href="#" className="footer-social-icon" aria-label="Dribbble">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.5 4.5C18.3 5.3 18.9 6.3 19.2 7.4C18.1 7.1 16.9 6.9 15.6 6.8C14.8 5.4 13.9 4.2 12.9 3.1C14.1 2.4 15.5 2 17 2C17.2 2.8 17.4 3.6 17.5 4.5ZM12 4C13.1 5.1 14.1 6.3 15 7.6C13.5 7.7 12 7.9 10.6 8.2C9.5 6.5 8.3 4.9 7.1 3.4C8.4 3.6 9.7 3.8 11 4H12ZM6.5 4.5C7.6 6 8.8 7.5 10 8.9C8.5 9.2 7 9.5 5.5 9.8C5.1 8.5 4.8 7.1 4.5 5.7C5.1 5.1 5.7 4.7 6.5 4.5ZM4.5 7.5C6 7.2 7.5 6.9 9 6.6C10.2 8.1 11.4 9.5 12.6 10.9C10.8 11.2 9 11.5 7.2 11.8C6.5 10.5 5.5 9.1 4.5 7.5ZM7.2 13C9 12.7 10.8 12.4 12.6 12.1C11.4 13.5 10.2 14.9 9 16.2C7.5 15.9 6 15.5 4.5 15C5.5 13.4 6.3 12.1 7.2 13ZM9.5 17.2C10.7 15.8 11.9 14.4 13.1 13C14.5 12.7 15.9 12.4 17.3 12.1C16.8 13.4 16.1 14.6 15.2 15.6C13.8 16.8 12.2 17.6 10.5 18C10.1 17.7 9.8 17.5 9.5 17.2ZM17 20C15.5 20 14.1 19.6 12.9 18.9C14 17.5 15 16 15.9 14.5C17.3 14.8 18.6 15.2 19.8 15.7C19.2 17.1 18.2 18.5 17 20Z" fill="white"/>
                </svg>
              </a>
            </div>
          </div>
          {showScrollTop && (
            <button className="footer-scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 19V5M5 12L12 5L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer
