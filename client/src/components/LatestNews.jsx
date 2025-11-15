import './LatestNews.css'

const LatestNews = () => {
  const newsArticles = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'March 20, 2023',
      title: 'Create a series of blog posts discussing common interview'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'March 19, 2023',
      title: 'Explore the concept of personal branding and its impact on'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'March 18, 2023',
      title: 'Feature interviews with employees from top companies'
    }
  ]

  return (
    <section className="latest-news-section">
      <div className="container">
        <div className="news-header">
          <span className="media-tag">MEDIA</span>
          <h2 className="news-title">Latest News</h2>
        </div>

        <div className="news-grid">
          {newsArticles.map((article) => (
            <article key={article.id} className="news-card">
              <div className="news-image-wrapper">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="news-image"
                />
                <div className="news-overlay"></div>
                <div className="news-content">
                  <span className="news-date">{article.date}</span>
                  <h3 className="news-card-title">{article.title}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestNews

