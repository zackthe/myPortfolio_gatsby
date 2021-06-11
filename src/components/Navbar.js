import React from "react"
import logo from "../assets/images/logo.png"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import { Link } from "gatsby"
import {useState} from "react"
import { StaticImage } from "gatsby-plugin-image"

const Navbar = () => {

  const [open , isOpen] = useState(false)

  return (
    <>
    <nav className="navigation">
        <div className="navigation-header">
        <Link to="/" aria-label='home page'>
        <div className="footer-logo"><StaticImage className="logo-img" src='../assets/images/logo.png' alt="logo" ></StaticImage>
        </div>
        </Link>
        <button className={ open ? "humberger-menu open" : "humberger-menu" } onClick = {() => {isOpen(!open)}} aria-label='menu' >
            <span className="hamburger"></span>
        </button>
        </div>
          {/* <div className="navigation-menu"> */}
        <PageLinks styleClass={open ? 'show' : ''}></PageLinks>
        {/* </div>   */}
   </nav>
    </>
  )
  
}

export default Navbar
