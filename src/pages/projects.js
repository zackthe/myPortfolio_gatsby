import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
const ProjectsPage = () => {
  
  return (
    <Layout>
      <Seo  title = 'Projects'/>
      <Projects />
    </Layout>
  )
}

export default ProjectsPage
