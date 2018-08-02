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

const tutorials = [
  {
    id: 6,
    title: "Fisher-Batz",
    description: "cultivate e-business channels",
    status: "active",
    user_id: 585,
    course_id: 16,
    created_at: "April 22, 2018 09:15",
    updated_at: "April 22, 2018 15:15",
    course_settings: {
      id: 77,
      course_id: 155,
      group_id: 46,
      precourse_id: 0,
      complete_lesson_can: "all",
      reports_enabled: true,
      files_enabled: true,
      discussing_enabled: true,
      student_content_enabled: true,
      status: "active",
      created_at: "April 22, 2018 09:15",
      updated_at: "April 22, 2018 09:15"
    },
    tasks: []
  }
]

const courses = [
  {
    title: "course1",
    id: 16
  },
  {
    title: "course2",
    id: 17
  },
  {
    title: "course3",
    id: 18
  },
  {
    title: "course4",
    id: 19
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
  withProps({ courses, tutorials, users }),
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
  withProps(({ courses, selectedUser }) => {
    const selectedCourses = selectedUser.courses.map(id =>
      courses.find(course => course.id === id)
    )

    return { selectedCourses }
  }),
  withContext(
    contextPropTypes,
    ({ tutorials, users, selectedUser, selectUser, selectedCourses }) => ({
      tutorials,
      users,
      selectedUser,
      selectUser,
      selectedCourses
    })
  )
)(TeacherUserManager)
