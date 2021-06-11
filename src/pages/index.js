import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import Skills from "../components/Skills"
const IndexPage = () => {
  return (
    <>
    <Seo title = 'home' />
    <Layout>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
    </Layout>
    </>
  )
}

export default IndexPage
