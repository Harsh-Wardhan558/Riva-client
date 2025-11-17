import { useParams, Link } from 'react-router-dom'
import blogData from '../data/blogData'
import './BlogDetail.css'

const BlogDetail = () => {
  const { id } = useParams()
  const blog = blogData.find(b => b.id === parseInt(id))

  if (!blog) {
    return (
      <div className="blog-detail-page">
        <div className="container">
          <div className="blog-not-found">
            <h1>Blog Post Not Found</h1>
            <Link to="/blog" className="back-to-blog">Back to Blog</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="blog-detail-page">
      <div className="container">
        <Link to="/blog" className="back-to-blog">← Back to Blog</Link>
        
        <article className="blog-detail-article">
          <header className="blog-detail-header">
            <span className="blog-detail-category">{blog.category}</span>
            <h1 className="blog-detail-title">{blog.title}</h1>
            <div className="blog-detail-meta">
              <span>By {blog.author}</span>
              <span className="meta-separator">|</span>
              <span>{blog.date}</span>
            </div>
          </header>

          <div className="blog-detail-featured-image">
            <img src={blog.featuredImage} alt={blog.title} />
          </div>

          <div className="blog-detail-content">
            <div className="blog-content-text">
              {blog.content || blog.excerpt}
            </div>

            {/* Blog Images Gallery */}
            {blog.images && blog.images.length > 0 && (
              <div className="blog-images-gallery">
                {blog.images.map((image, index) => (
                  <div key={index} className="blog-image-item">
                    <img src={image} alt={`${blog.title} - Image ${index + 1}`} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </article>
      </div>
    </div>
  )
}

export default BlogDetail

