import React from 'react'
import v from 'vudu'
import logo from 'logo.svg'

const localClasses = v({
  app: {
    textAlign: 'center',
  },
  header: {
    backgroundColor: '#222',
    height: '150px',
    padding: '20px',
    color: 'white',
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
  title: {
    fontSize: '1.5em',
  },
  intro: {
    fontSize: 'large',
  },
})

const App = () => (
  <div className={localClasses.app}>
    <header className={localClasses.header}>
      <img src={logo} className={localClasses.logo} alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className={localClasses.intro}>
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
)

export default App
