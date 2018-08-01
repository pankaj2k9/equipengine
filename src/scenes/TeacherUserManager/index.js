import React from "react"
import styled from "styled-components"
import { withStateHandlers, withProps, compose, withContext } from "recompose"

import TeacherUser from "./components/TeacherUser"
import TeacherUserSettings from "./components/TeacherUserSettings"
import { contextPropTypes } from "./proptypes"

// this is for the teacher user manager container.
const ContainerTeacherUserManager = styled.div`
  padding: 2%;
  margin-top: 3%;

  @media screen and (min-width: 768px) {
    margin-top: 0;
    padding: 0;
    display: flex;
    min-height: 90vh;
  }
`

const courses = [
  {
    name: "course1",
    id: "g43g34g3"
  },
  {
    name: "course2",
    id: "8c3h8mc9"
  },
  {
    name: "course3",
    id: "c2m38mrc28"
  },
  {
    name: "course4",
    id: "rc2j3r89c"
  }
].map(c => ({ ...c, description: "Some description" }))

const users = [
  {
    id: "g3293929j2",
    firstName: "Kitty",
    lastName: "Will",
    email: "natalie_bayer1@swaniawskipollich.name",
    courses: [courses[0].id, courses[1].id]
  },
  {
    id: "23j293fj9",
    firstName: "Saul",
    lastName: "Lakin",
    email: "natalie_bayer2@swaniawskipollich.name",
    courses: [courses[1].id, courses[2].id]
  },
  {
    id: "g236h7h65",
    firstName: "Saul",
    lastName: "Lakin1",
    email: "natalie_bayer3@swaniawskipollich.name",
    courses: [courses[2].id, courses[3].id]
  }
]

const TeacherUserManager = () => (
  <ContainerTeacherUserManager>
    <TeacherUser />
    <TeacherUserSettings />
  </ContainerTeacherUserManager>
)

export default compose(
  withProps({ users, courses }),
  withStateHandlers(
    ({ users }) => ({
      selectedUser: users[0]
    }),
    {
      selectUser: (_, { users }) => id => ({
        selectedUser: users.find(user => user.id === id)
      })
    }
  ),
  withProps(({ courses, users, selectedUser }) => {
    const selectedCourses = selectedUser.courses.map(id =>
      courses.find(course => course.id === id)
    )

    return { selectedCourses }
  }),
  withContext(
    contextPropTypes,
    ({ users, selectedUser, selectUser, selectedCourses }) => ({
      users,
      selectedUser,
      selectUser,
      selectedCourses
    })
  )
)(TeacherUserManager)
