import { useState } from 'react'
import './HowItWorks.css'
import AnimatedIcon from './AnimatedIcon'

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState('talents')

  const talentsSteps = [
    {
      number: 1,
      title: 'Sign up, It\'s Free!',
      description: 'Our team will set up your account and help you build job to easy-to-use web dashboard.'
    },
    {
      number: 2,
      title: 'Post jobs in minutes',
      description: 'Create and post anywhere from 1-100 job openings with just a few clicks. customize your own.'
    },
    {
      number: 3,
      title: 'Review Your Staff',
      description: 'View bios, reviews, and rosters before workers arrive on the job, and post reviews and pay, effortlessly.'
    }
  ]

  const businessSteps = [
    {
      number: 1,
      title: 'Create Your Profile',
      description: 'Sign up and create your professional profile. Showcase your skills, experience, and qualifications.'
    },
    {
      number: 2,
      title: 'Browse & Apply',
      description: 'Browse through thousands of job opportunities and apply to positions that match your expertise.'
    },
    {
      number: 3,
      title: 'Get Hired',
      description: 'Connect with employers, attend interviews, and land your dream job with our support.'
    }
  ]

  const steps = activeTab === 'talents' ? talentsSteps : businessSteps

  return (
    <section className="how-it-works-section">
      <div className="container">
        <div className="how-it-works-header">
          <span className="process-tag">PROCESS</span>
          <h2 className="how-it-works-title">How It Works?</h2>
        </div>

        <div className="tabs-container">
          <button
            className={`tab-button ${activeTab === 'talents' ? 'active' : ''}`}
            onClick={() => setActiveTab('talents')}
          >
            <span className="tab-icon">
              <AnimatedIcon type="user" />
            </span>
            For Talents
          </button>
          <button
            className={`tab-button ${activeTab === 'business' ? 'active' : ''}`}
            onClick={() => setActiveTab('business')}
          >
            <span className="tab-icon">
              <AnimatedIcon type="briefcase" />
            </span>
            For Business
          </button>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number-circle">
                <span className="step-number">{step.number}</span>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

