import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Blogpost = ({title,path,image,excerpt}) =>{

    console.log(excerpt)

    return (
        <li>
                <GatsbyImage  image ={image} alt="post-img" className="post-img"/>
                
                <div className="post-title-wrapper">
                <h3>
                  <Link to={path} className='post-link'> {title}</Link>
                </h3>
                <p style={{color:'#828282'}}>{excerpt}</p>
                <Link className="post-read-more" to={path} > Read more → </Link>
                </div>

        </li>
    )

}


export default Blogpost