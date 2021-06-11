import React from "react"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import { GatsbyImage , getImage, StaticImage  } from "gatsby-plugin-image"




const About = () => {


  return (
    <Layout>
      <Seo  title = 'about'/>
      <section>
    <div className="about-me">
        <h1  className="about-me-title">WHO AM I :</h1>
        <h2  className="about-me-subtitle">My name is Zakariae Belkasmi, I'm a self taught web designer and developer, I use my technical knowledge to create value into the world <i className="fas fa-globe"></i>.</h2>
        <h2  className="about-me-paragraph">I like topics about learning and optimizing the human brain and body, Interested in neuroscience <i className="fas fa-brain"></i>, Also I'm a gym addict <i className="fas fa-dumbbell"></i>.</h2> 
        <div className="links">
           <h1 className="links-title">↓ let's have a conversation:↓</h1>
            <div className="email flex">
               <i className="far fa-envelope " style={{color : 'white' }}></i>
                <p>belkasmizakariae@gmail.com</p>
            </div>
            <div className="twitter flex">
               <a href="https://twitter.com/Zakariae_Bl" target="_blank"><i className="fab fa-twitter" style={{ color : "white" }}></i></a>
                <p>Zack99</p>
            </div>
        </div>
    </div>
    </section>
    </Layout>
  )
}





export default About
