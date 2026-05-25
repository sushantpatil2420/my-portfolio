import './Experience.css'

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">

        <p className="section-label">Experience</p>
        <h2 className="section-title">Where I've <span className="accent">Worked</span></h2>
        <div className="divider"></div>

        <div className="exp__timeline">

          <div className="exp__item">
            <div className="exp__dot"></div>
            <div className="exp__card">
              <div className="exp__header">
                <div>
                  <h3 className="exp__role">Software Developer Trainee</h3>
                  <p className="exp__company">Yashuma Global Venture pvt. ltd.</p>
                  <p className="exp__period">Feb 2026 – Present · Kolhapur, Maharashtra</p>
                </div>
                <span className="exp__badge">Trainee</span>
              </div>
             <ul className="exp__points">
                <li className="exp__point"><span className="exp__arrow">▹</span>Engaged in a 6-month full-stack training programme, delivering production-level applications with Java Spring Boot, React.js, and PostgreSQL.</li>
                <li className="exp__point"><span className="exp__arrow">▹</span>Engineered REST APIs in Spring Boot for real-world business applications.</li>
                <li className="exp__point"><span className="exp__arrow">▹</span>Crafted dynamic React.js UI components with reusable architecture and clean design.</li>
                <li className="exp__point"><span className="exp__arrow">▹</span>Structured and managed relational data using PostgreSQL schemas.</li>
              </ul>
            </div>
          </div>

          <div className="exp__item">
            <div className="exp__dot"></div>
            <div className="exp__card">
              <div className="exp__header">
                <div>
                  <h3 className="exp__role">Core Java Training</h3>
                  <p className="exp__company">FUEL Institute, Pune</p>
                  <p className="exp__period">March 2025 · Pune, Maharashtra</p>
                </div>
                <span className="exp__badge">Training</span>
              </div>
               <ul className="exp__points">
                  <li className="exp__point"><span className="exp__arrow">▹</span>Completed hands-on Java training covering OOP principles and Collections Framework.</li>
                  <li className="exp__point"><span className="exp__arrow">▹</span>Worked with core Java language, MySQL database and explored IntelliJ IDEA.</li>
                </ul>
            </div>
          </div>

           <div className="exp__item">
            <div className="exp__dot"></div>
            <div className="exp__card">
              <div className="exp__header">
                <div>
                  <h3 className="exp__role">Cyber Security Intern</h3>
                  <p className="exp__company">DCDIUM Technologies Pvt. Ltd.</p>
                  <p className="exp__period">Jun 2024 – Nov 2024 · Pune, Maharashtra</p>
                </div>
                <span className="exp__badge">Internship</span>
              </div>
              <ul className="exp__points">
                <li className="exp__point"><span className="exp__arrow">▹</span>Configured firewall solutions and conducted remote security analysis.</li>
                <li className="exp__point"><span className="exp__arrow">▹</span>Performed network troubleshooting and protocol documentation.</li>
                <li className="exp__point"><span className="exp__arrow">▹</span>Gained hands-on experience in network security and cyber defence tools.</li>
              </ul>
              <a href="#" className="exp__cert-link">View Internship Certificate ↗</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}