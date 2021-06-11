import React from 'react'
import {graphql , useStaticQuery} from 'gatsby'
import { GatsbyImage , getImage, StaticImage  } from "gatsby-plugin-image"
import skillData from '../constants/skillData'



const query = graphql`
  {
    allFile(filter: {sourceInstanceName: {eq: "images"}}, limit: 9, skip: 2) {
      nodes {
        relativePath
      }
    }
  }
`

const Skill = () =>{

    const data = useStaticQuery(query);
    const {allFile : {nodes }} = data


    return (
        <>
        
        {skillData.map(skill =>{
            const { text , img } = skill
        return   <>
        <div className="skills_card">
             <img src = {img}  className="skills_icon"/>
             <p>{text}</p>
        </div>     
                 </>

          })} 

    
       
        </>

    )
}

export default Skill