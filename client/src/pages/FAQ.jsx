import { useState } from 'react'
import { Link } from 'react-router-dom'
import './FAQ.css'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqCategories = [
    {
      title: 'General Questions',
      items: [
        {
          question: 'What is Riva Scientific?',
          answer: 'Riva Scientific is a leading recruitment and talent acquisition platform that connects businesses with top-tier professionals across various industries. We specialize in permanent hiring, contract staffing, and executive search services, powered by innovative AI technology.'
        },
        {
          question: 'How does Riva Scientific differ from other recruitment agencies?',
          answer: 'Riva Scientific combines cutting-edge AI technology with personalized human expertise to deliver faster, more accurate candidate matches. Our platform uses advanced algorithms to analyze skills, cultural fit, and career progression, ensuring better placements and reduced time-to-hire.'
        },
        {
          question: 'What industries does Riva Scientific serve?',
          answer: 'We serve a wide range of industries including technology, healthcare, finance, engineering, manufacturing, hospitality, and business services. Our diverse network and industry expertise allow us to match candidates across multiple sectors.'
        },
        {
          question: 'Is Riva Scientific available internationally?',
          answer: 'Yes, Riva Scientific operates globally, connecting talent and opportunities across multiple countries and regions. We have partnerships and networks that enable us to facilitate international placements.'
        }
      ]
    },
    {
      title: 'For Job Seekers',
      items: [
        {
          question: 'How do I create an account on Riva Scientific?',
          answer: 'Creating an account is simple! Click on the "Register" button in the navigation bar, fill in your basic information, upload your resume, and complete your profile. Our platform will then match you with relevant job opportunities.'
        },
        {
          question: 'Is there a fee for job seekers to use Riva Scientific?',
          answer: 'No, our services are completely free for job seekers. There are no registration fees, placement fees, or hidden charges. We are committed to helping you find your next opportunity at no cost.'
        },
        {
          question: 'How does the AI matching system work?',
          answer: 'Our AI system analyzes your skills, experience, preferences, and career goals to match you with positions that align with your profile. The system continuously learns from your interactions and feedback to improve match accuracy over time.'
        },
        {
          question: 'Can I apply for multiple positions?',
          answer: 'Absolutely! You can apply for as many positions as you find suitable. Our platform allows you to track all your applications in one place and receive updates on their status.'
        },
        {
          question: 'How long does it take to hear back after applying?',
          answer: 'Response times vary depending on the employer, but typically you can expect to hear back within 5-7 business days. Our platform sends automatic notifications when employers view your application or schedule interviews.'
        }
      ]
    },
    {
      title: 'For Employers',
      items: [
        {
          question: 'How do I post a job opening?',
          answer: 'To post a job opening, you need to create an employer account. Once registered, you can access the job posting dashboard, fill in the job details, requirements, and preferences. Our AI will then start matching qualified candidates immediately.'
        },
        {
          question: 'What are the pricing plans for employers?',
          answer: 'We offer flexible pricing plans tailored to your hiring needs. Contact our sales team through the "Book a Free Consultation" button to discuss custom packages that fit your budget and requirements.'
        },
        {
          question: 'How quickly can I find qualified candidates?',
          answer: 'Our AI-powered platform typically presents qualified candidates within 24-48 hours of posting a job. For urgent positions, we can expedite the process and provide priority support.'
        },
        {
          question: 'Can I use Riva Scientific for temporary or contract positions?',
          answer: 'Yes! Riva Scientific offers comprehensive contract and temporary staffing solutions. You can specify the duration, project requirements, and contract terms when posting positions.'
        },
        {
          question: 'What kind of support do you provide during the hiring process?',
          answer: 'We provide end-to-end support including candidate screening, interview scheduling, background checks, offer negotiations, and onboarding assistance. Our dedicated account managers ensure a smooth hiring experience.'
        },
        {
          question: 'Do you offer executive search services?',
          answer: 'Yes, we have a specialized executive search division that focuses on C-level positions, senior management roles, and specialized leadership positions. Our executive search team uses advanced sourcing techniques and maintains a confidential, professional process.'
        }
      ]
    },
    {
      title: 'AI Solutions & Technology',
      items: [
        {
          question: 'What AI tools does Riva Scientific offer?',
          answer: 'We offer a comprehensive suite of AI tools including resume parsing, candidate fit scoring, predictive hiring models, intelligent role matching, automated screening bots, and workforce analytics dashboards. These tools help streamline and optimize your recruitment process.'
        },
        {
          question: 'How accurate is the AI candidate matching?',
          answer: 'Our AI matching system has an accuracy rate of over 85% for initial candidate matches. The system continuously learns and improves from feedback, ensuring increasingly accurate matches over time.'
        },
        {
          question: 'Can I integrate Riva Scientific with my existing HR systems?',
          answer: 'Yes, we offer API integrations and partnerships with major HRIS platforms, ATS systems, and enterprise software. Contact our technical team to discuss integration options for your specific systems.'
        },
        {
          question: 'Is my data secure on the Riva Scientific platform?',
          answer: 'Absolutely. We use enterprise-grade security measures including encryption, secure data centers, regular security audits, and compliance with GDPR, CCPA, and other data protection regulations. Your data privacy and security are our top priorities.'
        }
      ]
    },
    {
      title: 'Partnerships & Collaborations',
      items: [
        {
          question: 'How can I become a partner with Riva Scientific?',
          answer: 'We welcome partnerships with recruitment agencies, technology providers, and business service companies. Visit our Partnerships page or contact our partnership team to explore collaboration opportunities.'
        },
        {
          question: 'What types of partnerships do you offer?',
          answer: 'We offer reseller partnerships, vendor alliances, and technology integration partnerships. Each partnership type comes with specific benefits, support, and revenue-sharing opportunities.'
        },
        {
          question: 'What are the benefits of partnering with Riva Scientific?',
          answer: 'Partners benefit from increased market reach, shared innovation resources, dedicated account support, co-marketing opportunities, access to our AI technology, and competitive revenue-sharing models.'
        }
      ]
    },
    {
      title: 'Account & Billing',
      items: [
        {
          question: 'How do I update my profile information?',
          answer: 'You can update your profile at any time by logging into your account and navigating to the "Profile" or "Settings" section. Changes are saved automatically and reflected immediately.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept major credit cards, bank transfers, and corporate purchase orders. For enterprise clients, we also offer invoicing and net payment terms.'
        },
        {
          question: 'Can I cancel my subscription at any time?',
          answer: 'Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. Your access will continue until the end of your current billing period.'
        },
        {
          question: 'How do I contact customer support?',
          answer: 'You can reach our customer support team through the Contact Us page, email support@rivascientific.com, or use the live chat feature on our website. Our support team is available Monday-Friday, 9 AM - 6 PM EST.'
        }
      ]
    }
  ]

  return (
    <div className="faq-page">
      {/* Hero Section */}
      <section className="faq-hero-section">
        <div className="container">
          <div className="faq-hero-content">
            <span className="faq-hero-label">Support</span>
            <h1 className="faq-hero-title">Frequently Asked Questions</h1>
            <p className="faq-hero-description">
              Find answers to common questions about our services, platform, and how we can help you achieve your recruitment goals.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="faq-content-section">
        <div className="container">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="faq-category">
              <h2 className="faq-category-title">{category.title}</h2>
              <div className="faq-items">
                {category.items.map((item, itemIndex) => {
                  const index = `${categoryIndex}-${itemIndex}`
                  const isOpen = openIndex === index
                  return (
                    <div key={itemIndex} className={`faq-item ${isOpen ? 'open' : ''}`}>
                      <button
                        className="faq-question"
                        onClick={() => toggleFAQ(index)}
                        aria-expanded={isOpen}
                      >
                        <span className="faq-question-text">{item.question}</span>
                        <svg
                          className={`faq-icon ${isOpen ? 'open' : ''}`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 7.5L10 12.5L15 7.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                        <div className="faq-answer-content">
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="faq-cta-section">
        <div className="container">
          <div className="faq-cta-card">
            <h2 className="faq-cta-title">Still have questions?</h2>
            <p className="faq-cta-description">
              Can't find what you're looking for? Our team is here to help. Get in touch with us and we'll respond as soon as possible.
            </p>
            <div className="faq-cta-buttons">
              <Link to="/contact" className="faq-cta-btn-primary">
                <span>Contact Us</span>
              </Link>
              <Link to="/services" className="faq-cta-btn-secondary">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ

