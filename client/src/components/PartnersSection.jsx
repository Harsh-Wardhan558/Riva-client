import './PartnersSection.css'

const PartnersSection = () => {
  const partners = [
    {
      name: 'The Telegraph',
      text: 'The Telegraph',
      style: 'serif'
    },
    {
      name: 'Warner Bros. Discovery',
      text: 'WARNER BROS. DISCOVERY',
      style: 'sans-serif',
      prefix: 'WB'
    },
    {
      name: 'Net-A-Porter',
      text: 'NET-A-PORTER',
      style: 'sans-serif'
    },
    {
      name: 'BrandStudio',
      text: 'BrandStudio',
      style: 'sans-serif',
      prefix: 'T'
    },
    {
      name: 'Highsnobiety',
      text: 'HIGHSNOBIETY',
      style: 'sans-serif',
      underline: true
    }
  ]

  return (
    <section className="partners-section">
      <div className="container">
        <div className="partners-card">
          {partners.map((partner, index) => (
            <div key={index} className="partner-logo-wrapper">
              {partner.prefix && (
                <span className="partner-prefix">{partner.prefix}</span>
              )}
              <span 
                className={`partner-text partner-${partner.style} ${partner.underline ? 'partner-underline' : ''}`}
              >
                {partner.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersSection

