import React from "react"

import Form, { TextArea } from "base_components/RootForm"
import Button from "base_components/RootButton"

import ListNotice from "./ListNotice"

import { AttachmentButton, ButtonsContainer, Body } from "./elements"

const BodyDashboard = () => (
  <Body>
    <Form>
      <TextArea
        row={2}
        name="noticeboard"
        placeholder="Write on the noticeboard..."
      />
      <ButtonsContainer>
        <AttachmentButton /> <Button>Submit</Button>
      </ButtonsContainer>
    </Form>
    <ListNotice />
  </Body>
)

export default BodyDashboard
