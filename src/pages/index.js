import React from 'react'
import '../assets/index.css'
import Wrapper from '../layouts/wrapper'
import { Nav } from '../components/nav'
import { HeaderImage } from '../components/headerImage'
import { Welcome } from '../components/welcome'
import { Featured } from '../components/featured'

const App = () => (
  <Wrapper>
    <h1 className="siteTitle">
      Taylor Scott
      {' '}
      <span>Photography</span>
    </h1>
    <Nav />
    <HeaderImage />
    <Welcome />
    <Featured />
  </Wrapper>
)
export default App
