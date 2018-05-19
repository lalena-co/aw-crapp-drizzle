import React from 'react'
import Logo from 'components/Logo'
import Text from 'components/Text'
import v from 'vudu'
import { styles as s } from 'stylesheet'

const localClasses = v({
  app: {
    textAlign: 'center',
  },
  header: {
    '@composes': [s.bgBlack, s.white],
    height: '150px',
    marginBottom: '20px',
    padding: '20px',
  },
  logo: {
    animation: 'spin infinite 20s linear',
    display: 'inline-block',
    height: '80px',
    '@keyframes spin': {
      from: {
        transform: 'rotate(0deg)',
      },
      to: {
        transform: 'rotate(360deg)',
      },
    },
  },
})

const App = () => (
  <div className={localClasses.app}>
    <header className={localClasses.header}>
      <Logo className={localClasses.logo} />
      <Text variant="h1">Welcome to AW-CRApp</Text>
    </header>
    <Text>
      To get started, edit <code>src/App.js</code> and save to reload.
    </Text>
  </div>
)

export default App
