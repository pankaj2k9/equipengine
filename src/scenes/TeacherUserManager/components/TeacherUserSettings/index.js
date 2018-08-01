import React from "react"
import { Tab } from "react-bootstrap"
import { compose, flattenProp, getContext } from "recompose"
import styled from "styled-components"

import Divider from "base_components/Divider"
import DragDrop from "base_components/DragDrop"
import { MainInnerContainer } from "base_components/Main"
import Tabs from "base_components/Tabs"
import UserDetails from "base_components/UserDetails"

import ItemTeacherUserCourses from "./components/ItemTeacherUserCourses"
import { Header } from "./elements"
import { contextPropTypes } from "../../proptypes"

import form from "hoc/form"

const ItemTeacherUserSettings = ({ selectedUser }) => (
  <div
    style={{
      width: "70%",
      fontSize: "1.09rem",
      padding: "0px 20px",
      color: "#111"
    }}
  >
    <Header>User Details</Header>
    <UserDetails
      firstName={selectedUser.firstName}
      lastName={selectedUser.lastName}
      email={selectedUser.email}
      resetPasswordExist={false}
      isAvatarEditable={false}
    />
    <Divider />
  </div>
)

const EnhancedItemTeacherUserSettings = compose(
  form({
    firstName: "",
    lastName: "",
    email: ""
  }),
  getContext(contextPropTypes),
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
    width: 75%;
    padding: 16px 0;

    .nav-tabs {
      padding: 0 2.4em;
    }
  }
`

export default TeacherUserSettings
