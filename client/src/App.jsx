import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import JobDetails from './pages/JobDetails'
import About from './pages/About'
import Services from './pages/Services'
import PermanentHiring from './pages/PermanentHiring'
import ContractHiring from './pages/ContractHiring'
import ExecutiveHiring from './pages/ExecutiveHiring'
import AISolutions from './pages/AISolutions'
import Partnerships from './pages/Partnerships'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Login from './pages/Login'
import Register from './pages/Register'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import { initSmoothScroll, destroySmoothScroll, getScrollEngine } from './utils/smoothScroll'
import './App.css'

// Component to handle scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Scroll to top on route change using smooth scroll engine if available
    const scrollEngine = getScrollEngine()
    if (scrollEngine) {
      scrollEngine.scrollTo(0, false) // Instant scroll on route change
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return null
}

function App() {
  // Initialize smooth scroll engine with faster, more responsive settings
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      initSmoothScroll({
        damping: 0.18,          // Faster easing (0.15-0.20 range) for quicker response
        strength: 1.8,          // Increased scroll strength (2x-2.5x faster)
        maxVelocity: 6,          // Higher max velocity for more momentum travel
        minVelocity: 0.02,       // Slightly higher min to stop faster when needed
        wheelMultiplier: 2.5,    // 2x-3x faster wheel response
        touchMultiplier: 2.0,    // Faster touch response
        friction: 0.95           // Less friction = more momentum travel
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      destroySmoothScroll()
    }
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobs/:id" element={<JobDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/permanent-hiring" element={<PermanentHiring />} />
            <Route path="/contract-hiring" element={<ContractHiring />} />
            <Route path="/executive-hiring" element={<ExecutiveHiring />} />
            <Route path="/ai-solutions" element={<AISolutions />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute requireAdmin={true}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

