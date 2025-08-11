import React from 'react'
import '../styles/Team.css'

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Lead Developer',
      image: '👨‍💻',
      bio: 'Full-stack developer with 8+ years of experience in modern web technologies.',
      skills: ['React', 'Node.js', 'Python', 'AWS'],
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'UI/UX Designer',
      image: '👩‍🎨',
      bio: 'Creative designer passionate about creating intuitive and beautiful user experiences.',
      skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research'],
      social: {
        linkedin: '#',
        behance: '#',
        dribbble: '#'
      }
    },
    {
      id: 3,
      name: 'Mike Rodriguez',
      role: 'Mobile Developer',
      image: '👨‍💻',
      bio: 'Mobile development expert specializing in iOS and Android applications.',
      skills: ['React Native', 'Swift', 'Kotlin', 'Firebase'],
      social: {
        linkedin: '#',
        github: '#',
        medium: '#'
      }
    },
    {
      id: 4,
      name: 'Emily Watson',
      role: 'Project Manager',
      image: '👩‍💼',
      bio: 'Experienced project manager ensuring smooth delivery and client satisfaction.',
      skills: ['Agile', 'Scrum', 'Risk Management', 'Team Leadership'],
      social: {
        linkedin: '#',
        twitter: '#'
      }
    }
  ]

  return (
    <section id="team" className="team">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            Our talented team of professionals is dedicated to bringing your vision to life.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map(member => (
            <div key={member.id} className="team-member">
              <div className="member-avatar">
                <div className="avatar-emoji">{member.image}</div>
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-bio">{member.bio}</p>
                
                <div className="member-skills">
                  {member.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>

                <div className="member-social">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="social-link linkedin">
                      LinkedIn
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} className="social-link github">
                      GitHub
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="social-link twitter">
                      Twitter
                    </a>
                  )}
                  {member.social.behance && (
                    <a href={member.social.behance} className="social-link behance">
                      Behance
                    </a>
                  )}
                  {member.social.dribbble && (
                    <a href={member.social.dribbble} className="social-link dribbble">
                      Dribbble
                    </a>
                  )}
                  {member.social.medium && (
                    <a href={member.social.medium} className="social-link medium">
                      Medium
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
