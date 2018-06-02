import React from 'react'
import PropTypes from 'prop-types'
import { drizzleConnect } from 'drizzle-react'
import { LoadingContainer } from 'drizzle-react-components'
import Logo from 'components/Logo'
import Text from 'components/Text'
import DrizzleExamples from 'components/DrizzleExamples'
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

const App = props => {
  const { className } = props

  return (
    <div className={className}>
      <header>
        <Logo className="logo" />
        <Text variant="h1">Welcome to AW-CRApp</Text>
      </header>
      <Text>
        To get started, edit <code>src/App.js</code> and save to reload.
      </Text>
      <LoadingContainer>
        <DrizzleExamples {...props} />
      </LoadingContainer>
    </div>
  )
}

App.propTypes = {
  className: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({ ...state })

export default drizzleConnect(styled(App)(styles), mapStateToProps)
