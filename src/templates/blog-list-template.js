import React from 'react'
import { graphql , Link} from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Blogpost from '../components/Blogpost'
import Pagination from '../components/Pagination'
import Seo from '../components/Seo'




export default function Bloglist ({ data , pageContext }){

   const { group, index } = pageContext

  return <>
   <Layout>
   <Seo title ='blog'/>
      <div className="home">
        <div className="container">
          <h2 className="post-list-heading"> journal : </h2>
            <ul className="post-list">   


              <Pagination pageContext = {pageContext}/>
    

            {
              group.map(node=>{
                  const {title} = node.node.frontmatter;
                  const {path} = node.node.frontmatter;
                  const {excerpt} =  node.node
                  const image = getImage(node.node.frontmatter.img)


                  return (
                    <Blogpost key ={index} title={title} path={path} image={image} excerpt={excerpt} />
                  )
        
                })
            }
                 </ul>   
              </div>
             </div>
           </Layout>
      
  </>

}

export const blogListQuery = graphql`
  query  {
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC}
      ) {
      nodes {
        frontmatter {
          path
          title
          img {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        excerpt(format: PLAIN, pruneLength: 25, truncate: false)
      }
    }
  }
  
`
