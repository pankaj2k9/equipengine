import { createSelector } from "reselect"
import features from "features"

const teacherStudentsSelector = () => state => state.teacherStudents

const selectSelectedUser = () =>
  createSelector(
    teacherStudentsSelector(),
    features.groupUsers.selectors.selectGroupUsers(),
    (teacherStudents, students) =>
      teacherStudents.selectedUserId &&
      students.find(student => student.id === teacherStudents.selectedUserId)
  )
const selectIsFetchingCoursesTutorials = () =>
  createSelector(
    teacherStudentsSelector(),
    features.groupUsers.selectors.selectGroupUsers(),
    teacherStudents => teacherStudents.isFetchingCoursesTutorials
  )
const selectCourseTutorials = courseId =>
  createSelector(
    teacherStudentsSelector(),
    teacherStudents => teacherStudents.coursesTutorials[courseId] || []
  )

export const selectors = {
  selectSelectedUser,
  selectCourseTutorials,
  selectIsFetchingCoursesTutorials
}
