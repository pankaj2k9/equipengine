import React from "react"
import PropTypes from "prop-types"

import MessageForm from "base_components/MessageForm"

import ListNotice from "./ListNotice"
import { Body, FormContainer, Placeholder } from "./elements"

const BodyDashboard = ({ notices }) => (
  <Body>
    <FormContainer>
      <MessageForm />
    </FormContainer>
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
