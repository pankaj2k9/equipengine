Project EquipEngine Site

passphrase: irishjane

Login information to dev site:

Student User: student@equipengine.com Password: student@equipengine.com

Teacher User: teacher@equipengine.com Password: teacher@equipengine.com

Admin User: admin@equipengine.com Password: admin@equipengine.com


### Rule of thumb for React code standards:
- Avoid creating components in `base_components` dir which is connected to **Redux** or maintaing its own states.
- If the reusable components has its own state or connected to redux or if redux actions are used in more than 2 features, move it to `global`.
- If you have any global constants, place it in `global/constants.js`
- Syntax of naming **React components** - `{Block element}{Module name}`. For an instance, **ListTutorial** . List is *BLock element*, Tutorial is *Module element*.
- In naming handler function, name should start in `on`. For an instance, **onClick** .
- Component should be structured in the following way:

```
# index.js

import React from "react"

import { FormGroup, Label } from "base_components/RootForm"
import { Root, SubmitButton, StyledInput } from "./elements"

const MyComponent = ({ ... }) => (
  <Root>
    <FormGroup>
      <Label>...</Label>
      <StyledInput .. />
    </FormGroup>
    <Button ...>..</Button>
  </Root>
)

export default MyComponent
```
```
# elements.js

import styled from "styled-components"
import Button from "base_components/RootButton"
import { Text } from "base_components/RootForm"

export const Root = styled.div`
  margin: 10px;
  ...
`

export const StyledInput = styled(Text)`
  ...
`

export const SubmitButton = styled(Button)`
  ...
`
```
