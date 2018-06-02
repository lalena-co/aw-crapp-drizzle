import breakpoints from './breakpoints'
import colors from './colors'
import copy from './copy'
import layout from './layout'
import theme from './theme'

const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1)

/**
 * An object that contains common, composable css utilities for all colors.
 * @protected
 * @private
 * @typedef {Object}
 * @property {Object} colorName text color
 * @property {Object} hoverColorName text color on hover
 * @property {Object} bgColorName background color
 * @property {Object} borderColorName border color
 * @property {Object} strokeColorName stroke color
 * @property {Object} fillColorName fill color
 */
const colorClasses = Object.keys(colors).reduce(
  (a, b) => ({
    ...a,
    ...{
      [b]: { color: colors[b] },
      [`hover${capitalize(b)}`]: { ':hover': { color: colors[b] } },
      [`bg${capitalize(b)}`]: { backgroundColor: colors[b] },
      [`border${capitalize(b)}`]: { borderColor: colors[b] },
      [`stroke${capitalize(b)}`]: { stroke: colors[b] },
      [`fill${capitalize(b)}`]: { fill: colors[b] },
    },
  }),
  {},
)

/**
 * Common utility classes
 * @type {Object}
 */
const styles = {
  ...colorClasses,
  ...layout,
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
