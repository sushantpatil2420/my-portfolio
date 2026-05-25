import "./About.css";

const certifications = [
  { name: 'Java Programming',              issuer: 'FUEL Institute',  icon: '☕' },
  { name: 'Red Hat Certified',             issuer: 'Red Hat Academy', icon: '🎩' },
  { name: 'Cybersecurity Analyst Simulation', issuer: 'TATA',         icon: '🔒' },
  { name: 'Web Development',               issuer: 'Great Learning',  icon: '🌐' },
  { name: 'MySQL',                         issuer: 'Great Learning',  icon: '🗄' },
]

const education = [
  {
    school:
      "Chh. Shahu Institute of Business Education and Research (CSIBER), Kolhapur",
    degree: "M.Sc Computer Science in Cyber Security",
    period: "June 2023 – May 2025",
    grade: "CGPA: 6.20",
    link: "#",
    linkLabel: "View Degree",
  },
  {
    school: "Doodhsakhar Mahavidyalaya, Bidri",
    degree: "B.Sc in Computer Science",
    period: "July 2020 – June 2023",
    grade: "CGPA: 9.34",
    link: "#",
    linkLabel: "View Degree",
  },
  {
    school: "Doodhsakhar Vidyaniketan & Jr. College, Bidri",
    degree: "Higher Secondary Certificate (HSC) in Science",
    period: "June 2018 – July 2020",
    grade: "Percentage: 60%",
    link: null,
    linkLabel: null,
  },
];

const highlights = [
  'Building full-stack applications with Java Spring Boot, React.js and PostgreSQL',
  'Experienced in Python/Django, ASP.NET, front-end development and Network Security',
  'Practical awareness of Linux systems and basic cyber security',
  'Consistent focus on writing clean, functional and security-conscious code',
];

const languages = ["English", "Hindi", "Marathi"];

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <p className="section-label">Who I Am</p>
        <h2 className="section-title">
          About <span className="accent">Me</span>
        </h2>
        <div className="divider"></div>

        <div className="about__grid">
          {/* Left — Education */}
          <div className="about__left">
            <h3 className="about__col-title">Education</h3>
            <div className="about__edu-list">
              {education.map(function (item, i) {
                return (
                  <div className="about__edu-card" key={i}>
                    <h4 className="about__edu-school">{item.school}</h4>
                    <p className="about__edu-degree">{item.degree}</p>
                    <p className="about__edu-period">{item.period}</p>
                    {item.grade && (
                      <p className="about__edu-grade">{item.grade}</p>
                    )}
                    {item.link && (
                      <a
                        href={item.link}
                        className="about__edu-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.linkLabel}
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 17L17 7M7 7h10v10" />
                        </svg>
                      </a>
                    )}
                  </div>
                );
              })}
            </div>

            <h3 className="about__col-title" style={{ marginTop: '40px' }}>Certifications</h3>
<div className="about__cert-list">
  {certifications.map(function(cert, i) {
    return (
      <div key={i} className="about__cert-card">
        <span className="about__cert-icon">{cert.icon}</span>
        <div className="about__cert-info">
          <p className="about__cert-name">{cert.name}</p>
          <p className="about__cert-issuer">{cert.issuer}</p>
        </div>
      </div>
    )
  })}
</div>
          </div>

          {/* Right — Professional Overview */}
          <div className="about__right">
            <h3 className="about__col-title">Professional Overview</h3>
            <div className="about__overview-card">
              <p className="about__overview-bio">
                <p className="about__overview-bio">
                  Hey! I'm <strong>Sushant Patil</strong>, a Full Stack
                  Developer based in
                  <strong> Kolhapur, Maharashtra</strong>. I hold an MSc in
                  Computer Science with specialization in Cyber Security from
                  CSIBER College, Kolhapur. Currently working as a{" "}
                  <strong>Software Developer Trainee</strong> at YashUma Global
                  Venture Pvt. Ltd., delivering production-level applications
                  with <strong>Java Spring Boot</strong>,
                  <strong> React.js</strong>, and <strong>PostgreSQL</strong>.
                  Experienced in Python/Django, ASP.NET, and front-end
                  development — writing code that is functional, clean, and
                  security-conscious.
                </p>
              </p>

              <ul className="about__highlights">
                {highlights.map(function (h, i) {
                  return (
                    <li key={i} className="about__highlight-item">
                      <span className="about__highlight-dot"></span>
                      {h}
                    </li>
                  );
                })}
              </ul>

              <div className="about__languages">
                <p className="about__languages-label">Languages</p>
                <div className="about__lang-tags">
                  {languages.map(function (lang) {
                    return (
                      <span key={lang} className="about__lang-tag">
                        {lang}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
