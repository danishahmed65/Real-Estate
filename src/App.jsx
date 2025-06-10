import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'


const App = () => {
  // scroll animation
  useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);

  return (
    <div className='w-full overflow-hidden'>
      <Header />
      <About />
      <Projects />
      <Testimonials />
    </div>
  )
}

export default App
