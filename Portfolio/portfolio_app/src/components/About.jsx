import React from 'react'
import { motion } from 'framer-motion'
import { User, Target, Heart, CodeIcon } from 'lucide-react'

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
            I'm <strong>Nirupon Pal</strong>, a B.Tech Computer Science student passionate about building AI and full-stack projects that empowers everyone—not just the privileged few.
          </p>
          
          <p>
            I specialize in creating AI-powered solutions across multiple sectors with a strong focus on <strong>Impactful Projects</strong> and <strong>real-world deployments</strong>. My work spans from healthcare diagnostics to agricultural technology, always with the goal of making technology accessible to underserved communities.
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
          <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem', 
              padding: '1rem', 
              background: 'var(--bg-secondary)', 
              borderRadius: '10px', 
              border: '1px solid var(--border-color)' 
              }}>
           
            
            <div>
              <h3 style={{ color: 'var(--neon-green)', marginBottom: '0.5rem' , marginLeft:'2.2rem' }}>Education</h3>
              
              <p style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '0.9rem', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem' ,
                marginBottom: '1rem'
              }}>
                <User size={21} color="var(--neon-green)" />
                <span>
                  B.Tech in Computer Science & Engineering (2023–2027)<br />
                  SOA University, Bhubaneswar
                </span>
              </p>
              
              <p style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '0.9rem', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem' 
              }}>
                <User size={21} color="var(--neon-green)" />
                <span>
                  Higher Secondary (WBCHSE) (2021–2023)<br />
                  Uttarpara Govt. High School, Uttarpara, West Bengal
                </span>
              </p>
              
            </div>
          </div>

          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
            <CodeIcon size={125} color="var(--neon-green)" />
            <div>
              <h3 style={{ color: 'var(--neon-green)', marginBottom: '0.5rem' }}>Hobbies</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              I love solving problems—whether it's through writing clean,
               efficient code or finding practical solutions in real-life situations. 
               Apart from tech, I’m passionate about football, which keeps me active and 
               competitive. I also have a creative side and enjoy expressing myself through
                fine arts, where I find both relaxation and inspiration.
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