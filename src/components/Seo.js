import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        title
        siteUrl
        description
      }
    }
  }
`

const SEO = ({ title , description }) => {

  const { site } = useStaticQuery(query)
  const metaDescription = description || site.siteMetadata.description

  return <Helmet title={`${title} | ${site.siteMetadata.title}`} meta = { [ { name : `description`, content : metaDescription } ] } htmlAttributes={{
    lang: 'en',
  }}></Helmet>

}

export default SEO
