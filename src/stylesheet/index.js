import v from 'vudu'
import breakpoints from './breakpoints'
import colors from './colors'
import copy from './copy'
import layout from './layout'
import theme from './theme'

const buildStyles = () =>
  Object.assign(v.config({ colors }), copy, layout, theme)

const styles = buildStyles()
const classes = v(styles)

export { breakpoints, classes, colors, copy, styles }
