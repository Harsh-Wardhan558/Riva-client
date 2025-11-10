import { useState } from 'react'
import { contactAPI } from '../services/api'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
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
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setError(err.message || 'Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p>Feel free to reach out to us through any of these channels:</p>
              
              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">📧</div>
                  <div>
                    <h3>Email</h3>
                    <p>info@rivarecruitment.com</p>
                    <p>support@rivarecruitment.com</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div>
                    <h3>Phone</h3>
                    <p>+1 (555) 123-4567</p>
                    <p>Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div>
                    <h3>Address</h3>
                    <p>123 Recruitment Street</p>
                    <p>San Francisco, CA 94102</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="#" className="social-icon">LinkedIn</a>
                  <a href="#" className="social-icon">Twitter</a>
                  <a href="#" className="social-icon">Facebook</a>
                  <a href="#" className="social-icon">Instagram</a>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <h2>Send us a Message</h2>
              {error && <div className="error-message">{error}</div>}
              {success && <div className="success-message">{success}</div>}
              <form className="contact-form" onSubmit={handleSubmit}>
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
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
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
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this regarding?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us more about your inquiry..."
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
    </div>
  )
}

export default Contact

