import React from "react"

import WhiteArea from "base_components/WhiteArea"
import { Switch, Checkbox, Label } from "base_components/RootForm"

import { Root, P, User, PrivelegesLabel, Flex } from "./elements"

const AccountContainer = () => (
  <Root>
    <P>
      Submissions teacher can see (if a person is not selected people will not
      show):
    </P>
    <WhiteArea>
      <User>
        <Flex>
          <Checkbox name="account1" />
          <Label htmlFor="account1">Jane Doe</Label>
        </Flex>
      </User>
      <User>
        <Flex>
          <Checkbox name="account2" />
          <Label htmlFor="account2">Poter Rose</Label>
        </Flex>
      </User>
    </WhiteArea>
    <Flex isSpaceBetween>
      <PrivelegesLabel>File Control Priveleges</PrivelegesLabel>
      <Switch name="fileControlPriveleges" />
    </Flex>
  </Root>
)

export default AccountContainer
