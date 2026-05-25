import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Project'
import HiddenTab from './components/HiddenTab'
import Contact from './components/Contact'
import Footer from './components/Footer'



function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills/>
      <Experience />
      <Projects />
      <HiddenTab />
      <Contact />
      <Footer />
    </div>
  )
}

export default App