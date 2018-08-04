import React from "react"
import PropTypes from "prop-types"

import Form, { TextArea } from "base_components/RootForm"
import Button from "base_components/RootButton"

import ListNotice from "./ListNotice"

import {
  AttachmentButton,
  ButtonsContainer,
  Body,
  Placeholder
} from "./elements"

const BodyDashboard = ({ notices }) => (
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
    {notices.length ? (
      <ListNotice />
    ) : (
      <Placeholder>No posts on the noticeboard.</Placeholder>
    )}
  </Body>
)

BodyDashboard.propTypes = {
  notices: PropTypes.array
}

BodyDashboard.defaultProps = {
  notices: []
}

export default BodyDashboard
