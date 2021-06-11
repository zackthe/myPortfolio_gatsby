import React from 'react'
import { Link } from "gatsby"


const NavLink = props => {
    if (!props.test) {
      return <Link to={props.url}>{props.text}</Link>
    } else {
      return <span>{''}</span>
    }
  }

const Pagination = ({pageContext}) =>{

    const {index, first, last, pageCount } = pageContext

    const previousUrl = index - 1 === 1 ? '/blog' : '/blog/'+(index - 1).toString()
  
    const nextUrl = '/blog/'+(index + 1).toString();  console.log(pageContext)
  
    const current = index; console.log(index)


    return (
        <>
       <div  className = 'pagination ' style={{display : 'flex' }}>
        
        <div className="previousLink">
        <NavLink test={first} url={previousUrl} text="← Previous" />
        </div>

      {Array.from({ length: pageCount }, (_, i) => (
        <Link key={`pagination-number${i + 1}`} to={`/blog/${i === 0 ? "" : i + 1}`} className={ i + 1 === current ? 'active' : 'non-active'}>
          {i + 1}
        </Link>
      ))}

      <div className="nextLink">
        <NavLink test={last} url={nextUrl} text=" Next →" />
      </div>
      </div> 
      </>
    )
}

export default Pagination
