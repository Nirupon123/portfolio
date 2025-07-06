import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Brain } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "InsuranceSaathi",
      subtitle: "AI Assistant for Health, Vehicle & Life Insurance",
      description: "InsuranceSaathi is an AI-powered platform built to simplify and secure claim processing for health, vehicle, and life insurance. It leverages document analysis for validating policy details, vehicle damage classification and localization using deep learning models like EfficientNetV2-RW-M and YOLOv8, and provides an intuitive natural language Q&A system for users to understand policies clearly. Developed with Python, Flask, InsuranceSaathi delivers fast, scalable, and fraud-resistant claim support, making insurance more accessible and trustworthy for all..",
      tech: ["Python", "Flask", "NLP", "EfficientNetV2", "YOLO-V8", "Real-time Validation"],
      gif: "/Images/insurance2.jpg",
      features: [
        "Document Analysis & Verification",
        "Vehicle Damage Detection",
        "Policy Q&A through NLP",
        "Real-time Claim Processing"
      ]
    },
    {
      title: "AgriSure.ai",
      subtitle: "AI-Powered Multilingual Insurance & Loan Platform for Farmers",
      description: "Designed two AI engines: Loan AI Engine using NeuralProphet for yield forecasting to replace CIBIL scores with dynamic, climate-informed creditworthiness scores, and Insurance AI Engine combining EfficientNetV2-RW-M for damage classification and ConvNeXt-Tiny for multiclass crop type detection. Developed and fine-tuned a RAG system based on all-MiniLM-L6-v2 for multilingual policy explanation and voice support.",
      tech: ["NeuralProphet", "EfficientNetV2", "ConvNeXt-Tiny", "RAG", "all-MiniLM-L6-v2", "Voice Support"],
      gif: "/Images/giphy.gif",
      features: [
        "Loan AI Engine with Yield Forecasting",
        "Insurance AI Engine with Damage Classification",
        "Multilingual RAG System",
        "Voice-driven Interactions"
      ]
    }
  ]

  return (
    <section id="projects" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Featured Projects
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="projects-grid"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            viewport={{ once: true }}
            className="project-card"
          >
            <div className="project-image">
              <img 
                src={project.gif} 
                alt={project.title}
                style={{ 
                  width: '100%', 
                  height: '200px', 
                  objectFit: 'cover',
                  borderRadius: '10px'
                }}
              />
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p style={{ color: 'var(--neon-green)', fontSize: '1rem', marginBottom: '1rem' }}>
                {project.subtitle}
              </p>
              
              <p className="project-description">{project.description}</p>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: 'var(--neon-green)', marginBottom: '0.5rem' }}>Key Features:</h4>
                <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  {project.features.map((feature, idx) => (
                    <li key={idx} style={{ marginBottom: '0.25rem' }}>• {feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a href="#" className="project-link">
                  <Github size={16} />
                  Source Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
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
        <Brain size={32} color="var(--neon-green)" style={{ marginBottom: '1rem' }} />
        <h3 style={{ color: 'var(--neon-green)', marginBottom: '1rem' }}>Project Philosophy</h3>
        <p style={{ color: 'var(--text-secondary)' }}>
          All my projects focus on <strong>real-world impact</strong> and <strong>accessibility</strong>. 
          I believe technology should serve everyone, especially underserved communities. 
          Each project combines cutting-edge AI with practical solutions for everyday problems.
        </p>
      </motion.div>
    </section>
  )
}

export default Projects 