import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { authAPI } from '../services/api'
import logoImage from '../images/rivascientific-logo-website (1).png'
import './Navbar.css'

const Navbar = () => {
  const [user, setUser] = useState(null)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [dropdownTimeout, setDropdownTimeout] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    const userData = localStorage.getItem('user')
    if (token && userData) {
      try {
        setUser(JSON.parse(userData))
      } catch (e) {
        console.error('Error parsing user data:', e)
      }
    }
  }, [])

  // Handle scroll to make navbar sticky
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop
      setIsScrolled(scrollPosition > 50) // Change to fixed after 50px scroll
    }

    // Check initial scroll position
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = async () => {
    try {
      await authAPI.logout()
    } catch (e) {
      console.error('Logout error:', e)
    }
    localStorage.removeItem('authToken')
    localStorage.removeItem('user')
    setUser(null)
    navigate('/')
  }

  const toggleDropdown = (dropdown) => {
    // Clear any existing timeout
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
      setDropdownTimeout(null)
    }
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const handleMouseEnter = (dropdown) => {
    // Clear any existing timeout
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
      setDropdownTimeout(null)
    }
    setActiveDropdown(dropdown)
  }

  const handleMouseLeave = () => {
    // Add a delay before closing the dropdown
    const timeout = setTimeout(() => {
      setActiveDropdown(null)
    }, 200) // 200ms delay
    setDropdownTimeout(timeout)
  }

  const closeDropdowns = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
      setDropdownTimeout(null)
    }
    setActiveDropdown(null)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    if (!mobileMenuOpen) {
      closeDropdowns()
    }
  }

  const handleMobileDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    closeDropdowns()
  }

  // Services dropdown items
  const servicesDropdownItems = [
    { label: 'All Services', path: '/services' },
    { label: 'Permanent Hiring', path: '/permanent-hiring' },
    { label: 'Contract Hiring', path: '/contract-hiring' },
    { label: 'Executive Hiring', path: '/executive-hiring' }
  ]

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={logoImage} alt="Riva Scientific" className="logo-image" />
        </Link>

        {/* Desktop Menu */}
        <ul className="navbar-menu">
          {/* Home - Single */}
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          </li>

          {/* Services with Dropdown */}
          <li 
            className="nav-item-dropdown"
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>
              Services
              <svg className="dropdown-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            {activeDropdown === 'services' && (
              <ul 
                className="dropdown-menu"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                {servicesDropdownItems.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path} onClick={closeDropdowns}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* AI Solutions - Single */}
          <li>
            <Link to="/ai-solutions" className={location.pathname === '/ai-solutions' ? 'active' : ''}>AI Solutions</Link>
          </li>

          {/* Partnerships - Single */}
          <li>
            <Link to="/partnerships" className={location.pathname === '/partnerships' ? 'active' : ''}>Partnerships</Link>
          </li>

          {/* Career - Single */}
          <li>
            <Link to="/jobs" className={location.pathname === '/jobs' || location.pathname.startsWith('/jobs/') ? 'active' : ''}>Career</Link>
          </li>

          {/* About Us - Single */}
          <li>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link>
          </li>

          {/* Contact Us - Single */}
          <li>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link>
          </li>
        </ul>

        <div className="navbar-actions">
          {/* User Menu or CTA */}
          {user ? (
            <>
              {user.userType === 'admin' && (
                <Link to="/admin/dashboard" className="nav-link">Admin</Link>
              )}
              <span className="nav-user">Welcome, {user.firstName}</span>
              <button onClick={handleLogout} className="nav-link logout-btn">
                Logout
              </button>
            </>
          ) : (
            <Link to="/register" className="nav-cta">Book a Free Consultation</Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Sidebar */}
        <div className={`mobile-sidebar-overlay ${mobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}>
          <aside className={`mobile-sidebar ${mobileMenuOpen ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
            {/* Logo at Top */}
            <div className="mobile-sidebar-header">
              <Link to="/" className="mobile-sidebar-logo" onClick={closeMobileMenu}>
                <img src={logoImage} alt="Riva Scientific" className="logo-image" />
              </Link>
              <button className="mobile-sidebar-close" onClick={closeMobileMenu} aria-label="Close menu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Navigation Items */}
            <nav className="mobile-sidebar-nav">
              <ul className="mobile-nav-list">
                <li>
                  <Link to="/" onClick={closeMobileMenu} className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                </li>

                <li className="mobile-nav-item-dropdown">
                  <button 
                    className={`mobile-nav-link-dropdown ${location.pathname === '/services' ? 'active' : ''}`}
                    onClick={() => handleMobileDropdown('services')}
                  >
                    <span>Services</span>
                    <svg className={`dropdown-chevron ${activeDropdown === 'services' ? 'rotated' : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <ul className={`mobile-dropdown-menu ${activeDropdown === 'services' ? 'active' : ''}`}>
                    {servicesDropdownItems.map((item, index) => (
                      <li key={index}>
                        <Link to={item.path} onClick={closeMobileMenu}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </li>

                <li>
                  <Link to="/ai-solutions" onClick={closeMobileMenu} className={location.pathname === '/ai-solutions' ? 'active' : ''}>AI Solutions</Link>
                </li>

                <li>
                  <Link to="/partnerships" onClick={closeMobileMenu} className={location.pathname === '/partnerships' ? 'active' : ''}>Partnerships</Link>
                </li>

                <li>
                  <Link to="/jobs" onClick={closeMobileMenu} className={location.pathname === '/jobs' || location.pathname.startsWith('/jobs/') ? 'active' : ''}>Career</Link>
                </li>

                <li>
                  <Link to="/about" onClick={closeMobileMenu} className={location.pathname === '/about' ? 'active' : ''}>About Us</Link>
                </li>

                <li>
                  <Link to="/contact" onClick={closeMobileMenu} className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link>
                </li>
              </ul>
            </nav>

            {/* Button at Bottom */}
            <div className="mobile-sidebar-footer">
              {user ? (
                <>
                  {user.userType === 'admin' && (
                    <Link to="/admin/dashboard" onClick={closeMobileMenu} className="mobile-nav-link">Admin</Link>
                  )}
                  <span className="mobile-nav-user">Welcome, {user.firstName}</span>
                  <button onClick={() => { handleLogout(); closeMobileMenu(); }} className="mobile-nav-link mobile-logout-btn">
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/register" onClick={closeMobileMenu} className="mobile-sidebar-cta">Book a Free Consultation</Link>
              )}
            </div>
          </aside>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
