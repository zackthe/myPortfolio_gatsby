import React from "react"
import { Link } from "gatsby"
import socialLinks from "../constants/social_links"
import { StaticImage } from "gatsby-plugin-image"
import { FaArrowCircleDown } from "react-icons/fa"



const Hero = () => {
  return <section className="hero">
    <div className="hero-text-wrapper">
      <div className="hero-right">
      {/*<h2 className="hero-title-secondary">Hello, my name is <span className="name"> zakariae belkasmi.</span></h2>*/}
      <h1 className="hero-title-primary">Hi, I am  zakariae belkasmi. </h1>
      <h1 className="hero-title-primary" >I'm a <span className="web-developer"> frontend web developer.</span></h1>
      <p className="hero-paragraph">I’m a passionate self taught frontend web
    developer, I enjoy building projects with Html/css, javascript and its framework like react and gatsby. </p>
      </div>
      <div>
  {/*
   <StaticImage 
      className="hero-profile_photo"
      src="C:/Users/zack/Desktop/Myportfolio-gatsby/src/assets/images/profile_photo.png"
      alt="myself"
      placeholder="blurred"
      layout="fixed"
      width={200}
      height={200}
                  />
  */}
    
      {/*<span className="green-icon"></span>*/}
      </div>
    </div>
 <div className="hero-btn-wrapper">
  <a href="#projects"><button className="hero-btn-work btn">See work</button></a>
  <a href="https://docs.google.com/document/d/1Ko6HcsyS0QgToOn32kOKlAMvG4l16YYiHCDv_mPz7ek/edit?usp=sharing" target="_blank" rel="noreferrer"><button className="hero-btn-contact-me btn" >View resume</button></a>
  </div>
  {/*<FaArrowCircleDown  color="white" fontSize="1.5em" className='arrow-down' ></FaArrowCircleDown>*/}
  {/* <div className="glowing-background"></div> */}
  {/* <StaticImage 
   className="blur-cyan"
   src="C:/Users/zack/Desktop/Myportfolio-gatsby/src/assets/images/blur-cyan.png"
   alt="blur-cyan"
  />   */}
   {/* <StaticImage 
   className="blur-cyan-2"
   src="C:/Users/zack/Desktop/Myportfolio-gatsby/src/assets/images/blur-cyan.png"
   alt="blur-cyan-2"
  />  */}
</section> 
}

export default Hero
