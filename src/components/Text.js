import React from 'react'
import PropTypes from 'prop-types'

const Text = props => {
  const { variant, style, children, className } = props

  switch (variant) {
    case 'h1':
      return (
        <h1 style={style} className={className}>
          {children}
        </h1>
      )
    case 'h2':
      return (
        <h2 style={style} className={className}>
          {children}
        </h2>
      )
    case 'h3':
      return (
        <h3 style={style} className={className}>
          {children}
        </h3>
      )
    case 'h4':
      return (
        <h4 style={style} className={className}>
          {children}
        </h4>
      )
    case 'span':
      return (
        <span style={style} className={className}>
          {children}
        </span>
      )
    default:
      return (
        <p style={style} className={className}>
          {children}
        </p>
      )
  }
}

Text.propTypes = {
  variant: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
}

Text.defaultProps = {
  style: {},
  variant: 'p',
  children: '',
  className: '',
}

export default Text
