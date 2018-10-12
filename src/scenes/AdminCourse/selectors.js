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
const selectIsUpdatingTutorial = () =>
  createSelector(courseSelector(), course => course.isUpdatingTutorial)
const selectUpdatingTutorialId = () =>
  createSelector(courseSelector(), course => course.updatingTutorialId)
const selectIsDeletingTutorial = () =>
  createSelector(courseSelector(), course => course.isDeletingTutorial)
const selectDeletingTutorialId = () =>
  createSelector(courseSelector(), course => course.deletingTutorialId)
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
const selectIsUpdatingTask = () =>
  createSelector(courseSelector(), course => course.isUpdatingTask)
const selectIsDeletingTask = () =>
  createSelector(courseSelector(), course => course.isDeletingTask)
const selectTutorialPagination = () =>
  createSelector(courseSelector(), course => course.tutorialsPagination)

export const selectors = {
  selectIsFetchingCourse,
  selectCourse,
  selectIsFetchingTutorials,
  selectTutorials,
  selectIsCreatingTutorial,
  selectIsUpdatingTutorial,
  selectUpdatingTutorialId,
  selectIsDeletingTutorial,
  selectDeletingTutorialId,
  selectSelectedTutorial,
  selectTasks,
  selectIsFetchingTasks,
  selectIsCreatingTask,
  selectIsUpdatingTask,
  selectIsDeletingTask,
  selectTutorialPagination
}
