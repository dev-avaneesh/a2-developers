import React from 'react'
import '../styles/Services.css'

const Services = () => {
  const services = [
    {
      id: 1,
      icon: '💻',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies and best practices.',
      features: ['Responsive Design', 'SEO Optimized', 'Performance Focused']
    },
    {
      id: 2,
      icon: '📱',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['Native Performance', 'Cross-Platform', 'App Store Ready']
    },
    {
      id: 3,
      icon: '🔄',
      title: 'API Development',
      description: 'Robust and scalable APIs that power your applications and integrations.',
      features: ['RESTful APIs', 'GraphQL', 'Microservices']
    },
    {
      id: 4,
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Cloud infrastructure and deployment solutions for scalable applications.',
      features: ['AWS/Azure/GCP', 'DevOps', 'Monitoring']
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We offer comprehensive development solutions to help your business thrive in the digital world.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
