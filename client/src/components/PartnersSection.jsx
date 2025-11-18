import './PartnersSection.css'

const PartnersSection = () => {
  const partners = [
    {
      name: 'The Telegraph',
      image: '/partners/the-telegraph.png',
      alt: 'The Telegraph'
    },
    {
      name: 'Warner Bros. Discovery',
      image: '/partners/warner-bros-discovery.png',
      alt: 'Warner Bros. Discovery'
    },
    {
      name: 'Net-A-Porter',
      image: '/partners/net-a-porter.png',
      alt: 'Net-A-Porter'
    },
    {
      name: 'BrandStudio',
      image: '/partners/brandstudio.png',
      alt: 'BrandStudio'
    },
    {
      name: 'Highsnobiety',
      image: '/partners/highsnobiety.png',
      alt: 'Highsnobiety'
    }
  ]

  return (
    <section className="partners-section">
      <div className="container">
        <div className="partners-card">
          {partners.map((partner, index) => (
            <div key={index} className="partner-logo-wrapper">
              <img 
                src={partner.image} 
                alt={partner.alt}
                className="partner-logo-image"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  e.target.style.display = 'none'
                  const fallback = document.createElement('span')
                  fallback.className = 'partner-text partner-sans-serif'
                  fallback.textContent = partner.name
                  e.target.parentNode.appendChild(fallback)
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersSection

