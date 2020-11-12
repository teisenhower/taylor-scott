import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import InternalLayout from '../layouts/internalLayout'
import style from './featured.module.css'

export const Featured = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "images/featured" } }) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          name
        }
      }
    }
  `)
  return <FeaturedSection data={data} />
}
export const FeaturedSection = ({ data }) => {
  const imageGridNames = ['main', 'secondary', 'subA', 'subB']
  const { nodes: images } = data.allFile
  return (
    <InternalLayout id={style.featured}>
      <h3 className="sectionHeader upper">Featured Session</h3>
      <div className={style.featuredImages}>
        {images.map((image, index) => (
          <Img
            alt={image.name}
            key={image.name}
            className={style[imageGridNames[index]]}
            fluid={image.childImageSharp.fluid}
          />
        ))}
      </div>
      <div className={style.description}>
        <h4 className="upper">The Dale Family</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
          aliquam adipisci ducimus voluptate quia beatae quis ex, amet
          perferendis accusantium quisquam! Delectus libero excepturi
          consequatur fuga amet enim sapiente placeat quas quaerat cum
          architecto soluta impedit at exercitationem magnam esse doloremque
          repellendus voluptatum, cupiditate doloribus a qui dolorum eligendi.
          Consequuntur.
        </p>
        <button type="button" className="">
          View Session
        </button>
      </div>
    </InternalLayout>
  )
}
