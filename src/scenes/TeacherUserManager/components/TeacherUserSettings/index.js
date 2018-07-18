import React from "react"
import styled from "styled-components"
// Drap and drop
import DragDrop from "base_components/DragDrop"
// base components
import { MainInnerContainer } from "base_components/Main"
import { Tab } from "react-bootstrap"
import Tabs from "base_components/Tabs"
import UserDetails from "base_components/UserDetails"
// child components.
import ItemTeacherUserCourses from "./components/ItemTeacherUserCourses"

import { Header } from "./elements"
import form from "hoc/form"
import { compose, withHandlers, flattenProp } from "recompose"

const ItemTeacherUserSettings = ({
  firstName,
  changeFirstName,
  lastName,
  changeLastName,
  email,
  changeEmail
}) => (
  <div style={{ fontSize: "1.09rem", padding: "0px 20px", color: "#111" }}>
    <Header>User Details</Header>
    <UserDetails
      firstName={firstName}
      changeFirstName={changeFirstName}
      lastName={lastName}
      changeLastName={changeLastName}
      email={email}
      changeEmail={changeEmail}
    />
  </div>
)

const onChange = key => ({ onChange }) => ({ target: { value } }) =>
  onChange(value, key)

const EnhancedItemTeacherUserSettings = compose(
  form({
    firstName: "",
    lastName: "",
    email: ""
  }),
  withHandlers({
    changeFirstName: onChange("firstName"),
    changeLastName: onChange("lastName"),
    changeEmail: onChange("email")
  }),
  flattenProp("fields")
)(ItemTeacherUserSettings)

const TeacherUserSettings = styled(({ className }) => (
  <MainInnerContainer className={className}>
    <Tabs style={{ marginTop: 0, width: "100%" }}>
      <Tab eventKey={1} title="Courses">
        <DragDrop list={[]}>
          <ItemTeacherUserCourses />
        </DragDrop>
      </Tab>
      <Tab eventKey={2} title="User Settings">
        <EnhancedItemTeacherUserSettings />
      </Tab>
    </Tabs>
  </MainInnerContainer>
))`
  @media screen and (min-width: 768px) {
    width: 70%;
    padding: 16px 0;

    .nav-tabs {
      padding: 0 2.4em;
    }
  }
`

export default TeacherUserSettings
