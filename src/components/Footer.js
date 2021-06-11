import React from "react"
import {Link} from  'gatsby'
import social from '../constants/social_links'
import logo from "../assets/images/logo.png"
import {useState , useEffect, useRef} from 'react'
import { FaSmile } from "react-icons/fa"



const Footer = () => {

   const [ isCopied , setIsCopied  ] = useState(false)
   const copytext = useRef(null)

   const  copyToClipboard = () => {
        let dummy = document.createElement("input");
        document.body.appendChild(dummy);
        dummy.setAttribute('value', 'belkasmizakariae@gmail.com');
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
        setIsCopied(true)
    }

    // useEffect(()=>{
    //     if()
    //     setTimeout(function(){
    //     copytext.classList.remove(`alert-msg-show`);
    // },2000);
    // })



  return <footer className="footer">
      <div className="footer-title-wraper">
       <h1 className="footer-title">You got a project ? let's talk</h1>
       <div className="alert-msg-container">
    <p className={isCopied ? "alert-msg-show": "alert-msg"} ref={copytext}>email copied <FaSmile color = 'white'></FaSmile></p>
       </div>
       <button className="footer-btn btn" onClick={copyToClipboard}>Copy email</button>
      
       </div>
       <div className="footer-navigation-wraper">
       <Link to="/"><div className="footer-logo"><img className="logo-img" src={logo} alt=""></img></div></Link>
       <nav className="footer-navigation">
           <ul>
              <li><Link to="/projects"><p>Projects</p></Link></li> 
              <li><Link to="/about"><p>About</p></Link></li> 
              <li><Link to="/blog/"><p>Blog</p></Link></li> 
           </ul>
       </nav>
       <div className="footer-social-links">
          <p>follow me on :</p>
          <div className="social-links">

{            social.map(link =>{
        const {id,icon,url} = link
        return <a  href={url} target="_blank">{icon}</a>
})
}
             {/* <a href="https://www.instagram.com/za_ach/"  target="_blank"><i className="fab fa-instagram fa-2x" style={{color: 'white'}}></i></a>
             <a href="https://twitter.com/Zakariae_Bl" target="_blank"><i className="fab fa-twitter fa-2x" style= {{color: 'white'}}></i></a>
             <a href="https://www.facebook.com/zakaria.bel.7165/"  target="_blank"><i className="fab fa-facebook-square fa-2x"></i></a> */}
          </div>
       </div>
       </div>
    </footer>
}

export default Footer
