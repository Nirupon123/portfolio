import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Brain, Users, Award } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: "Summer Research Intern",
      company: "Indian Statistical Institute, Kolkata",
      date: "Jul–Oct 2024",
      description: "During my summer research internship at Indian Statistical Institute, Kolkata (Jul–Oct 2024), I worked on a healthcare AI project in collaboration with the Cardiological Society of India, focused on automated detection of heart murmurs in pediatric patients. I processed over 5,000 heart sound recordings using advanced signal processing techniques including Butterworth, Chebyshev, and Elliptical filters to clean and refine the audio data. I extracted 17 key acoustic features and handled missing values using KNN imputation. Then, I trained and tuned multiple machine learning models—including Logistic Regression, Random Forest, and SVM—achieving an impressive 81% accuracy in murmur detection. This experience enhanced my skills in feature engineering, biomedical signal analysis, and clinical-grade ML modeling, and contributed to the development of scalable AI tools for early cardiac diagnosis.",
      icon: Brain,
      highlights: ["Signal Processing", "ML Models", "Cardiac Diagnostics"]
    }
  ]

  return (
    <section id="experience" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Experience
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="experience-grid"
      >
        {experiences.map((exp, index) => {
          const IconComponent = exp.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="experience-card"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <IconComponent size={24} color="var(--neon-green)" />
                <div>
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-company">{exp.company}</p>
                  <p className="experience-date">{exp.date}</p>
                </div>
              </div>
              
              <p className="experience-description">{exp.description}</p>
              
              <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {exp.highlights.map((highlight, idx) => (
                  <span
                    key={idx}
                    style={{
                      background: 'var(--bg-tertiary)',
                      color: 'var(--neon-green)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '15px',
                      fontSize: '0.8rem',
                      border: '1px solid var(--neon-green)'
                    }}
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
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
        <Award size={32} color="var(--neon-green)" style={{ marginBottom: '1rem' }} />
        <h3 style={{ color: 'var(--neon-green)', marginBottom: '1rem' }}>Currently Learning</h3>
        <p style={{ color: 'var(--text-secondary)' }}>
          Actively expanding my skills in JavaScript backend frameworks (Node.js/Express) 
          to become a full-stack developer and enhance my AI deployment capabilities.
        </p>
      </motion.div>
    </section>
  )
}

export default Experience 