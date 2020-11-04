import React from 'react'
import { graphql } from 'gatsby'
import '../assets/index.css'
import Layout from '../layouts/layout'
import { Nav } from '../components/nav'
import { HeaderImage } from '../components/headerImage'
import { Welcome } from '../components/welcome'

const App = ({ data }) => (
  <Layout>
    <h1 className="siteTitle">{data.site.siteMetadata.title}</h1>
    <Nav />
    <HeaderImage />
    <Welcome />
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
