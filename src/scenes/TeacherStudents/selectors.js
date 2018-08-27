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

export const selectors = {
  selectSelectedUser
}
