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
        <Link to="/" aria-label='home page'>
        <div className="footer-logo"><img className="logo-img" src={logo} alt="logo" width='80px' height='35px' ></img>
        </div>
        </Link>
        <button className={ open ? "humberger-menu open" : "humberger-menu" } onClick = {() => {isOpen(!open)}} name="humberger-menu" value="humberger-menu">
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
