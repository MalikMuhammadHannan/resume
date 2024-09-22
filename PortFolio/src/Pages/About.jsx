import React,{useEffect} from 'react'
import Header from '../Home/Header/Head/Header'
import Info from '../Home/Header/info/Info'

import Skills from '../About/Skills'

import Services from '../Home/Header/Service/P_services'

const About = () => {
  useEffect(()=>{
    document.title="About"
  })
  return (
    <div>
      <Header />
      <Info />
      <Skills />
      <Services />
    </div>
  )
}

export default About
