import React from "react"
import { Link } from "gatsby"
import socialLinks from "../constants/social_links"
import { StaticImage } from "gatsby-plugin-image"
import { FaArrowCircleDown } from "react-icons/fa"



const Hero = () => {
  return <section className="hero">
      <h2 className="hero-title-secondary">Hello I'm Zack.</h2>
      <h1 className="hero-title-primary">I build <span className="blazing">blazing fast</span> modern experiences.</h1>
      <p className="hero-paragraph">I’m a self taught web designer and web
    developer.</p>
  
  <div className="btn-wraper">
  <a href="https://docs.google.com/document/d/1Ko6HcsyS0QgToOn32kOKlAMvG4l16YYiHCDv_mPz7ek/edit?usp=sharing" target="_blank"><button className="hero-btn-contact-me btn" >View resume</button></a>
  <a href="#projects"><button className="hero-btn-work btn">See work</button></a>
  </div>
  <FaArrowCircleDown  color="white" fontSize="1.5em" className='arrow-down' ></FaArrowCircleDown>
</section> 
}

export default Hero
