import { useState, useEffect, useRef } from 'react'
import './StatsSection.css'

const StatsSection = () => {
  console.log('StatsSection component rendered')
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const stats = [
    { number: 12, suffix: 'k', label: 'Freelance Workers', isKFormat: true },
    { number: 95, suffix: '%', label: 'Jobs Fulfillment Rate', isKFormat: false },
    { number: 12, suffix: 'k+', label: 'Jobs Filled', isKFormat: true },
    { number: 825, suffix: '+', label: 'Satisfied Businesses', isKFormat: false }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const CountUpNumber = ({ target, suffix, isVisible, isKFormat }) => {
    const [count, setCount] = useState(0)
    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = target / steps
    const stepDuration = duration / steps

    useEffect(() => {
      if (!isVisible) return

      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const nextValue = Math.min(Math.floor(increment * currentStep), target)
        setCount(nextValue)

        if (currentStep >= steps) {
          setCount(target)
          clearInterval(timer)
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }, [isVisible, target, increment, steps, stepDuration])

    return (
      <span>
        {count}{suffix}
      </span>
    )
  }

  const flowingWords = [
    'Manufacturing',
    'Special Events',
    'General Labor',
    'Healthcare',
    'Hospitality',
    'Retail',
    'Logistics',
    'Construction',
    'Technology',
    'Education',
    'Finance',
    'Marketing'
  ]

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="container">
        <div className="stats-cards">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <h3 className="stat-number">
                <CountUpNumber target={stat.number} suffix={stat.suffix} isVisible={isVisible} isKFormat={stat.isKFormat} />
              </h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flowing-banner-container">
        <div className="riva-badge-banner">RIVA</div>
        <div className="flowing-banner">
          <div className="flowing-content">
            {[...flowingWords, ...flowingWords, ...flowingWords].map((word, index) => (
              <span key={index} className="flowing-item">
                <span className="flowing-word">{word}</span>
                <svg className="flowing-star" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0L9.8 5.5L15.5 5.5L10.9 8.9L12.7 14.4L8 11L3.3 14.4L5.1 8.9L0.5 5.5L6.2 5.5L8 0Z" fill="#5AB14C"/>
                </svg>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection

