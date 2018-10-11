import * as API from "services/API"
import { actions } from "./ducks"

export const fetchGroupCourses = ({ groupId, current_page }) => {
  return async dispatch => {
    dispatch(actions.fetchGroupCoursesRequest())

    try {
      const response = await API.fetchGroupCourses({ groupId, current_page })

      return dispatch(
        actions.fetchGroupCoursesSuccess({
          groupCourses: response.courses,
          groupCoursesPagination: response.meta
        })
      )
    } catch (error) {
      return dispatch(actions.fetchGroupCoursesError())
    }
  }
}

export const fetchMoreGroupCourses = ({ groupId, current_page }) => {
  return async dispatch => {
    dispatch(actions.fetchMoreGroupCoursesRequest({}))

    try {
      const { courses, meta } = await API.fetchGroupCourses({
        groupId,
        current_page
      })

      return dispatch(
        actions.fetchMoreGroupCoursesSuccess({
          groupCourses: courses,
          groupCoursesPagination: meta
        })
      )
    } catch (error) {
      return dispatch(actions.fetchGroupCoursesError())
    }
  }
}

export const addCoursesToGroup = ({ groupId, courses }) => {
  return async dispatch => {
    dispatch(actions.addCoursesToGroupRequest())

    try {
      for (const course of courses) {
        await API.addCourseToGroup({ groupId, courseId: course.id })
      }

      // TODO: Need to parallelize api calls like the commented code below though API throws 500. Need that fixed.
      // const addCourseToGroupPromises = []
      // for (const course of courses) {
      //   const promise = API.addCourseToGroup({ groupId, courseId: course.id })
      //   addCourseToGroupPromises.push(promise)
      // }

      // await Promise.all(addCourseToGroupPromises)

      return dispatch(actions.addCoursesToGroupSuccess({ courses }))
    } catch (error) {
      return dispatch(actions.addCoursesToGroupError())
    }
  }
}

export const fetchGroupCourseSettings = ({ groupId }) => {
  return async dispatch => {
    dispatch(actions.fetchGroupCourseSettingsRequest())

    try {
      const response = await API.fetchCourseSettingsForGroup({
        groupId,
        organization_id: 1,
        current_page: 1,
        current_count: 100
      })

      return dispatch(
        actions.fetchGroupCourseSettingsSuccess({
          groupCourseSettings: response.course_groups,
          groupCourseSettingsPagination: response.meta
        })
      )
    } catch (error) {
      return dispatch(actions.fetchGroupCourseSettingsError())
    }
  }
}

export const updateGroupCourseSettings = ({
  id,
  groupId,
  ...rest
}) => async dispatch => {
  try {
    dispatch(actions.updateGroupCourseSettingsRequest())
    const { course_group } = await API.updateGroupCourseSettings({
      id,
      groupId,
      ...rest
    })
    debugger
    return dispatch(actions.updateGroupCourseSettingsSuccess({ course_group }))
  } catch (error) {
    return dispatch(actions.updateGroupCourseSettingsError({ error }))
  }
}

export const deleteGroupCourseSettings = ({
  groupId,
  id
}) => async dispatch => {
  try {
    dispatch(actions.deleteGroupCourseSettingsRequest())
    debugger
    const { groupCourseSetting } = await API.deleteGroupCourseSettings({
      groupId,
      id
    })

    return dispatch(
      actions.deleteGroupCourseSettingsSuccess({ groupCourseSetting })
    )
  } catch (error) {
    return dispatch(actions.deleteGroupCourseSettingsError({ error }))
  }
}
