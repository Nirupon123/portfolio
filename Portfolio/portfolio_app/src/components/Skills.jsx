import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Code, Database, Palette } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "AI/ML",
      icon: Brain,
      skills: [
        "Deep Learning",
        "Image Classification",
        "NLP",
        "Retrieval-Augmented Generation(RAG) Development",
        "Domain-specific Model Fine-tuning",
        "Computer Vision",
        "Data Analysis",
      ]
    },
    {
      title: "Frontend/UI-UX",
      icon: Palette,
      skills: [
        "React.js",
        "Tailwind CSS",
        "Framer Motion",
        "Responsive Design",
        "Modern UI/UX",
        "Interactive Components"
      ]
    },
    {
      title: "Backend",
      icon: Code,
      skills: [
        "Python",
        "Flask(Learning)",
        "Node.js/Express (Learning)",
        "API Development",
        "Server-side Logic (Learning)",
        "Database Integration (Learning)",
        "CI/CD"
      ]
    },
    {
      title: "Data Libraries",
      icon: Database,
      skills: [
        "Pandas",
        "Rasterio",
        "GeoPandas",
        "TensorFlow",
        "NumPy",
        "Scikit-learn", 
        "PyTorch",
        "Keras",
      ]
    }
  ]

  const programmingLanguages = [
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "#3776AB"
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "#F7DF1E"
    },
    {
      name: "Java",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      color: "#ED8B00"
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61DAFB"
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "#339933"
    },
    {
      name: "HTML5",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "#E34F26"
    },
    {
      name: "CSS3",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "#1572B6"
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "#F05032"
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "#47A248"
    },
    {
      name: "MySQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "#4479A1"
    },
    {
      name: "Flask",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
      color: "#000000"
    }
  ]

  return (
    <section id="skills" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Skills & Technologies
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="skills-grid"
      >
        {skillCategories.map((category, index) => {
          const IconComponent = category.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="skill-category"
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <IconComponent size={32} color="var(--neon-green)" />
              </div>
              <h3 className="skill-category-title">{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 + idx * 0.05 }}
                    viewport={{ once: true }}
                    className="skill-item"
                  >
                    <span className="skill-icon">▸</span>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        style={{ 
          textAlign: 'center', 
          marginTop: '3rem',
          marginBottom: '2rem'
        }}
      >
        <h3 style={{ color: 'var(--neon-green)', marginBottom: '2rem' }}>Programming Languages & Tools</h3>
        <div className="languages-scroller">
          <div className="languages-track">
            {/* First set of languages */}
            {programmingLanguages.map((lang, index) => (
              <motion.div
                key={`first-${index}`}
                className="language-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <img 
                  src={lang.logo} 
                  alt={lang.name}
                  className="language-logo"
                />
                <span className="language-name">{lang.name}</span>
              </motion.div>
            ))}
            {/* Second set for seamless loop */}
            {programmingLanguages.map((lang, index) => (
              <motion.div
                key={`second-${index}`}
                className="language-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + (index + programmingLanguages.length) * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <img 
                  src={lang.logo} 
                  alt={lang.name}
                  className="language-logo"
                />
                <span className="language-name">{lang.name}</span>
              </motion.div>
            ))}
            {/* Third set for perfect loop */}
            {programmingLanguages.map((lang, index) => (
              <motion.div
                key={`third-${index}`}
                className="language-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + (index + programmingLanguages.length * 2) * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <img 
                  src={lang.logo} 
                  alt={lang.name}
                  className="language-logo"
                />
                <span className="language-name">{lang.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
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
        <Brain size={32} color="var(--neon-green)" style={{ marginBottom: '1rem' }} />
        <h3 style={{ color: 'var(--neon-green)', marginBottom: '1rem' }}>Skill Philosophy</h3>
        <p style={{ color: 'var(--text-secondary)' }}>
          I focus on <strong>practical application</strong> over theoretical knowledge. 
          Every skill I learn is applied to real-world problems, especially in areas 
          that can benefit underserved communities. I believe in continuous learning 
          and adapting to new technologies as they emerge.
        </p>
      </motion.div>
    </section>
  )
}

export default Skills 