import React from 'react'
import { motion } from 'framer-motion'
import { User, Target, Heart } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-title"
      >
        WhoAmI ?
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="about-content"
      >
        <div className="about-text">
          <p>
            I'm <strong>Nirupon Pal</strong>, a B.Tech Computer Science student passionate about building AI that empowers everyone—not just the privileged few.
          </p>
          
          <p>
            I specialize in creating AI-powered solutions across multiple sectors with a strong focus on <strong>multilingual access</strong> and <strong>real-world deployments</strong>. My work spans from healthcare diagnostics to agricultural technology, always with the goal of making technology accessible to underserved communities.
          </p>
          
          <p>
            I also love designing clean frontend UI/UX, building MVPs like <strong>AgriSure.ai</strong> and <strong>InsuranceSaathi</strong>, and I'm actively learning JavaScript backend frameworks to go full-stack.
          </p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
            <User size={24} color="var(--neon-green)" />
            <div>
              <h3 style={{ color: 'var(--neon-green)', marginBottom: '0.5rem' }}>Education</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                B.Tech in Computer Science & Engineering (2023–2027)<br />
                SOA University, Bhubaneswar
              </p>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
            <Target size={24} color="var(--neon-green)" />
            <div>
              <h3 style={{ color: 'var(--neon-green)', marginBottom: '0.5rem' }}>Mission</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                "AI for the underserved. AI with impact."<br />
                Building technology that creates meaningful change
              </p>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
            <Heart size={24} color="var(--neon-green)" />
            <div>
              <h3 style={{ color: 'var(--neon-green)', marginBottom: '0.5rem' }}>Passion</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Multilingual AI solutions, real-world deployments,<br />
                and purpose-driven technology development
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About 