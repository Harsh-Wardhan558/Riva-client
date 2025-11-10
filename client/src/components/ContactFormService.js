import { contactAPI } from '../services/api'

/**
 * Contact Form API Service
 * Handles all API calls for the contact form
 */
export const contactFormService = {
  /**
   * Send a contact message
   * @param {Object} formData - Contact form data
   * @param {string} formData.name - User's name
   * @param {string} formData.email - User's email
   * @param {string} formData.subject - Message subject
   * @param {string} formData.message - Message content
   * @returns {Promise<Object>} Response from the API
   */
  sendMessage: async (formData) => {
    try {
      const response = await contactAPI.sendMessage(formData)
      return {
        success: true,
        data: response,
        message: 'Message sent successfully!'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message || 'Failed to send message. Please try again.',
        message: error.message || 'Failed to send message. Please try again.'
      }
    }
  }
}

export default contactFormService

