import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import style from './headerImage.module.css'

export const HeaderImage = () => {
  const data = useStaticQuery(graphql`
    query {
      fixedImage: file(relativePath: { eq: "images/header.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return <HeaderImg data={data} />
}

export const HeaderImg = ({ data }) => {
  return (
    <div>
      <Img
        className={style.headerImage}
        fluid={data.fixedImage.childImageSharp.fluid}
      />
    </div>
  )
}

export default HeaderImage
