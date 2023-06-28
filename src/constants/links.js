import React from 'react'
import { Link } from "gatsby"

const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about/",
  },
  {
    id: 3,
    text: "projects",
    url: "/projects/",
  },
  {
    id: 5,
    text: "Blog",
    url: "/blog/",
  },
]


const templinks = data.map(link =>{
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})

export default ({styleClass}) =>{
  return (
    <ul className = {`navigation-menu-list ${styleClass ? styleClass : ''}`}>
      {templinks}
      {console.log(templinks)}
    </ul>
  )
}
