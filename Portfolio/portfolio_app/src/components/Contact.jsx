import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, LinkedinIcon, Github, MessageCircle, Phone, Send, CheckCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:niruponpal2003@gmail.com",
      text: "Contact Me via Email"
    },
    {
      name: "LinkedIn",
      icon: LinkedinIcon,
      href: "https://www.linkedin.com/in/nirupon-pal-413a3b345/",
      text: "Connect with me on LinkedIn"
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Nirupon123",
      text: "Connect with me on GitHub"
    },
 
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init("ESFU68Lg78vVn5K2X") // Your EmailJS public key
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // EmailJS template parameters
      const templateParams = {
        to_email: 'niruponpal2003@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }

      // Send email using EmailJS
      const result = await emailjs.send(
        'service_c975wvk', // Your EmailJS service ID
        'ESFU68Lg78vVn5K2X', // Your EmailJS template ID
        templateParams,
        'ESFU68Lg78vVn5K2X' // Your EmailJS public key
      )
      
      console.log('Email sent successfully:', result)
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      }, 3000)
    } catch (error) {
      console.error('Error sending email:', error)
      setIsSubmitting(false)
      alert('Failed to send email. Please try again or contact me directly.')
    }
  }

  return (
    <section id="contact" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Let's Connect
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="contact-content"
      >
        <p className="contact-description">
          I'm always interested in new opportunities, collaborations, and meaningful projects. 
          Whether you want to discuss AI solutions, hackathon projects, or just want to say hello, 
          I'd love to hear from you!
        </p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="contact-form-container"
        >
          <h3 style={{ color: 'var(--neon-green)', marginBottom: '2rem', textAlign: 'center' }}>
            Send me a message
          </h3>
          
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="success-message"
            >
              <CheckCircle size={48} color="var(--neon-green)" />
              <h4 style={{ color: 'var(--neon-green)', marginTop: '1rem' }}>Message Sent!</h4>
              <p style={{ color: 'var(--text-secondary)' }}>
                Thank you for your message. I'll get back to you soon!
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  required
                  rows="5"
                  className="form-textarea"
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="submit-button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          style={{ marginTop: '3rem' }}
        >
          <h4 style={{ color: 'var(--neon-green)', marginBottom: '1.5rem', textAlign: 'center' }}>
            Or connect with me directly
          </h4>
          <div className="contact-links">
            {contactLinks.map((link, index) => {
              const IconComponent = link.icon
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent size={20} />
                  {link.text}
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        style={{ 
          textAlign: 'center', 
          marginTop: '3rem',
          padding: '2rem',
          background: 'var(--bg-secondary)',
          borderRadius: '10px',
          border: '1px solid var(--border-color)'
        }}
      >
        <MessageCircle size={32} color="var(--neon-green)" style={{ marginBottom: '1rem' }} />
        <h3 style={{ color: 'var(--neon-green)', marginBottom: '1rem' }}>Ready to Collaborate?</h3>
        <p style={{ color: 'var(--text-secondary)' }}>
          I'm particularly interested in projects that focus on <strong>AI for social good</strong>, 
          <strong> multilingual solutions</strong>, and <strong>technology accessibility</strong>. 
          If you have a project that aligns with my mission of "AI for the underserved," 
          let's build something amazing together!
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        style={{
          textAlign: 'center',
          marginTop: '2rem',
          padding: '1rem',
          color: 'var(--text-muted)',
          fontSize: '0.9rem'
        }}
      >
       
      </motion.div>
    </section>
  )
}

export default Contact 