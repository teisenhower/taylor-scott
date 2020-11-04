import React from 'react'
import renderer from 'react-test-renderer'
import { HeaderImg } from '../components/headerImage'

it('renders correctly', () => {
  const data = {
    fixedImage: {
      childImageSharp: {
        fluid: {
          base64:
            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAGABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAMC/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAMAwEAAhADEAAAAYaArCL/xAAaEAACAgMAAAAAAAAAAAAAAAADEQABAhIy/9oACAEBAAEFAg4KA7d7f//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABkQAAEFAAAAAAAAAAAAAAAAAAABAhFxgf/aAAgBAQAGPwLBYHWf/8QAGRABAAIDAAAAAAAAAAAAAAAAAQARIWGh/9oACAEBAAE/IQy2eQBMlRUf/9oADAMBAAIAAwAAABBz7//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABwQAQACAQUAAAAAAAAAAAAAAAEAESExUWGB4f/aAAgBAQABPxBBLa9KmITWyW3vfsAhQWrwT//Z',
          aspectRatio: 3.125,
          src: '/static/61b01b8e75a308d6113a9caf7be58abe/2f1b1/header.jpg',
          srcSet:
            '/static/61b01b8e75a308d6113a9caf7be58abe/fd013/header.jpg 200w,\n/static/61b01b8e75a308d6113a9caf7be58abe/25252/header.jpg 400w,\n/static/61b01b8e75a308d6113a9caf7be58abe/2f1b1/header.jpg 800w',
          srcWebp: '/static/61b01b8e75a308d6113a9caf7be58abe/ccdb5/header.webp',
          srcSetWebp:
            '/static/61b01b8e75a308d6113a9caf7be58abe/6b183/header.webp 200w,\n/static/61b01b8e75a308d6113a9caf7be58abe/fc32b/header.webp 400w,\n/static/61b01b8e75a308d6113a9caf7be58abe/ccdb5/header.webp 800w',
          sizes: '(max-width: 800px) 100vw, 800px',
        },
      },
    },
  }
  const tree = renderer.create(<HeaderImg data={data} />).toJSON()
  expect(tree).toMatchSnapshot()
})
