import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"


const Projects = () => {
  
  return <section id="projects" className="projects">  
    
      <h1 className="projects-title">Projects</h1>

        <div className="projects-wraper">

        <Project />
        
       </div>

  </section>

  
}

export default Projects
