import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { authAPI } from '../services/api'
import './Navbar.css'

const Navbar = () => {
  const [user, setUser] = useState(null)
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

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="logo-icon">R</div>
          <span className="logo-text">Riva</span>
        </Link>
        <ul className="navbar-menu">
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
          <li><Link to="/solutions" className={`nav-link ${location.pathname === '/solutions' ? 'active' : ''}`}>Solutions</Link></li>
          <li><Link to="/jobs" className={location.pathname === '/jobs' || location.pathname.startsWith('/jobs/') ? 'active' : ''}>Jobs</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
          {user ? (
            <>
              {user.userType === 'admin' && (
                <li><Link to="/admin/dashboard" className="nav-link">Admin</Link></li>
              )}
              <li>
                <span className="nav-user">Welcome, {user.firstName}</span>
              </li>
              <li>
                <button onClick={handleLogout} className="nav-link logout-btn">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li><Link to="/login" className="nav-link">Login</Link></li>
              <li><Link to="/register" className="nav-cta">Book a Free Consultation</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

