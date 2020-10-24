import { useStaticQuery } from 'gatsby'
import React from 'react'

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
    <div>
      <nav>
        <ul>
          {data.site.siteMetadata.navLinks.map(navItem => (
            <li>{navItem}</li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
