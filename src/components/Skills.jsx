import './Skills.css'

const skillGroups = [
  {
    id: 0,
    icon: '🎨',
    category: 'Frontend',
    skills: ['React.js', 'HTML5', 'CSS', 'JavaScript', 'Bootstrap'],
  },
  {
    id: 1,
    icon: '⚙️',
    category: 'Backend',
    skills: ['Java', 'Spring Boot', 'Python', 'Django', 'ASP.NET', 'REST APIs'],
  },
  // {
  //   id: 2,
  //   icon: '🤖',
  //   category: 'AI / ML',
  //   skills: ['LangChain', 'HuggingFace', 'Microsoft Copilot Studio', 'Generative AI', 'LLMs', 'Prompt Engineering'],
  // },
  {
    id: 3,
    icon: '🗄️',
    category: 'Database',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    id: 4,
    icon: '🛠️',
    category: 'Tools & DevOps',
    skills: ['Git', 'GitHub', 'Linux', 'VS Code', 'Postman', 'Docker'],
  },
  {
    id: 5,
    icon: '🔒',
    category: 'Security & Networking',
    skills: ['Network Security', 'Firewall Analysis', 'Traffic Monitoring', 'Protocol Documentation'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">

        <p className="section-label">Skills</p>
        <h2 className="section-title">What I <span className="accent">Work With</span></h2>
        <div className="divider"></div>

        <div className="skills__grid">
          {skillGroups.map(function(group) {
            return (
              <div key={group.id} className="skills__card">
                <div className="skills__card-header">
                  <span className="skills__card-icon">{group.icon}</span>
                  <h3 className="skills__card-title">{group.category}</h3>
                </div>
                <div className="skills__chips">
                  {group.skills.map(function(skill) {
                    return (
                      <span key={skill} className="skills__chip">{skill}</span>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}