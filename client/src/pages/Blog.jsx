import { useState } from 'react'
import { Link } from 'react-router-dom'
import blogData, { categories, popularTags } from '../data/blogData'
import './Blog.css'

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)

  // Filter blogs based on search and category
  const filteredBlogs = blogData.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !selectedCategory || blog.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Get latest posts (most recent 3)
  const latestPosts = [...blogData].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3)

  // Get archives (group by month/year)
  const archives = [...new Set(blogData.map(blog => {
    const date = new Date(blog.date)
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  }))]

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero-section">
        <div className="container">
          <div className="blog-hero-content">
            <span className="blog-hero-label">Insights</span>
            <h1 className="blog-hero-title">Our blog</h1>
            <p className="blog-hero-description">
              Stay updated with the latest trends, insights, and expert advice on talent acquisition, recruitment strategies, and industry best practices.
            </p>
            <div className="blog-hero-buttons">
              <Link to="/contact" className="blog-btn-connect">
                Connect
              </Link>
              <Link to="/about" className="blog-btn-learn">
                <span>Learn more</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="blog-content-section">
        <div className="container">
          <div className="blog-layout">
            {/* Left Sidebar */}
            <aside className="blog-sidebar">
              {/* Search Bar */}
              <div className="sidebar-widget">
                <div className="search-box">
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                  />
                  <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Categories */}
              <div className="sidebar-widget">
                <h3 className="widget-title">Categories</h3>
                <ul className="categories-list">
                  <li>
                    <button
                      className={`category-link ${selectedCategory === null ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(null)}
                    >
                      All
                    </button>
                  </li>
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button
                        className={`category-link ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Latest Posts */}
              <div className="sidebar-widget">
                <h3 className="widget-title">Latest Posts</h3>
                <div className="latest-posts-list">
                  {latestPosts.map((post) => (
                    <Link key={post.id} to={`/blog/${post.id}`} className="latest-post-item">
                      <div className="latest-post-image">
                        <img src={post.featuredImage} alt={post.title} />
                      </div>
                      <div className="latest-post-content">
                        <p className="latest-post-text">{post.excerpt}</p>
                        <span className="latest-post-date">{post.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="sidebar-widget">
                <h3 className="widget-title">Popular tag</h3>
                <div className="tags-list">
                  {popularTags.map((tag, index) => (
                    <button key={index} className="tag-button">
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Archives */}
              <div className="sidebar-widget">
                <h3 className="widget-title">Archives</h3>
                <ul className="archives-list">
                  {archives.map((archive, index) => (
                    <li key={index}>
                      <button className="archive-link">{archive}</button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="blog-main-content">
              <div className="blog-grid">
                {filteredBlogs.map((blog) => (
                  <article key={blog.id} className="blog-card">
                    <Link to={`/blog/${blog.id}`} className="blog-card-link">
                      <div className="blog-card-image-wrapper">
                        <img src={blog.featuredImage} alt={blog.title} className="blog-card-image" />
                        <span className="blog-card-category">{blog.category}</span>
                      </div>
                      <div className="blog-card-content">
                        <h2 className="blog-card-title">{blog.title}</h2>
                        <div className="blog-card-meta">
                          <span>By {blog.author}</span>
                          <span className="meta-separator">|</span>
                          <span>{blog.date}</span>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
