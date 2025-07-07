import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Medal, Award, Star, Target, Zap } from 'lucide-react'

const Achievements = () => {
  const achievements = [
    {
      title: "Hack4Bengal 2025",
      description: "Top 30 out of 2200+ teams in Eastern India",
      icon: Trophy,
      color: "#FFD700"
    },
    {
      title: "Diversion 2025",
      description: "First Runner-Up (MLH + IEM-Kolkata)",
      icon: Medal,
      color: "#C0C0C0"
    },
    {
      title: "HexaFalls 2025",
      description: "First Runner-Up (JIS Narula Group)",
      icon: Medal,
      color: "#C0C0C0"
    },
    {
      title: "JU SparkHack 2025",
      description: "Top 10 Grand Finalist out of 250 teams",
      icon: Star,
      color: "#FFD700"
    },
    {
      title: "HackerWare 5.0",
      description: "Top 30 Innovation Team (SIH 2024 Internal)",
      icon: Target,
      color: "#FFD700"
    }
  ]

  return (
    <section id="achievements" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Achievements & Recognition
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="achievements-grid"
      >
        {achievements.map((achievement, index) => {
          const IconComponent = achievement.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="achievement-card"
            >
              <div className="achievement-icon">
                <IconComponent size={48} color={achievement.color} />
              </div>
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
            </motion.div>
          )
        })}
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
        <Zap size={32} color="var(--neon-green)" style={{ marginBottom: '1rem' }} />
        <h3 style={{ color: 'var(--neon-green)', marginBottom: '1rem' }}>Competition Philosophy</h3>
        <p style={{ color: 'var(--text-secondary)' }}>
          I participate in hackathons and competitions to <strong>push my limits</strong> and 
          <strong> solve real-world problems</strong>. Each competition teaches me new skills 
          and helps me understand how to build solutions under pressure. My focus is always 
          on creating impactful, practical solutions that can make a difference.
        </p>
      </motion.div>
    </section>
  )
}

export default Achievements 