// Blog Data - Add your blog posts here
// 
// TO ADD A NEW BLOG POST:
// 1. Import your images at the top (if using local images):
//    import blogImage1 from '../images/your-image-name.jpg'
//    import blogImage2 from '../images/another-image.jpg'
//
// 2. Add a new object to the blogData array below with:
//    - id: unique number
//    - title: blog post title
//    - category: one of the categories from the categories array
//    - author: author name
//    - date: date string (e.g., "July 10, 2024")
//    - featuredImage: main image URL or imported image
//    - images: array of up to 5 images (can use imported images or URLs)
//    - excerpt: short description for the listing page
//    - content: full blog post content
//
// EXAMPLE WITH LOCAL IMAGES:
// import aboutUs1Image from '../images/aboutus1.png'
// import aboutUs2Image from '../images/aboutus2.png'
//
// Then in your blog object:
// featuredImage: aboutUs1Image,
// images: [aboutUs1Image, aboutUs2Image, ...]

const blogData = [
  {
    id: 1,
    title: "Provide guidance on crafting effective resumes and cover",
    category: "Day Trading",
    author: "admin",
    date: "July 10, 2024",
    featuredImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    excerpt: "Provide guidance on crafting effective resumes and cover letters that stand out to employers.",
    content: "Full blog content goes here..."
  },
  {
    id: 2,
    title: "Detail any internship or graduate programs you offer",
    category: "Day Trading",
    author: "admin",
    date: "July 10, 2024",
    featuredImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    excerpt: "Detail any internship or graduate programs you offer to help candidates understand opportunities.",
    content: "Full blog content goes here..."
  },
  {
    id: 3,
    title: "Use relevant keywords to improve the blog's visibility in",
    category: "Day Trading",
    author: "admin",
    date: "July 10, 2024",
    featuredImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    excerpt: "Use relevant keywords to improve the blog's visibility in search engines and attract more readers.",
    content: "Full blog content goes here..."
  },
  {
    id: 4,
    title: "Share stories of employees who have advanced within the",
    category: "Day Trading",
    author: "admin",
    date: "July 10, 2024",
    featuredImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    excerpt: "Share stories of employees who have advanced within the company to inspire potential candidates.",
    content: "Full blog content goes here..."
  }
]

// Categories list
export const categories = [
  "Day Trading",
  "Finance",
  "Headhunting",
  "Promotions",
  "Recruitment Agencies",
  "Virtual Hiring"
]

// Popular tags
export const popularTags = [
  "Account",
  "Careers",
  "Demo",
  "Development",
  "Technology"
]

export default blogData

