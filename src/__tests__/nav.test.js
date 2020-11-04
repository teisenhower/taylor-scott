import React from 'react'
import renderer from 'react-test-renderer'
import { NavComponent } from '../components/nav'

it('renders correctly', () => {
  const data = {
    site: {
      siteMetadata: {
        navLinks: ['About', 'Pricing', 'Wedding', 'Blog', 'Contact'],
      },
    },
  }
  const component = renderer.create(<NavComponent data={data} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
