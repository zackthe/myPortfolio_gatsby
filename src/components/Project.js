import React from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { Link } from "gatsby"
import projects from '../constants/projects'
import {graphql , useStaticQuery} from 'gatsby'


const query = graphql`
  {
    allProjectDataJson {
      nodes {
        description
        title
        link
        tag
        img {
          childImageSharp {
            gatsbyImageData( 
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }
`

const Project = () => {

  const data = useStaticQuery(query);
  const {allProjectDataJson : { nodes }} = data
  console.log(nodes)

  return  <>

  {
    nodes.map(project=>{
      
        const {title,img: { childImageSharp : {gatsbyImageData}},description , tag, link } = project

       return <>
       {/*  <div className="project-card">
        <GatsbyImage image={gatsbyImageData} alt="image" className="project__img" />
        <div className="project-card-wrapper">
        <div className="project-card-title">
        <h2 className="project-title">{title}</h2>
        <p className="project-paragraph">{description}</p>
        </div>
        <a href={link} target="_blank" style={{cursor : "pointer"}} rel="noreferrer"><p className="project_details">view project</p></a>
        </div>
        </div>*/}
        <div className="project-card">
        <GatsbyImage image={gatsbyImageData} alt="image" className="project__img" />
        <div className="project-card-wrapperr">
        <div className="project-card-title">
        <h2 className="project-title">{title}</h2>
        <div>
          <p className="project-stack">{tag}</p>
        </div>
        </div>
        <p className="project-paragraph">{description}</p>

        <a href={link} target="_blank" style={{cursor : "pointer"}} rel="noreferrer"><button className="project-view-project-btn">view project</button></a>
       {/* <a href={link} target="_blank" style={{cursor : "pointer"}} rel="noreferrer"><button className="project-view-project-btn"><p className="project_details">view project</p></button></a> */} 

        </div>
        </div>
        </>

    })
  }

  
  </>
}

export default Project
