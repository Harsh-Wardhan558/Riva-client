import { useState } from 'react'
import { Link } from 'react-router-dom'
import { contactAPI } from '../services/api'
import SubscribeSection from '../components/SubscribeSection'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setError('')
    setSuccess('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    try {
      await contactAPI.sendMessage(formData)
      setSuccess('Thank you for your message! We will get back to you soon.')
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' })
    } catch (err) {
      setError(err.message || 'Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="contact-page">
      <div className="contact-header">
        <div className="container">
          <h1 className="contact-title">Contact</h1>
          <div className="breadcrumbs">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-separator">-</span>
            <span>Contact</span>
          </div>
        </div>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info-panel">
              <h2>Contact Information</h2>
              
              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon-wrapper">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="white"/>
                    </svg>
                  </div>
                  <div className="info-content">
                    <h3>Main Warehouse</h3>
                    <p>10445 Brisbane Cir.</p>
                    <p>Shiloh, Australia 81063</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon-wrapper">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="white"/>
                    </svg>
                  </div>
                  <div className="info-content">
                    <h3>Email Address</h3>
                    <p>info@example.com</p>
                    <p>info@example.com</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon-wrapper">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="white"/>
                    </svg>
                  </div>
                  <div className="info-content">
                    <h3>Phone Number</h3>
                    <p>+(208)-544-0141</p>
                    <p>+(208)-544-0142</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-panel">
              {error && <div className="form-message error-message">{error}</div>}
              {success && <div className="form-message success-message">{success}</div>}
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      disabled={loading}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Your phone number"
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    disabled={loading}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this regarding?"
                    disabled={loading}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Write Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us more about your inquiry..."
                    disabled={loading}
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="map-section">
        <div className="container">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509371!2d144.9630579!3d-37.8136276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0x6896048ad4410ff!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Riva Recruitment Location"
            ></iframe>
          </div>
        </div>
      </div>

      <SubscribeSection />
    </div>
  )
}

export default Contact

