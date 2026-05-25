import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(function() {
    function onScroll() {
      setScrolled(window.scrollY > 40)
      const ids = ['home', 'about', 'skills', 'experience', 'projects', 'hidden', 'contact']
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(ids[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return function() { window.removeEventListener('scroll', onScroll) }
  }, [])

  function handleClick(e, id) {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className={scrolled ? 'navbar navbar--scrolled' : 'navbar'}>
      <div className="navbar__inner container">

        <a href="#home" className="navbar__logo" onClick={function(e) { handleClick(e, 'home') }}>
          &lt;SP /&gt;
        </a>

        <nav className="navbar__links">
          <a href="#home" className={active === 'home' ? 'navbar__link navbar__link--active' : 'navbar__link'} onClick={function(e) { handleClick(e, 'home') }}>Home</a>
          <a href="#about" className={active === 'about' ? 'navbar__link navbar__link--active' : 'navbar__link'} onClick={function(e) { handleClick(e, 'about') }}>About</a>
          <a href="#skills" className={active === 'skills' ? 'navbar__link navbar__link--active' : 'navbar__link'} onClick={function(e) { handleClick(e, 'skills') }}>Skills</a>
          <a href="#experience" className={active === 'experience' ? 'navbar__link navbar__link--active' : 'navbar__link'} onClick={function(e) { handleClick(e, 'experience') }}>Experience</a>
          <a href="#projects" className={active === 'projects' ? 'navbar__link navbar__link--active' : 'navbar__link'} onClick={function(e) { handleClick(e, 'projects') }}>Projects</a>
          <a href="#hidden" className={active === 'hidden' ? 'navbar__link navbar__link--active' : 'navbar__link'} onClick={function(e) { handleClick(e, 'hidden') }}>Hidden Tab</a>
          <a href="#contact" className={active === 'contact' ? 'navbar__link navbar__link--active' : 'navbar__link'} onClick={function(e) { handleClick(e, 'contact') }}>Contact</a>
        </nav>

        <button className={menuOpen ? 'navbar__hamburger navbar__hamburger--open' : 'navbar__hamburger'} onClick={function() { setMenuOpen(!menuOpen) }} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      <div className={menuOpen ? 'navbar__mobile navbar__mobile--open' : 'navbar__mobile'}>
        <a href="#home" className={active === 'home' ? 'navbar__mobile-link navbar__mobile-link--active' : 'navbar__mobile-link'} onClick={function(e) { handleClick(e, 'home') }}>Home</a>
        <a href="#about" className={active === 'about' ? 'navbar__mobile-link navbar__mobile-link--active' : 'navbar__mobile-link'} onClick={function(e) { handleClick(e, 'about') }}>About</a>
        <a href="#skills" className={active === 'skills' ? 'navbar__mobile-link navbar__mobile-link--active' : 'navbar__mobile-link'} onClick={function(e) { handleClick(e, 'skills') }}>Skills</a>
        <a href="#experience" className={active === 'experience' ? 'navbar__mobile-link navbar__mobile-link--active' : 'navbar__mobile-link'} onClick={function(e) { handleClick(e, 'experience') }}>Experience</a>
        <a href="#projects" className={active === 'projects' ? 'navbar__mobile-link navbar__mobile-link--active' : 'navbar__mobile-link'} onClick={function(e) { handleClick(e, 'projects') }}>Projects</a>
        <a href="#hidden" className={active === 'hidden' ? 'navbar__mobile-link navbar__mobile-link--active' : 'navbar__mobile-link'} onClick={function(e) { handleClick(e, 'hidden') }}>Hidden Tab</a>
        <a href="#contact" className={active === 'contact' ? 'navbar__mobile-link navbar__mobile-link--active' : 'navbar__mobile-link'} onClick={function(e) { handleClick(e, 'contact') }}>Contact</a>
      </div>
    </header>
  )
}