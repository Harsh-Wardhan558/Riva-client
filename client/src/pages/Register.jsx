import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authAPI } from '../services/api'
import SubscribeSection from '../components/SubscribeSection'
import './Register.css'

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'jobseeker'
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!')
      return
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long')
      return
    }

    setLoading(true)

    try {
      const { confirmPassword, ...registerData } = formData
      const response = await authAPI.register(registerData)
      localStorage.setItem('authToken', response.token)
      localStorage.setItem('user', JSON.stringify(response.user))
      navigate('/jobs')
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="register-page">
      <div className="register-header">
        <div className="container">
          <h1 className="register-title">Create Account</h1>
          <div className="breadcrumbs">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-separator">-</span>
            <span>Create Account</span>
          </div>
        </div>
      </div>

      <div className="register-content">
        <div className="container">
          <div className="register-card">
            <div className="register-card-header">
              <h2>Join Riva Recruitment</h2>
              <p>Start your journey with us today</p>
            </div>

          {error && <div className="error-message">{error}</div>}

          <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="John"
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="userType">I am a</label>
              <select
                id="userType"
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                className="select-input"
              >
                <option value="jobseeker">Job Seeker</option>
                <option value="employer">Employer</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Create a strong password"
                minLength="8"
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="Confirm your password"
                minLength="8"
              />
            </div>

            <div className="form-group checkbox-group">
              <label className="terms-label">
                <input type="checkbox" required />
                <span>I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></span>
              </label>
            </div>

            <button type="submit" className="register-btn" disabled={loading}>
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <div className="register-footer">
            <p>
              Already have an account?{' '}
              <Link to="/login" className="login-link">
                Sign in here
              </Link>
            </p>
          </div>

          <div className="social-register">
            <div className="divider">
              <span>Or sign up with</span>
            </div>
            <div className="social-buttons">
              <button type="button" className="social-btn google-btn">Google</button>
              <button type="button" className="social-btn linkedin-btn">LinkedIn</button>
            </div>
          </div>
          </div>
        </div>
      </div>

      <SubscribeSection />
    </div>
  )
}

export default Register

