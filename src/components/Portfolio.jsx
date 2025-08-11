import React, { useState } from 'react'
import '../styles/Portfolio.css'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: '🛒',
      description: 'A modern e-commerce solution with advanced features and seamless user experience.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'mobile',
      image: '🏦',
      description: 'Secure and user-friendly mobile banking application for financial institutions.',
      technologies: ['React Native', 'Firebase', 'Stripe'],
      link: '#'
    },
    {
      id: 3,
      title: 'Project Management Tool',
      category: 'web',
      image: '📊',
      description: 'Comprehensive project management platform with team collaboration features.',
      technologies: ['Vue.js', 'Laravel', 'MySQL'],
      link: '#'
    },
    {
      id: 4,
      title: 'Food Delivery App',
      category: 'mobile',
      image: '🍕',
      description: 'On-demand food delivery application with real-time tracking.',
      technologies: ['Flutter', 'Node.js', 'PostgreSQL'],
      link: '#'
    },
    {
      id: 5,
      title: 'Learning Management System',
      category: 'web',
      image: '📚',
      description: 'Educational platform for online learning and course management.',
      technologies: ['Angular', 'Django', 'PostgreSQL'],
      link: '#'
    },
    {
      id: 6,
      title: 'Fitness Tracking App',
      category: 'mobile',
      image: '💪',
      description: 'Personal fitness tracking application with workout planning.',
      technologies: ['React Native', 'GraphQL', 'AWS'],
      link: '#'
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Portfolio</h2>
          <p className="section-subtitle">
            Explore our latest projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>

        <div className="portfolio-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="portfolio-item">
              <div className="portfolio-image">
                <div className="project-emoji">{project.image}</div>
              </div>
              <div className="portfolio-content">
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
                <div className="portfolio-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a href={project.link} className="portfolio-link">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
