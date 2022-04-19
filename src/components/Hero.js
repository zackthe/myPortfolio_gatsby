import React from "react"
import { Link } from "gatsby"
import socialLinks from "../constants/social_links"
import { StaticImage } from "gatsby-plugin-image"
import { FaArrowCircleDown } from "react-icons/fa"



const Hero = () => {
  return <section className="hero">
    <div className="hero-text-wrapper">
    <h2 className="hero-title-secondary">Hello I'm Zack 👋</h2>
      <h1 className="hero-title-primary">I HELP STARTUPS BUILD <span className="blazing">BLAZING FAST</span> EXPERIENCES<span style = {{ color : '#b7094c'}}>.</span></h1>
      <p className="hero-paragraph">I’m a self-taught frontend web developer crafting tools with Javascript and ReactJs.</p>
    </div>
  <div className="hero-btn-wrapper">
  <a href="https://docs.google.com/document/d/1Ko6HcsyS0QgToOn32kOKlAMvG4l16YYiHCDv_mPz7ek/edit?usp=sharing" target="_blank" rel="noreferrer"><button className="hero-btn-contact-me btn" >View resume</button></a>
  <a href="#projects"><button className="hero-btn-work btn">See work</button></a>
  </div>
  <div className='arrow-down-wrapper' > 
  <FaArrowCircleDown  color="white" fontSize="1.5em" className='arrow-down' size={30}></FaArrowCircleDown>
  </div>
  {/* <div style= {{ display : 'hidden'}}>
    <div id='stars'></div>
    <div id='stars2'></div>
    <div id='stars3'></div>
  </div> */} 
</section> 
}

export default Hero
