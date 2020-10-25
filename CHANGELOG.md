# Changelog

## [Unreleased]

- Fix Nav "popping" at top of page during initial paint before its position has been calculated
- Fix missing props validation errors returned from es-lint

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
