import { useState } from 'react'
import './Project.css'

const projects = [
  {
    id: 0,
    icon: '🍔',
    title: 'Food Delivery Web App',
    badge: 'Company',
    desc: 'Full-stack food ordering platform with REST APIs handling menu management, cart operations, and order processing. Modular React.js UI with PostgreSQL schema for restaurants, menus and orders.',
    tags: ['Spring Boot', 'React.js', 'PostgreSQL', 'REST API'],
  },
  {
    id: 1,
    icon: '💧',
    title: 'Water Jar Distribution App',
    badge: 'Company',
    desc: 'Order and delivery tracking system covering customer records and inventory via Spring Boot REST APIs. Admin-facing React.js dashboard for delivery scheduling and order status updates.',
    tags: ['Spring Boot', 'React.js', 'PostgreSQL'],
  },
  {
    id: 2,
    icon: '✍️',
    title: 'BlogSpot Website',
    badge: 'Personal',
    desc: 'Full-stack blogging platform with Python Django handling backend logic, ORM models, and user authentication. Interactive front-end with HTML/CSS and JavaScript including form validation.',
    tags: ['Django', 'Python', 'JavaScript', 'SQLite'],
  },
  
  {
    id: 4,
    icon: '📚',
    title: 'Library Management System',
    badge: 'College',
    desc: 'Library management system built with Java Spring Boot. Performed full CRUD operations to manage books, members, and borrowing records with a clean REST API architecture.',
    tags: ['Java', 'Spring Boot', 'REST API', 'MySQL'],
  },
  {
    id: 5,
    icon: '🏦',
    title: 'Banking Application',
    badge: 'College',
    desc: 'A banking application program built using Core Java. Supports account creation, deposits, withdrawals, balance enquiry and transaction history with object-oriented design.',
    tags: ['Core Java', 'OOP'],
  },
  {
    id: 3,
    icon: '🛒',
    title: 'E-Commerce Store',
    badge: 'College',
    desc: 'Online shopping platform with product listing, cart management, and user authentication. Built with Java Spring Boot backend and responsive frontend using HTML, CSS and JavaScript.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'JavaScript'],
  },
  {
    id: 6,
    icon: '🔒',
    title: 'Network Security Dashboard',
    badge: 'Internship',
    desc: 'Cyber security monitoring dashboard built during internship. Visualizes firewall logs, network traffic analysis, and protocol documentation with alert notifications.',
    tags: ['Python', 'Linux', 'Networking', 'Security'],
  },
]

export default function Projects() {
  const [current, setCurrent] = useState(0)

  var total = projects.length
  var visible = 2
  var dotCount = Math.ceil(total / visible)
  var activeDot = Math.floor(current / visible)

  function next() {
    setCurrent(function(c) {
      return c + visible >= total ? 0 : c + visible
    })
  }

  function prev() {
    setCurrent(function(c) {
      return c - visible < 0 ? total - visible : c - visible
    })
  }

  function goTo(i) {
    setCurrent(i * visible)
  }

  return (
    <section id="projects" className="section projects">
      <div className="container">

        <p className="section-label">Projects</p>
        <h2 className="section-title">Things I've <span className="accent">Built</span></h2>
        <div className="divider"></div>

        <div className="proj__outer">
          <div
            className="proj__track"
            style={{ transform: 'translateX(calc(' + current + ' * (-50% - 10px)))' }}
          >
            {projects.map(function(p) {
              return (
                <div key={p.id} className="proj__card">

                  <div className="proj__card-top">
                    <div className="proj__icon">{p.icon}</div>
                    <span className={'proj__badge proj__badge--' + p.badge.toLowerCase()}>
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="proj__title">{p.title}</h3>
                  <p className="proj__desc">{p.desc}</p>

                  <div className="proj__tags">
                    {p.tags.map(function(t) {
                      return <span key={t} className="proj__tag">{t}</span>
                    })}
                  </div>

                </div>
              )
            })}
          </div>
        </div>

        <div className="proj__controls">
          <div className="proj__dots">
            {Array.from({ length: dotCount }).map(function(_, i) {
              return (
                <button
                  key={i}
                  className={i === activeDot ? 'proj__dot proj__dot--active' : 'proj__dot'}
                  onClick={function() { goTo(i) }}
                />
              )
            })}
          </div>
          <div className="proj__arrows">
            <button className="proj__arrow" onClick={prev}>←</button>
            <button className="proj__arrow" onClick={next}>→</button>
          </div>
        </div>

      </div>
    </section>
  )
}