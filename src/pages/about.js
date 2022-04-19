import React from "react"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import { GatsbyImage , getImage, StaticImage  } from "gatsby-plugin-image"
import {CgMailOpen} from 'react-icons/cg'
import {FaTwitter} from 'react-icons/fa'


const About = () => {


return (
  <Layout>
    <Seo  title = 'about'/>
      <section className='about-me-container'>
          <div className="about-me">
              <h1  className="about-me-title">About me :</h1>
                {/*<h2  className="about-me-subtitle">My name is Zakariae Belkasmi, I'm a self taught web designer and developer, I use my technical knowledge to create value into the world <i className="fas fa-globe"></i>.</h2>
                <h2  className="about-me-paragraph">I like topics about learning and optimizing the human brain and body, Interested in neuroscience <i className="fas fa-brain"></i>, Also I'm a gym addict <i className="fas fa-dumbbell"></i>.</h2>  */}
              <div>
                <p className='about-me-paragraph'>Hey there 👋, I appreciate the fact that you’re taking time to read about me, it would be awesome for me to connect with you.</p>
                <p className='about-me-paragraph'>My name is Zakariae Belkasmi and I’m a frontend web developer based on Morocco, I started my journey on the late of 2019, and It was one of the best decisions I made in my entire life,
                I’m 22 years old, and I'm currently working as a freelancer.
                </p>
                <p className='about-me-paragraph'>
                I mainly work with Javascript, React and gatsby, I found myself productive using these tools 🛠️ to build projects.
                </p>
                <p className='about-me-paragraph'>
                Beside tech, I love topics related to learning, neuroscience and psychology 🧠. I love to read books 📚 and podcasts about that, also I am fascinated by ancient philosophy like the stoic philosophy.
                </p>
                <p className='about-me-paragraph'>
                I'm also a huge fan of Rock and metal music 🤘.
                </p>
              </div>

          <div className="links">
            <h1 className="links-title">↓ Follow me on twitter ↓</h1>
              {/* <div className="email flex">
                  <CgMailOpen style ={{color : 'white'}} size='25'></CgMailOpen>
                  <p className="email-address">belkasmizakariae@gmail.com</p> 
              </div> */}
              <div className="twitter flex">            
              <a href="https://twitter.com/Zakariae_Bl" target="_blank"><FaTwitter></FaTwitter></a>
                  <p>Zack99</p>
              </div>
          </div>
      </div>
      </section>
      </Layout>
  )
}





export default About
