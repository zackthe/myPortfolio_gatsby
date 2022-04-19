import React from 'react'
import {graphql , useStaticQuery} from 'gatsby'
import { GatsbyImage , getImage, StaticImage  } from "gatsby-plugin-image"
import skillData from '../constants/skillData'
import Skill from './Skill'



const Skills = () =>{


 return <> <section className="skills">
    <h1 className="skills__title">skills </h1>
      <div className="container">
          <div className="skills__card-wrapper">
           <Skill />
          </div>
    </div>
    </section>
    </>
}


export default Skills
