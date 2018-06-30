import React from "react"
import styled from "styled-components"
// components
import WhiteArea from "base_components/WhiteArea"
import { Label, Switch, Checkbox } from "base_components/RootForm"
import ContainerFlex from "base_components/ContainerFlex"

const P = styled.p`
  margin-bottom: 8px;
`

const User = styled.div`
  & > div {
    margin-bottom: 5px;
  }

  & > div > div {
    margin-right: 17px;
  }

  & label {
    position: relative;
    top: -2px;
  }
`

const PrivelegesLabel = Label.extend`
  max-width: 107px;
`

const AccountContainer = ({ className }) => (
  <div className={className}>
    <P>
      Submissions teacher can see (if a person is not selected people will not
      show):
    </P>
    <WhiteArea>
      <User>
        <ContainerFlex>
          <Checkbox name="account1" />
          <Label htmlFor="account1">Jane Doe</Label>
        </ContainerFlex>
      </User>
      <User>
        <ContainerFlex>
          <Checkbox name="account2" />
          <Label htmlFor="account2">Poter Rose</Label>
        </ContainerFlex>
      </User>
    </WhiteArea>
    <ContainerFlex isSpaceBetween>
      <PrivelegesLabel>File Control Priveleges</PrivelegesLabel>
      <Switch name="fileControlPriveleges" />
    </ContainerFlex>
  </div>
)

export default styled(AccountContainer)`
  background: #f3f3f3;
  padding: 1.8em;
  margin-bottom: 2em;
`
