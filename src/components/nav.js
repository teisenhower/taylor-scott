import { useStaticQuery } from 'gatsby'
import React, { useState } from 'react'
import style from './nav.module.css'

export default function Nav() {
  const [navState, setNavState] = useState(false)
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
  const toggleNav = () => {
    setNavState(!navState)
  }
  return (
    <nav className={navState ? '' : style.hidden}>
      <div
        role="button"
        tabIndex="0"
        id={style.hamburger}
        onClick={toggleNav}
        onKeyDown={toggleNav}
      >
        X
      </div>
      <ul>
        {data.site.siteMetadata.navLinks.map(navItem => (
          <li key={navItem}>{navItem}</li>
        ))}
      </ul>
    </nav>
  )
}
