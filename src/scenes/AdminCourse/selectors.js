import { createSelector } from "reselect"

// Selectors
const courseSelector = () => state => state.adminCourse

const selectIsFetchingCourse = () =>
  createSelector(courseSelector(), course => course.isFetchingCourse)
const selectCourse = () =>
  createSelector(courseSelector(), course => course.course)
const selectIsFetchingTutorials = () =>
  createSelector(courseSelector(), course => course.isFetchingTutorials)
const selectTutorials = () =>
  createSelector(courseSelector(), course => course.tutorials)
const selectIsCreatingTutorial = () =>
  createSelector(courseSelector(), course => course.isCreatingTutorial)
const selectSelectedTutorial = () =>
  createSelector(
    courseSelector(),
    course =>
      course.selectedTutorialId &&
      course.tutorials.find(
        tutorial => tutorial.id === course.selectedTutorialId
      )
  )
const selectTasks = () =>
  createSelector(courseSelector(), course => course.tasks)
const selectIsFetchingTasks = () =>
  createSelector(courseSelector(), course => course.isFetchingTasks)
const selectIsCreatingTask = () =>
  createSelector(courseSelector(), course => course.isCreatingTask)

export const selectors = {
  selectIsFetchingCourse,
  selectCourse,
  selectIsFetchingTutorials,
  selectTutorials,
  selectIsCreatingTutorial,
  selectSelectedTutorial,
  selectTasks,
  selectIsFetchingTasks,
  selectIsCreatingTask
}
