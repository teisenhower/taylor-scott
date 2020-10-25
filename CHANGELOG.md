# Changelog

## [Unreleased]

- Make position of the `hidden` class dynamic instead of fixed. This way if links need added or removed, the `hidden` class will not need updated.

## [0.0.2] 2020-10-25

### Added

- Feature to display or hide mobile nav bar

## [0.0.1] 2020-10-24

### Added

- [breakpoints.module.css](src/assets/breakpoints.module.css) to store all of the breakpoint sizes for the site
- Nav Component now has its own css module [nav.module.css](src/components/nav.module.css)

### Changed

- Nav Component now contains basic responsive logic. The Nav will be a bottom fixed navigation on mobile and a typical upper nav on desktop. _(I am approaching this site with a mobile first mindset.)_
