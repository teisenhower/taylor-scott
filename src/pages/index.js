import React from 'react'
import { graphql } from 'gatsby'
import '../assets/index.css'
import Layout from '../layouts/layout'
import Nav from '../components/nav'

const App = ({ data }) => (
  <Layout>
    <h1>{data.site.siteMetadata.title}</h1>
    <Nav />
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
