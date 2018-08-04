import React from "react"

import MessageForm from "base_components/MessageForm"

import ListNotice from "./ListNotice"
import { Body, FormContainer } from "./elements"

const BodyDashboard = () => (
  <Body>
    <FormContainer>
      <MessageForm />
    </FormContainer>
    <ListNotice />
  </Body>
)

export default BodyDashboard
