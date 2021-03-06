import { createSelector } from "reselect"
import features from "features"

// Selectors
const coursesSelector = () => state => state.adminGroupCourses

const selectIsFetchingGroupCourses = () =>
  createSelector(coursesSelector(), courses => courses.isFetchingGroupCourses)
const selectIsAddingCoursesToGroup = () =>
  createSelector(coursesSelector(), courses => courses.isAddingCoursesToGroup)
const selectGroupCourses = () =>
  createSelector(coursesSelector(), courses => courses.groupCourses)
const selectNonCurrentGroupCourses = () =>
  createSelector(
    features.adminCourses.selectors.selectCourses(),
    selectGroupCourses(),
    (allCourses, currentGroupCourses) => {
      const groupCoursesIds = currentGroupCourses.map(
        groupCourse => groupCourse.id
      )
      return allCourses.filter(course => !groupCoursesIds.includes(course.id))
    }
  )
const selectGroupCoursesPagination = () =>
  createSelector(coursesSelector(), courses => courses.groupCoursesPagination)
const selectGroupCourseSettings = () =>
  createSelector(coursesSelector(), courses => courses.groupCourseSettings)
const selectIsFetchingGroupCourseSettings = () =>
  createSelector(
    coursesSelector(),
    courses => courses.isFetchingGroupCourseSettings
  )
const selectIsUpdatingGroupCourseSettings = () =>
  createSelector(
    coursesSelector(),
    courses => courses.isUpdatingGroupCourseSettings
  )

export const selectors = {
  selectIsFetchingGroupCourses,
  selectGroupCourses,
  selectIsAddingCoursesToGroup,
  selectNonCurrentGroupCourses,
  selectGroupCoursesPagination,
  selectGroupCourseSettings,
  selectIsFetchingGroupCourseSettings,
  selectIsUpdatingGroupCourseSettings
}
