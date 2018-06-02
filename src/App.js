import React from 'react'
import PropTypes from 'prop-types'
import Logo from 'components/Logo'
import Text from 'components/Text'
import styled from 'react-emotion'
import { css } from 'emotion'
import { styles as s } from 'stylesheet'

const styles = {
  textAlign: 'center',
  header: css(s.bgBlack, s.white, {
    height: '150px',
    marginBottom: '20px',
    padding: '20px',
  }),
  '.logo': css(s.inlineBlock, {
    animation: 'spin infinite 20s linear',
    height: '80px',
    '@keyframes spin': {
      from: {
        transform: 'rotate(0deg)',
      },
      to: {
        transform: 'rotate(360deg)',
      },
    },
  }),
}

const App = ({ className }) => (
  <div className={className}>
    <header>
      <Logo className="logo" />
      <Text variant="h1">Welcome to AW-CRApp</Text>
    </header>
    <Text>
      To get started, edit <code>src/App.js</code> and save to reload.
    </Text>
  </div>
)

App.propTypes = {
  className: PropTypes.string.isRequired,
}

export default styled(App)(styles)
