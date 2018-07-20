#Project EquipEngine Site

passphrase: irishjane

Login information to dev site:

Student User: *student@equipengine.com* Password: *student@equipengine.com*
Teacher User: *teacher@equipengine.com* Password: *teacher@equipengine.com*
Admin User: *admin@equipengine.com* Password: *admin@equipengine.com*

## Rule of thumb for React code standards:
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

## Redux

Current state structure:

```
{
  auth: {
    isPendingLogin: false,
    isPendingLogout: false,
    isPendingSignup: false,
    user: null,
    token: null
  },
  activities: {
    isFetchingActivities: false,
    activities: [],
    pagination: null
  }
  myGroups: {
    isFetchingMyGroups: false,
    myGroups: [],
    pagination: null
  },
  courses: {
    isFetchingCourses: false,
    courses: [],
    pagination: null
  }
  tutorials: {
    isFetchingTutorials: false,
    tutorials: [],
    pagination: null
  }
}

```

## Feature/plugin architecture

It is not allowed to import feature from one feature (scene) folder to another!!!
Instead of that you have to register your feature in Public API (`features.js`)

```
registerFeature({
  name: "myAwesomePublicFeature",
  enabled: true,
  pages: { MyPublicPage: MyFeature.MyPublicAwesomeReactComponent },
  reducer: MyFeature.reducer,
  actions: MyFeature.actions,
  types: MyFeature.types
})
```
or simpler
```
registerFeature({
  name: "myAwesomePublicFeature",
  enabled: true,
  ...MyFeature
})
```

The idea is that if you disable feature (`enabled: false`), it will not break the application - features are independant of each other, they just use Public API to interact with each other. And its easy to switch from one feature to another.

If you want to get component from public feature, follow next lines:
```
import features from "features"

...
<div><features.myAwesomePublicFeature.pages.MyPublicPage></div>
```

If you want to get action or selector from public feature, follow next lines:
```
import features from "features"

...

const mapState = () =>
  createStructuredSelector({
    user: features.myAwesomePublicFeature.selectors.selectSomething()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      logout: features.myAwesomePublicFeature.actions.doSomething
    },
    dispatch
  )

```