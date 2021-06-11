import React from "react"
import logo from "../assets/images/logo.png"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import { Link } from "gatsby"
import {useState} from "react"

const Navbar = () => {

  const [open , isOpen] = useState(false)

  return (
    <>
    <nav className="navigation">
        <div className="navigation-header">
        <Link to="/">
        <div className="footer-logo"><img className="logo-img" src={logo} alt=""></img>
        </div>
        </Link>
        <button id="humberger-menu" className={ open ? "humberger-menu open" : "humberger-menu" } onClick = {() => {isOpen(!open)}}>
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
