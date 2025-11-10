import { useState } from 'react'
import { contactFormService } from './ContactFormService'
import './ContactForm.css'

const ContactForm = () => {
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
      const result = await contactFormService.sendMessage(formData)
      
      if (result.success) {
        setSuccess(result.message || 'Thank you for your message! We will get back to you soon.')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setError(result.error || result.message)
      }
    } catch (err) {
      setError(err.message || 'Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="contact-form-section">
      <div className="contact-form-header-container">
        <div className="container">
          <div className="contact-form-header">
            <span className="contact-tag">CONTACT</span>
            <h2 className="contact-form-title">Get in Touch</h2>
            <p className="contact-form-subtitle">Have a question or want to work with us? Send us a message!</p>
          </div>
        </div>
      </div>

      <div className="contact-form-wrapper">
          {error && <div className="form-message error-message">{error}</div>}
          {success && <div className="form-message success-message">{success}</div>}
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name">Name *</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Email *</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  disabled={loading}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject">Subject *</label>
              <input
                type="text"
                id="contact-subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What is this regarding?"
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message *</label>
              <textarea
                id="contact-message"
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
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
    </section>
  )
}

export default ContactForm

