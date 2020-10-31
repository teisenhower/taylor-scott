import React from 'react'
import { graphql } from 'gatsby'
import '../assets/index.css'
import Layout from '../layouts/layout'
import Nav from '../components/nav'
import HeaderImage from '../components/headerImage'

const App = ({ data }) => (
  <Layout>
    <h1 className="siteTitle">{data.site.siteMetadata.title}</h1>
    <Nav />
    <HeaderImage />
  </Layout>
)
export default App

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
