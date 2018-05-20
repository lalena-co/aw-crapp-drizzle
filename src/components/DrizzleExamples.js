import React from 'react'
import {
  AccountData,
  ContractData,
  ContractForm,
} from 'drizzle-react-components'
import Text from 'components/Text'

const DrizzleExamples = ({ accounts }) => (
  <main>
    <div>
      <Text variant="h2">Drizzle Examples</Text>
      <br />
      <Text>
        Examples of how to get started with Drizzle in various situations.
      </Text>
      <br />
      <br />
    </div>
    <div>
      <Text variant="h3">Active Account</Text>
      <br />
      <AccountData accountIndex="0" units="ether" precision="3" />
      <br />
      <br />
    </div>
    <div>
      <Text variant="h3">SimpleStorage</Text>
      <br />
      <Text>
        This shows a simple ContractData component with no arguments, along with a form to set its value.
      </Text>
      <Text>
        <strong>Stored Value:</strong>
        <ContractData contract="SimpleStorage" method="storedData" />
      </Text>
      <br />
      <ContractForm contract="SimpleStorage" method="set" />
      <br />
      <br />
    </div>
    <div>
      <Text variant="h3">TutorialToken</Text>
      <br />
      <Text>
        Here we have a form with custom, friendly labels. Also note the token
        symbol will not display a loading indicator. We've suppressed it with
        the <code>hideIndicator</code> prop because we know this variable is
        constant.
      </Text>
      <Text>
        <strong>Total Supply:</strong>
        <ContractData
          contract="TutorialToken"
          method="totalSupply"
          methodArgs={[{ from: accounts[0] }]}
        />
        <ContractData contract="TutorialToken" method="symbol" hideIndicator />
      </Text>
      <br />
      <Text>
        <strong>My Balance:</strong>
        <ContractData
          contract="TutorialToken"
          method="balanceOf"
          methodArgs={[accounts[0]]}
        />
      </Text>
      <br />
      <Text variant="h4">Send Tokens</Text>
      <ContractForm
        contract="TutorialToken"
        method="transfer"
        labels={['To Address', 'Amount to Send']}
      />
      <br />
      <br />
    </div>
  </main>
)

export default DrizzleExamples
