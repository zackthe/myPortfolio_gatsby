import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from '../components/Seo'
import { Disqus } from 'gatsby-plugin-disqus';



export default function Template ({data}){
    const {title}  =  data.markdownRemark.frontmatter
    const {date}  =  data.markdownRemark.frontmatter
    const {path}  =  data.markdownRemark.frontmatter

    let disqusConfig = {
      url: path,
      identifier: date,
      title: title,
    }


    // const {image} =  getImage(data.markdownRemark.featuredImg)
    // console.log(data.markdownRemark.featuredImg.childImageSharp.gatsbyImageData)
    
  return (
  <Layout>
  <Seo title = {title} />
     <div>
      <div className='post'>
        <div className="post-content">
        <h1>{title}</h1>
         {data.markdownRemark.featuredImg &&     
        <GatsbyImage  image ={data.markdownRemark.featuredImg.childImageSharp.gatsbyImageData} alt="post-img"/>
          }
          <div
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          />
        </div>
        <Disqus config={disqusConfig} />
      </div>  
    </div>

  </Layout>
      
    )
}


export const pageQuery = graphql`
query($pathSlug : String!)
{
  markdownRemark(frontmatter : { path : {eq : $pathSlug}}) {
    frontmatter {
      title
    }
    featuredImg {
      childImageSharp {
        gatsbyImageData(
          layout : FULL_WIDTH
        )
      }
    }
    html
  }
}
`



