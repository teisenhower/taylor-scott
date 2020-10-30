import { useStaticQuery, graphql } from 'gatsby'
import React, { useState, useEffect } from 'react'
import style from './nav.module.css'

export const Nav = () => {
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
  return <NavComponent data={data} />
}

export const NavComponent = ({ data }) => {
  const [navActive, setNavActive] = useState(false)
  const [navPOS, setNavPOS] = useState()
  const [windowOrientation, setWindowOrientation] = useState()

  const toggleNavActive = () => {
    setNavActive(!navActive)
  }
  window.onorientationchange = e => {
    setTimeout(() => {
      setWindowOrientation(e.target.screen.orientation.angle)
    }, 100)
  }
  useEffect(() => {
    const overallNavHeight = document
      .getElementById('nav')
      .getBoundingClientRect().height
    const hamburgerIconHeight = document
      .querySelector('nav div')
      .getBoundingClientRect().height
    const POS = (overallNavHeight - hamburgerIconHeight) * -1
    setNavPOS(POS)
  }, [windowOrientation])
  return (
    <nav id="nav" style={navActive ? { bottom: '0' } : { bottom: navPOS }}>
      <ul>
        <div
          role="button"
          tabIndex="0"
          id={style.hamburger}
          onClick={toggleNavActive}
          onKeyDown={toggleNavActive}
        >
          X
        </div>
        {data.site.siteMetadata.navLinks.map(navItem => (
          <li key={navItem}>{navItem}</li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
