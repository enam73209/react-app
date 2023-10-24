import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Service from './components/Service'

import Footer from './components/Footer'
import Project from './components/Project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Hero/>
     <About/>
     <Service/>
     <Project/>
     <Footer/>
    </>
  )
}

export default App
