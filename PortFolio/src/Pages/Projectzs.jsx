import React,{useEffect} from 'react'

import Project from '../Home/Header/Project/Project'
import Header from '../Home/Header/Head/Header'
import P_services from '../Home/Header/Service/P_services'
const Projectzs = () => {
  useEffect(()=>{
    document.title="Project "
  })
  return (
    <div style={{backgroundColor:"aliceblue"}}>
      <Header/>
      <Project/>
      <P_services/>
    </div>
  )
}

export default Projectzs
