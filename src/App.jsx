import React from 'react'
import Navigationbar from './components/Navigationbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Social from './components/Social'
import Game from './components/Game'


const App = () => {
  return (
    <div>
      <Navigationbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Social />
      <Game />
  

    </div>
  )
}

export default App
