# Changelog

## [Unreleased]

- Snapshot test for Welcome Message
- Fix missing props validation errors returned from es-lint
- Look into adding tests for user nav interaction (hide/show)

## [0.0.8] 2020-11-12

### Changed

- GraphQL query used to pull Featured images update to include the images name so it can be used for the key and alt fields
- Mobile nav now used a hamburger style icon for opening and closing the nav drawer. This additional required additional css changes in other files.
  - This change also required the logic used to determine the open and closed position of the nav drawer to be updated. Since the box-sizing was changed to border-box, the calculated height needed to be adjusted accordingly.

## [0.0.7] 2020-11-11

### Added

- Featured Session component - [featured.js](src/components/featured.js)

### Changed

- layout.js replaced with wrapper.js for naming purposes
- component are now contained within a new [internalLayout.js](src/layouts/internalLayout.js). This layout ensures padding and margin is consistent between components that need to share these traits. Other subsequent css changes needed to happen in order for this to work correctly
- Fonts and additional styling updated

## [0.0.6] 2020-11-04

### Added

- Welcome Message component - [welcome.js](src/components/welcome.js)

### Changed

- CSS defaults for `h1`, `h2`, and `p` overwritten
- Syntax updates to fix .eslint warnings/errors

## [0.0.5] 2020-10-31

### Added

- Header Image underneath site title and nav
- Snapshot test for Header Image [headerImage.test.js](src/__tests__/headerImage.test.js)
- New Packages
  - [gatsby-image](https://www.npmjs.com/package/gatsby-image)
  - [gatsby-plugin-sharp](https://www.npmjs.com/package/gatsby-plugin-sharp)
  - [gatsby-source-filesystem](https://www.npmjs.com/package/gatsby-source-filesystem)
  - [gatsby-transformer-sharp](https://www.npmjs.com/package/gatsby-transformer-sharp)
- [node.js.yml](.github/workflows/node.js.yml)

### Changed

- New rules added to [.eslintrc.json](src/.eslintrc.json)
- CSS tweaks

## [0.0.4] 2020-10-29

### Fixed

- Fixed Nav pop at top of page during load by adding a simply css opacity transition. Will implement a better solution later.

- When switching from desktop or a wide landscape on mobile to portrait view on mobile, the Nav height was not being set correctly resulting in the Nav hide/show to not work properly. To resolve this I added a new state property, `windowOrientation` to contain the screen orientation; _0 or 90 degrees_. The useEffect hook that sets the `navPOS` has been update to only fire when this state value has changed. I am updating the `windowOrientation` state with the [onorientationchange](https://developer.mozilla.org/en-US/docs/Web/API/Window/orientationchange_event) event.

## [0.0.3] 2020-10-25

### Changed

- Position of hidden nav in mobile now dynamic based on the overall height of the nav. Links can be added or removed without requiring the hide/show logic or css to be updated. Using the [useEffect](https://reactjs.org/docs/hooks-effect.html) hook to calculate the positioning needed to hide the nav.

  - Styling moved to inline styles vs CSS

- [useState](https://reactjs.org/docs/hooks-state.html) variable names in [nav.js](src/components/nav.js) updated.

## [0.0.2] 2020-10-25

### Added

- Feature to display or hide mobile nav bar

## [0.0.1] 2020-10-24

### Added

- [breakpoints.module.css](src/assets/breakpoints.module.css) to store all of the breakpoint sizes for the site
- Nav Component now has its own css module [nav.module.css](src/components/nav.module.css)

### Changed

- Nav Component now contains basic responsive logic. The Nav will be a bottom fixed navigation on mobile and a typical upper nav on desktop. _(I am approaching this site with a mobile first mindset.)_
