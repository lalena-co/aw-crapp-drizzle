import { belowDesktop, desktop, tablet } from 'constants'

/**
 * Common breakpoints.
 * @typedef {Object} breakpoints
 * @property {number} belowDesktop
 * @property {number} tablet
 * @property {number} desktop
 */
export default {
  belowDesktop: `@media ${belowDesktop}`,
  tablet: `@media ${tablet}`,
  desktop: `@media ${desktop}`,
}
