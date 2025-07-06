import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Nirupon123",
      color: "#333"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/nirupon-pal-413a3b345/",
      color: "#0077b5"
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:niruponpal2003@gmail.com",
      color: "#ea4335"
    },
    {
      name: "Portfolio",
      icon: ExternalLink,
      href: "#",
      color: "#00ff41"
    }
  ]

  return (
    <footer className="footer" >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="footer-content"
      >
        <div className="footer-section">
          <h3 style={{ color: 'var(--neon-green)', marginBottom: '1rem' }}>
            Nirupon Pal
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
            AI Enthusiast & Full-Stack Developer<br />
            Building technology with a greater cause
          </p>
        </div>
        
        <div className="footer-section">
          <h4 style={{ color: 'var(--neon-green)', marginBottom: '1rem' }}>Connect</h4>
          <div className="social-links">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <IconComponent size={20} />
                </motion.a>
              )
            })}
          </div>
        </div>
        
      
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="footer-bottom"
      >
        <div className="footer-divider"></div>
        <div className="footer-info">
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
            © {currentYear} Nirupon Pal. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer 