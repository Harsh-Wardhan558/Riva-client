import './StatsSection.css'

const StatsSection = () => {
  console.log('StatsSection component rendered')
  const stats = [
    { number: '12k', label: 'Freelance Workers' },
    { number: '95%', label: 'Jobs Fulfillment Rate' },
    { number: '12k+', label: 'Jobs Filled' },
    { number: '825+', label: 'Satisfied Businesses' }
  ]

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
    <section className="stats-section">
      <div className="container">
        <div className="stats-cards">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <h3 className="stat-number">{stat.number}</h3>
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
                  <path d="M8 0L9.8 5.5L15.5 5.5L10.9 8.9L12.7 14.4L8 11L3.3 14.4L5.1 8.9L0.5 5.5L6.2 5.5L8 0Z" fill="#00ff88"/>
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

