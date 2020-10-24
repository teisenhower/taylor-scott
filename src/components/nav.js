import { useStaticQuery } from 'gatsby'
import React from 'react'
import style from './nav.module.css'

export default function Nav() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            navLinks
          }
        }
      }
    `,
  )
  return (
    <nav>
      <ul>
        {data.site.siteMetadata.navLinks.map(navItem => (
          <li>{navItem}</li>
        ))}
      </ul>
    </nav>
  )
}
