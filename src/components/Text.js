import React from 'react'
import PropTypes from 'prop-types'
import { classes as c, colors } from 'stylesheet'

const defaultColor = variant => {
  switch (variant) {
    default:
      return colors.black
  }
}

const Text = props => {
  const { variant, style, children, color, classes } = props
  const combined = `${c[color || defaultColor(variant)]} ${classes} ${
    c[variant]
  }`
  const styleWithTransition = { ...style, transition: 'color 300ms ease' }

  switch (variant) {
    case 'h1':
      return (
        <h1 style={styleWithTransition} className={combined}>
          {children}
        </h1>
      )
    case 'h2':
      return (
        <h2 style={styleWithTransition} className={combined}>
          {children}
        </h2>
      )
    case 'h3':
      return (
        <h3 style={styleWithTransition} className={combined}>
          {children}
        </h3>
      )
    case 'h4':
      return (
        <h4 style={style} className={combined}>
          {children}
        </h4>
      )
    case 'span':
      return (
        <span style={styleWithTransition} className={combined}>
          {children}
        </span>
      )
    default:
      return (
        <p style={styleWithTransition} className={combined}>
          {children}
        </p>
      )
  }
}

Text.propTypes = {
  variant: PropTypes.string,
  style: PropTypes.object,
  classes: PropTypes.string,
}

Text.defaultProps = {
  style: {},
  variant: 'p',
  children: '',
  classes: '',
}

export default Text
