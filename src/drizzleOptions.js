import SimpleStorage from 'contracts/SimpleStorage.json'
import TutorialToken from 'contracts/TutorialToken.json'

const drizzleOptions = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:8545',
    },
  },
  contracts: [SimpleStorage, TutorialToken],
  events: {
    SimpleStorage: ['StorageSet'],
  },
  polls: {
    accounts: 1500,
  },
}

export default drizzleOptions
