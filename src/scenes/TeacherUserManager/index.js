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
    name: "user1",
    id: "g3293929j2",
    courses: [courses[0].id, courses[1].id]
  },
  {
    name: "user2",
    id: "23j293fj9",
    courses: [courses[1].id, courses[2].id]
  },
  {
    name: "user3",
    id: "g236h7h65",
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
      selectedUserId: users[0].id
    }),
    {
      selectUser: (_, { users }) => id => ({
        selectedUserId: users.find(user => user.id === id).id
      })
    }
  ),
  withProps(({ courses, users, selectedUserId }) => {
    const selectedUser = users.find(({ id }) => id === selectedUserId)

    const selectedCourses = selectedUser.courses.map(id =>
      courses.find(course => course.id === id)
    )

    return { selectedCourses }
  }),
  withContext(
    contextPropTypes,
    ({ users, selectedUserId, selectUser, selectedCourses }) => ({
      users,
      selectedUserId,
      selectUser,
      selectedCourses
    })
  )
)(TeacherUserManager)
