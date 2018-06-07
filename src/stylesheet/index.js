import { generate } from 'cooltilities'
import breakpoints from './breakpoints'
import colors from './colors'
import copy from './copy'
import theme from './theme'

/**
 * Common utility classes
 * @type {Object}
 */
const styles = {
  ...generate(colors),
  ...theme,
}

/**
 * An object that contains common, composable css utilities.
 * @typedef {Object} stylesheet
 * @property {Object} breakpoints
 * @property {Object} colors
 * @property {Object} copy
 * @property {Object} styles
 */
export { breakpoints, colors, copy, styles }
