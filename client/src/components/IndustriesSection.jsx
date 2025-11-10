import './IndustriesSection.css'
import AnimatedIcon from './AnimatedIcon'

const IndustriesSection = () => {
  const industries = [
    {
      icon: 'hotel',
      title: 'Hotel',
      staffs: '2853 Staffs'
    },
    {
      icon: 'hospitality',
      title: 'Hospitality',
      staffs: '2256 Staffs'
    },
    {
      icon: 'factory',
      title: 'Kitchen',
      staffs: '1408 Staffs'
    },
    {
      icon: 'retail',
      title: 'Retail',
      staffs: '1740 Staffs'
    },
    {
      icon: 'calendar',
      title: 'Special Events',
      staffs: '3948 Staffs'
    },
    {
      icon: 'worker',
      title: 'General Labor',
      staffs: '2984 Staffs'
    },
    {
      icon: 'truck',
      title: 'Driving',
      staffs: '4509 Staffs'
    },
    {
      icon: 'senior',
      title: 'Senior Living',
      staffs: '1039 Staffs'
    }
  ]

  return (
    <section className="industries-section">
      <div className="container">
        <div className="industries-header">
          <span className="industries-tag">INDUSTRIES</span>
          <h2 className="industries-title">Industries Served</h2>
        </div>
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={index} className="industry-card">
              <div className="industry-icon">
                <AnimatedIcon type={industry.icon} />
              </div>
              <h3 className="industry-card-title">{industry.title}</h3>
              <p className="industry-staffs">{industry.staffs}</p>
            </div>
          ))}
        </div>
        <div className="industries-button-wrapper">
          <button className="view-all-btn">View All Categories</button>
        </div>
      </div>
    </section>
  )
}

export default IndustriesSection

