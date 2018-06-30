import React from 'react'

import Panel from 'base_components/Panel'
import ListControl, { ListItemControl } from 'base_components/ListControl'

// for list item control.
import Button from 'base_components/RootButton'
import { Label } from 'base_components/RootForm'

const StyledPanel = Panel.extend`
  border-bottom: none;
  
  @media screen and (min-width: 768px) {
    margin-bottom: 17px;
    width: 75%;
  }

  @media screen and (max-width: 767px) {
    width: initial;
  }
`

const StyledButton = Button.extend`
  height: 28px;
  padding: 0;
  padding-top: 2px;
`

const StyledLabel = Label.extend`
  max-width: initial!important;
`

const PanelControlGroup = () => (
  <StyledPanel>
    <ListControl>
      <ListItemControl>
        <StyledButton large light lightBorder>
          Suspend user
        </StyledButton>
        <StyledLabel light>
          Once student account is suspended you can activate again at any time.
        </StyledLabel>
      </ListItemControl>
      <ListItemControl>
        <StyledButton light large lightBorder>
          Remove user
        </StyledButton>
        <StyledLabel light>
          If this user is removed all data associated with the user is lost.
        </StyledLabel>
      </ListItemControl>
    </ListControl>
  </StyledPanel>
)

export default PanelControlGroup
