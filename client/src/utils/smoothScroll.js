/**
 * Production-Ready Smooth Scroll Engine
 * Physics-driven, GPU-accelerated scrolling with inertia and momentum
 */

class SmoothScrollEngine {
  constructor(options = {}) {
    // Configuration - Optimized for faster, more responsive scrolling
    this.config = {
      damping: options.damping || 0.18,           // Faster easing (0.15-0.20 range)
      strength: options.strength || 1.8,           // Increased scroll strength (2x-2.5x)
      maxVelocity: options.maxVelocity || 6,       // Higher max velocity for more momentum
      minVelocity: options.minVelocity || 0.02,   // Slightly higher min to stop faster
      wheelMultiplier: options.wheelMultiplier || 2.5,  // 2x-3x faster wheel response
      touchMultiplier: options.touchMultiplier || 2.0,  // Faster touch response
      friction: options.friction || 0.95,          // Less friction = more momentum travel
      ...options
    }

    // State
    this.current = 0
    this.target = 0
    this.velocity = 0
    this.isScrolling = false
    this.isEnabled = false
    this.animationId = null
    this.container = null
    this.wrapper = null

    // Touch state
    this.touchStartY = 0
    this.touchCurrentY = 0
    this.isTouching = false
    this.lastTouchTime = 0

    // Performance tracking
    this.lastFrameTime = performance.now()
    this.deltaTime = 0

    // Bind methods
    this.handleWheel = this.handleWheel.bind(this)
    this.handleTouchStart = this.handleTouchStart.bind(this)
    this.handleTouchMove = this.handleTouchMove.bind(this)
    this.handleTouchEnd = this.handleTouchEnd.bind(this)
    this.handleResize = this.handleResize.bind(this)
    this.animate = this.animate.bind(this)
  }

  /**
   * Initialize the scroll engine
   */
  init() {
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      console.log('Smooth scroll disabled: prefers-reduced-motion')
      return false
    }

    // Check if mobile and disable for low-end devices
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    const isLowEndDevice = navigator.hardwareConcurrency <= 2 || 
                           (navigator.deviceMemory && navigator.deviceMemory <= 2)
    
    if (isMobile && isLowEndDevice) {
      console.log('Smooth scroll disabled: low-end mobile device')
      return false
    }

    // Create scroll container structure
    this.setupContainer()

    // Initialize scroll position
    this.current = window.pageYOffset || document.documentElement.scrollTop || 0
    this.target = this.current

    // Start animation loop
    this.isEnabled = true
    this.animate()

    // Attach event listeners
    this.attachListeners()

    return true
  }

  /**
   * Setup the scroll container structure
   */
  setupContainer() {
    const body = document.body
    const html = document.documentElement

    // Create wrapper if it doesn't exist
    if (!this.wrapper) {
      this.wrapper = document.createElement('div')
      this.wrapper.id = 'smooth-scroll-wrapper'
      this.wrapper.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        will-change: transform;
        backface-visibility: hidden;
        perspective: 1000px;
      `
    }

    // Create container if it doesn't exist
    if (!this.container) {
      this.container = document.createElement('div')
      this.container.id = 'smooth-scroll-container'
      this.container.style.cssText = `
        will-change: transform;
        backface-visibility: hidden;
        transform-style: preserve-3d;
      `
    }

    // Move all body children to container (except navbar which stays outside)
    if (!document.getElementById('smooth-scroll-wrapper')) {
      const children = Array.from(body.children)
      let navbar = document.querySelector('.navbar')
      
      // If navbar is inside another element (like .app), extract it first
      if (navbar && navbar.parentElement !== body) {
        const navbarParent = navbar.parentElement
        navbar = navbarParent.removeChild(navbar)
      }
      
      // Remove navbar from children array if it exists
      const childrenToMove = children.filter(child => {
        return child.id !== 'smooth-scroll-wrapper' && 
               child !== navbar &&
               !child.classList.contains('navbar')
      })
      
      childrenToMove.forEach(child => {
        this.container.appendChild(child)
      })

      this.wrapper.appendChild(this.container)
      body.appendChild(this.wrapper)
      
      // Add navbar back to body BEFORE wrapper (so it's in normal flow initially)
      // Position will be controlled by CSS class (.scrolled)
      if (navbar) {
        // Insert navbar before wrapper to maintain normal flow
        if (body.firstChild) {
          body.insertBefore(navbar, body.firstChild)
        } else {
          body.appendChild(navbar)
        }
        navbar.style.zIndex = '10000'
        navbar.style.width = '100%'
        navbar.style.backgroundColor = 'white'
        // Ensure navbar is in normal flow initially (not fixed)
        navbar.style.position = 'relative'
      }
      
      // Listen for scroll to update navbar position
      const handleNavbarScroll = () => {
        if (navbar) {
          const scrollPosition = this.current || window.pageYOffset || document.documentElement.scrollTop
          if (scrollPosition > 50) {
            navbar.classList.add('scrolled')
            navbar.style.position = 'fixed'
          } else {
            navbar.classList.remove('scrolled')
            navbar.style.position = 'relative'
          }
        }
      }
      
      // Initialize navbar position on load
      handleNavbarScroll()
      
      // Update navbar on scroll
      this.navbarScrollHandler = handleNavbarScroll
      window.addEventListener('scroll', handleNavbarScroll, { passive: true })

      // Set body styles
      body.style.cssText += `
        margin: 0;
        padding: 0;
        overflow: hidden;
        height: 100%;
      `

      html.style.cssText += `
        height: 100%;
        overflow: hidden;
      `
    }

    // Update container height
    this.updateContainerHeight()
  }

  /**
   * Update container height based on content
   */
  updateContainerHeight() {
    if (this.container) {
      const height = Math.max(
        this.container.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      )
      this.container.style.height = `${height}px`
    }
  }

  /**
   * Attach event listeners
   */
  attachListeners() {
    window.addEventListener('wheel', this.handleWheel, { passive: false })
    window.addEventListener('touchstart', this.handleTouchStart, { passive: false })
    window.addEventListener('touchmove', this.handleTouchMove, { passive: false })
    window.addEventListener('touchend', this.handleTouchEnd, { passive: false })
    window.addEventListener('resize', this.handleResize, { passive: true })
    
    // Handle keyboard scrolling
    window.addEventListener('keydown', this.handleKeyDown.bind(this), { passive: false })
    
    // Handle scroll restoration
    window.addEventListener('scroll', this.handleNativeScroll.bind(this), { passive: true })
  }

  /**
   * Remove event listeners
   */
  removeListeners() {
    window.removeEventListener('wheel', this.handleWheel)
    window.removeEventListener('touchstart', this.handleTouchStart)
    window.removeEventListener('touchmove', this.handleTouchMove)
    window.removeEventListener('touchend', this.handleTouchEnd)
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('keydown', this.handleKeyDown)
    window.removeEventListener('scroll', this.handleNativeScroll)
    if (this.navbarScrollHandler) {
      window.removeEventListener('scroll', this.navbarScrollHandler)
    }
  }

  /**
   * Handle wheel events
   */
  handleWheel(e) {
    // Don't interfere with form inputs or scrollable containers
    const target = e.target
    const isInput = target.matches('input, textarea, select, [contenteditable]')
    const isScrollable = target.closest('[data-scroll-container], .no-smooth-scroll')
    
    if (isInput || isScrollable) {
      return
    }

    e.preventDefault()
    e.stopPropagation()

    // Calculate delta with increased speed multiplier (1.5x-2x faster)
    const delta = e.deltaY * this.config.wheelMultiplier
    
    // Add velocity based on delta with increased strength
    // This creates faster, more responsive scrolling
    this.velocity += delta * this.config.strength
    
    // Clamp velocity to allow more momentum travel
    this.velocity = Math.max(
      -this.config.maxVelocity,
      Math.min(this.config.maxVelocity, this.velocity)
    )

    // Update target immediately for responsive feel
    this.updateTarget()
  }

  /**
   * Handle touch start
   */
  handleTouchStart(e) {
    const target = e.target
    const isInput = target.matches('input, textarea, select, [contenteditable]')
    const isScrollable = target.closest('[data-scroll-container], .no-smooth-scroll')
    
    if (isInput || isScrollable) {
      return
    }

    this.isTouching = true
    this.touchStartY = e.touches[0].clientY
    this.touchCurrentY = this.touchStartY
    this.lastTouchTime = performance.now()
    this.velocity = 0
  }

  /**
   * Handle touch move
   */
  handleTouchMove(e) {
    if (!this.isTouching) return

    e.preventDefault()
    e.stopPropagation()

    const touchY = e.touches[0].clientY
    const deltaY = (this.touchCurrentY - touchY) * this.config.touchMultiplier
    
    // Calculate velocity from touch movement with faster response
    const currentTime = performance.now()
    const timeDelta = Math.max(1, currentTime - this.lastTouchTime)
    const touchVelocity = (deltaY / timeDelta) * 16 // Normalize to 60fps
    
    // Increased touch velocity multiplier for faster response
    this.velocity = touchVelocity * 0.85 // Less dampening = faster touch
    this.touchCurrentY = touchY
    this.lastTouchTime = currentTime

    // Update target immediately for responsive touch
    this.updateTarget()
  }

  /**
   * Handle touch end
   */
  handleTouchEnd(e) {
    if (!this.isTouching) return

    this.isTouching = false
    
    // Apply final velocity for momentum
    if (Math.abs(this.velocity) > this.config.minVelocity) {
      this.updateTarget()
    } else {
      this.velocity = 0
    }
  }

  /**
   * Handle keyboard scrolling
   */
  handleKeyDown(e) {
    const target = e.target
    const isInput = target.matches('input, textarea, [contenteditable]')
    
    if (isInput) return

    // Increased keyboard scroll distances for faster navigation
    const scrollKeys = {
      'ArrowDown': 200,  // Increased for faster navigation
      'ArrowUp': -200,   // Increased for faster navigation
      'PageDown': window.innerHeight * 0.98,  // Increased for faster page scrolling
      'PageUp': -window.innerHeight * 0.98,   // Increased for faster page scrolling
      'Home': -Infinity,
      'End': Infinity
    }

    const scrollDelta = scrollKeys[e.key]
    
    if (scrollDelta !== undefined) {
      e.preventDefault()
      
      if (e.key === 'Home') {
        this.target = 0
        this.velocity = 0
      } else if (e.key === 'End') {
        const maxScroll = this.getMaxScroll()
        this.target = maxScroll
        this.velocity = 0
      } else {
        // Increased strength for faster keyboard scrolling
        this.velocity += scrollDelta * this.config.strength
        this.updateTarget()
      }
    }

    // Handle Space key with increased speed
    if (e.key === ' ' && !isInput) {
      e.preventDefault()
      const scrollDelta = e.shiftKey 
        ? -window.innerHeight * 0.98 
        : window.innerHeight * 0.98
      this.velocity += scrollDelta * this.config.strength
      this.updateTarget()
    }
  }

  /**
   * Handle native scroll events (for programmatic scrolling)
   */
  handleNativeScroll() {
    const nativeScroll = window.pageYOffset || document.documentElement.scrollTop || 0
    if (Math.abs(nativeScroll - this.target) > 10) {
      this.target = nativeScroll
      this.current = nativeScroll
      this.velocity = 0
    }
  }

  /**
   * Handle resize
   */
  handleResize() {
    this.updateContainerHeight()
    const maxScroll = this.getMaxScroll()
    this.target = Math.min(this.target, maxScroll)
    this.current = Math.min(this.current, maxScroll)
  }

  /**
   * Update target scroll position
   */
  updateTarget() {
    const maxScroll = this.getMaxScroll()
    this.target += this.velocity
    
    // Clamp target to boundaries
    this.target = Math.max(0, Math.min(maxScroll, this.target))
  }

  /**
   * Get maximum scroll position
   */
  getMaxScroll() {
    if (this.container) {
      return Math.max(0, this.container.scrollHeight - window.innerHeight)
    }
    return Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
  }

  /**
   * Main animation loop - Optimized for faster, more responsive scrolling
   */
  animate() {
    if (!this.isEnabled) return

    // Calculate delta time
    const currentTime = performance.now()
    this.deltaTime = Math.min(currentTime - this.lastFrameTime, 100) / 16.67 // Normalize to 60fps
    this.lastFrameTime = currentTime

    // Apply physics: faster lerp (0.12-0.18 range) for quicker response
    const diff = this.target - this.current
    this.current += diff * this.config.damping

    // Apply velocity decay (reduced friction for more momentum travel)
    if (!this.isTouching) {
      this.velocity *= this.config.friction // Configurable friction (default 0.94)
      
      // Stop if velocity is too small
      if (Math.abs(this.velocity) < this.config.minVelocity) {
        this.velocity = 0
      } else {
        // Continue updating target with velocity for momentum
        this.updateTarget()
      }
    }

    // Clamp current position
    const maxScroll = this.getMaxScroll()
    this.current = Math.max(0, Math.min(maxScroll, this.current))

    // Apply transform (GPU acceleration) - crisp 60fps output
    if (this.container) {
      // Use translate3d for hardware acceleration
      this.container.style.transform = `translate3d(0, ${-this.current}px, 0)`
    }

    // Update navbar scroll state
    if (this.navbarScrollHandler) {
      this.navbarScrollHandler()
    }

    // Sync with native scroll for compatibility (less frequent updates)
    if (Math.abs(window.pageYOffset - this.current) > 2) {
      window.scrollTo(0, this.current)
    }

    // Continue animation loop
    this.animationId = requestAnimationFrame(this.animate)
  }

  /**
   * Scroll to a specific position
   */
  scrollTo(y, smooth = true) {
    if (smooth) {
      this.target = y
      this.velocity = 0
    } else {
      this.target = y
      this.current = y
      this.velocity = 0
      if (this.container) {
        this.container.style.transform = `translate3d(0, ${-y}px, 0)`
      }
    }
  }

  /**
   * Scroll by a specific amount
   */
  scrollBy(delta, smooth = true) {
    const maxScroll = this.getMaxScroll()
    const newTarget = Math.max(0, Math.min(maxScroll, this.target + delta))
    this.scrollTo(newTarget, smooth)
  }

  /**
   * Get current scroll position
   */
  getScrollPosition() {
    return this.current
  }

  /**
   * Destroy the scroll engine
   */
  destroy() {
    this.isEnabled = false
    
    if (this.animationId) {
      cancelAnimationFrame(this.animationId)
      this.animationId = null
    }

    this.removeListeners()

    // Restore original structure if needed
    if (this.wrapper && this.container) {
      const children = Array.from(this.container.children)
      children.forEach(child => {
        document.body.appendChild(child)
      })
      this.wrapper.remove()
    }

    // Reset body styles
    document.body.style.overflow = ''
    document.body.style.height = ''
    document.documentElement.style.height = ''
    document.documentElement.style.overflow = ''
  }
}

// Create singleton instance
let scrollEngine = null

/**
 * Initialize smooth scroll
 */
export function initSmoothScroll(options = {}) {
  if (scrollEngine) {
    scrollEngine.destroy()
  }

  scrollEngine = new SmoothScrollEngine(options)
  const initialized = scrollEngine.init()

  if (!initialized) {
    scrollEngine = null
    return null
  }

  return scrollEngine
}

/**
 * Get scroll engine instance
 */
export function getScrollEngine() {
  return scrollEngine
}

/**
 * Destroy smooth scroll
 */
export function destroySmoothScroll() {
  if (scrollEngine) {
    scrollEngine.destroy()
    scrollEngine = null
  }
}

export default SmoothScrollEngine
