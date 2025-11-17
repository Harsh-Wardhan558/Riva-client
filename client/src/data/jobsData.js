// Jobs Data - Add your job listings here
// 
// TO ADD A NEW JOB:
// 1. Import your images at the top (if using local images):
//    import jobImage1 from '../images/your-image-name.jpg'
//
// 2. Add a new object to the jobsData array below with:
//    - id: unique number
//    - title: job title
//    - company: company name
//    - location: job location
//    - type: job type (Full-time, Part-time, Contract, Temporary)
//    - category: job category (Technology, Design, Marketing, Sales, Finance, Healthcare, etc.)
//    - salary: salary range (optional)
//    - description: job description
//    - requirements: array of requirements
//    - keywords: array of keywords for search functionality
//    - featuredImage: main image URL or imported image (optional)
//    - date: date string (e.g., "July 10, 2024")
//    - createdAt: date object or timestamp
//
// EXAMPLE WITH LOCAL IMAGES:
// import aboutUs1Image from '../images/aboutus1.png'
//
// Then in your job object:
// featuredImage: aboutUs1Image,

const jobsData = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    category: "Technology",
    salary: "$120,000 - $150,000",
    description: "We are looking for an experienced Senior Software Engineer to join our dynamic team. You will be responsible for designing and developing scalable web applications.",
    requirements: [
      "5+ years of experience in software development",
      "Proficiency in React, Node.js, and TypeScript",
      "Strong problem-solving skills",
      "Experience with cloud platforms (AWS, Azure)"
    ],
    keywords: ["software", "engineer", "react", "nodejs", "fullstack", "developer", "programming"],
    featuredImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "July 15, 2024",
    createdAt: new Date("2024-07-15")
  },
  {
    id: 2,
    title: "UX/UI Designer",
    company: "Creative Design Studio",
    location: "New York, NY",
    type: "Full-time",
    category: "Design",
    salary: "$80,000 - $100,000",
    description: "Join our creative team as a UX/UI Designer. You'll work on exciting projects creating beautiful and intuitive user interfaces.",
    requirements: [
      "3+ years of UX/UI design experience",
      "Proficiency in Figma, Adobe XD, and Sketch",
      "Strong portfolio showcasing design skills",
      "Understanding of user-centered design principles"
    ],
    keywords: ["design", "ux", "ui", "figma", "creative", "user experience", "interface"],
    featuredImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "July 14, 2024",
    createdAt: new Date("2024-07-14")
  },
  {
    id: 3,
    title: "Digital Marketing Manager",
    company: "Growth Marketing Agency",
    location: "Los Angeles, CA",
    type: "Full-time",
    category: "Marketing",
    salary: "$90,000 - $110,000",
    description: "We're seeking a Digital Marketing Manager to lead our marketing campaigns and drive brand awareness across multiple channels.",
    requirements: [
      "4+ years of digital marketing experience",
      "Experience with SEO, SEM, and social media marketing",
      "Analytical mindset with data-driven approach",
      "Strong communication and leadership skills"
    ],
    keywords: ["marketing", "digital", "seo", "social media", "campaigns", "branding", "advertising"],
    featuredImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "July 13, 2024",
    createdAt: new Date("2024-07-13")
  },
  {
    id: 4,
    title: "Sales Representative",
    company: "Enterprise Solutions Ltd.",
    location: "Chicago, IL",
    type: "Full-time",
    category: "Sales",
    salary: "$60,000 - $80,000 + Commission",
    description: "Join our sales team and help businesses find the right solutions. This role offers excellent growth opportunities and competitive commission structure.",
    requirements: [
      "2+ years of B2B sales experience",
      "Excellent communication and negotiation skills",
      "Self-motivated and goal-oriented",
      "CRM experience preferred"
    ],
    keywords: ["sales", "representative", "b2b", "business", "client", "negotiation", "crm"],
    featuredImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "July 12, 2024",
    createdAt: new Date("2024-07-12")
  },
  {
    id: 5,
    title: "Product Manager",
    company: "Innovation Labs",
    location: "Seattle, WA",
    type: "Full-time",
    category: "Product",
    salary: "$110,000 - $140,000",
    description: "Lead product development initiatives and work closely with engineering and design teams to deliver exceptional products.",
    requirements: [
      "5+ years of product management experience",
      "Strong analytical and strategic thinking",
      "Experience with agile methodologies",
      "Technical background preferred"
    ],
    keywords: ["product", "manager", "strategy", "development", "agile", "roadmap", "innovation"],
    featuredImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "July 11, 2024",
    createdAt: new Date("2024-07-11")
  },
  {
    id: 6,
    title: "Frontend Developer",
    company: "Web Solutions Co.",
    location: "Austin, TX",
    type: "Contract",
    category: "Technology",
    salary: "$70 - $90 per hour",
    description: "Contract opportunity for an experienced Frontend Developer to work on cutting-edge web applications.",
    requirements: [
      "3+ years of frontend development experience",
      "Expertise in React, Vue, or Angular",
      "Strong CSS and JavaScript skills",
      "Portfolio demonstrating modern web development"
    ],
    keywords: ["frontend", "developer", "react", "vue", "angular", "javascript", "css", "web"],
    featuredImage: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "July 10, 2024",
    createdAt: new Date("2024-07-10")
  }
]

// Job categories
export const jobCategories = [
  "All",
  "Technology",
  "Design",
  "Marketing",
  "Sales",
  "Product",
  "Finance",
  "Healthcare",
  "General"
]

// Job types
export const jobTypes = [
  "All",
  "Full-time",
  "Part-time",
  "Contract",
  "Temporary"
]

// Popular keywords/tags
export const popularKeywords = [
  "React",
  "JavaScript",
  "Design",
  "Marketing",
  "Sales",
  "Remote",
  "Full-time",
  "Senior",
  "Manager"
]

export default jobsData

