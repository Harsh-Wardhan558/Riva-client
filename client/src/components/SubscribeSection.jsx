import { useState } from 'react'
import './SubscribeSection.css'

const SubscribeSection = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section className="subscribe-section">
      <div className="subscribe-container">
        <div className="subscribe-content">
          <div className="subscribe-text">
            <span className="subscribe-text-white">Subscribe for</span>
            <span className="subscribe-text-green">latest update</span>
          </div>
          <form className="subscribe-form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="subscribe-email-input"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="subscribe-btn">
              SUBSCRIBE
            </button>
          </form>
          {submitted && (
            <div className="subscribe-success">
              Thank you for subscribing!
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default SubscribeSection
