import React, { useRef } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Experience from './Components/Experience'

const App = () => {
  

  

  return (
    <main className='max-w-8xl mx-auto'>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}

export default App