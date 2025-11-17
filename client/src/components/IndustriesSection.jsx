import './IndustriesSection.css'

const IndustriesSection = () => {
  const industries = [
    // Row 1
    {
      icon: '/Vector.png',
      title: 'Hotel',
      staffs: '2853 Staffs'
    },
    {
      icon: '/hospitality.png',
      title: 'Hospitality',
      staffs: '2256 Staffs'
    },
    {
      icon: '/kitchen.png',
      title: 'Kitchen',
      staffs: '1408 Staffs'
    },
    {
      icon: '/retail.png',
      title: 'Retail',
      staffs: '1740 Staffs'
    },
    // Row 2
    {
      icon: '/specialevents.png',
      title: 'Special Events',
      staffs: '3948 Staffs'
    },
    {
      icon: '/generallabour.png',
      title: 'General Labor',
      staffs: '2984 Staffs'
    },
    {
      icon: '/driving.png',
      title: 'Driving',
      staffs: '4509 Staffs'
    },
    {
      icon: '/seniorliving.png',
      title: 'Senior Living',
      staffs: '1039 Staffs'
    }
  ]

  return (
    <section className="industries-section">
      <div className="container">
        <div className="industries-header">
          <span className="industries-tag">8 Industries</span>
          <h2 className="industries-title">Industries Served</h2>
        </div>
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={index} className="industry-card">
              <div className="industry-icon">
                <img src={encodeURI(industry.icon)} alt={industry.title} />
              </div>
              <h3 className="industry-card-title">{industry.title}</h3>
              <p className="industry-staffs">{industry.staffs}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IndustriesSection

