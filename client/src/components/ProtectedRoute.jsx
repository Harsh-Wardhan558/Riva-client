import { Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { authAPI } from '../services/api'

const ProtectedRoute = ({ children, requireAdmin = false }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('authToken')
        if (!token) {
          setIsAuthenticated(false)
          setLoading(false)
          return
        }

        try {
          const user = await authAPI.getCurrentUser()
          setIsAuthenticated(true)
          setIsAdmin(user?.userType === 'admin')
        } catch (error) {
          // If API call fails, user is not authenticated
          console.error('Auth check failed:', error)
          setIsAuthenticated(false)
          setIsAdmin(false)
        }
        setLoading(false)
      } catch (error) {
        console.error('Auth error:', error)
        setIsAuthenticated(false)
        setIsAdmin(false)
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

  if (loading) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />
  }

  if (requireAdmin && !isAdmin) {
    return <Navigate to="/admin/login" replace />
  }

  return children
}

export default ProtectedRoute

