import { useState } from 'react'
import './Contact.css'

const profiles = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sushant-patil-605b07322' },
  { label: 'GitHub', url: 'https://github.com/sushantpatil2420' },
//   { label: 'LeetCode', url: 'https://leetcode.com/yourusername' },
//   { label: 'GeeksforGeeks', url: 'https://geeksforgeeks.org/user/yourusername' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setSent(true)
  }

  function handleReset() {
    setForm({ name: '', email: '', message: '' })
    setSent(false)
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">

        <p className="section-label">Contact</p>
        <h2 className="section-title">Get in <span className="accent">Touch</span></h2>
        <div className="divider"></div>

        <div className="contact__grid">

          {/* Left — Info */}
          <div className="contact__left">
            <h3 className="contact__col-title">Contact Information</h3>

            <ul className="contact__info-list">
              <li className="contact__info-item">
                <span className="contact__info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                <a href="mailto:patilsushant2420@gmail.com" className="contact__info-text">
                  patilsushant2420@gmail.com
                </a>
              </li>
              <li className="contact__info-item">
                <span className="contact__info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>
                <span className="contact__info-text">+91 9130332420</span>
              </li>
              <li className="contact__info-item">
                <span className="contact__info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                <span className="contact__info-text">Kolhapur, Maharashtra, India</span>
              </li>
            </ul>

            <h3 className="contact__col-title contact__col-title--profiles">Professional Profiles</h3>
            <div className="contact__profiles">
              {profiles.map(function(p) {
                return (
                  <a key={p.label} href={p.url} target="_blank" rel="noreferrer" className="contact__profile-btn">
                    {p.label}
                  </a>
                )
              })}
            </div>
          </div>

          {/* Right — Form */}
          <div className="contact__right">
            {sent ? (
              <div className="contact__success">
                <span className="contact__success-icon">✉️</span>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
                <button className="btn btn--primary" onClick={handleReset}>Send Another</button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__field">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Sushant Patil"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="email">Your Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="hello@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="contact__submit">
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}