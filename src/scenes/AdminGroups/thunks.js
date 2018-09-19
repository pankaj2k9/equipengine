import * as API from "services/API"
import { ACTIVE_GROUP_STATUS, PAUSE_GROUP_STATUS } from "services/constants"
import { actions } from "./ducks"

export const fetchGroups = ({ term } = {}) => {
  return async dispatch => {
    try {
      dispatch(actions.fetchGroupsRequest({ searchTerm: term }))

      const { groups, meta } = await API.fetchGroups({ term })

      return dispatch(
        actions.fetchGroupsSuccess({
          groups,
          pagination: meta
        })
      )
    } catch (error) {
      return dispatch(actions.fetchGroupsError())
    }
  }
}

export const fetchMoreGroups = ({ term, current_page }) => {
  return async dispatch => {
    dispatch(actions.fetchMoreGroupsRequest({ searchTerm: term }))

    try {
      const { groups, meta } = await API.fetchGroups({ term, current_page })

      return dispatch(
        actions.fetchMoreGroupsSuccess({
          groups,
          pagination: meta
        })
      )
    } catch (error) {
      return dispatch(actions.fetchMoreGroupsError())
    }
  }
}

export const createGroup = ({
  title,
  userLimit,
  enabled,
  noticeboardEnabled,
  studentCanComment,
  studentCanPost
}) => {
  return async dispatch => {
    try {
      dispatch(actions.createGroupRequest())

      const { group } = await API.createGroup({
        title,
        user_limit: userLimit,
        status: enabled ? ACTIVE_GROUP_STATUS : PAUSE_GROUP_STATUS,
        noticeboard_enabled: noticeboardEnabled,
        student_can_post: studentCanPost,
        student_can_comment: studentCanComment
      })

      return dispatch(actions.createGroupSuccess({ group }))
    } catch (error) {
      return dispatch(actions.createGroupError())
    }
  }
}

export const updateGroup = ({ id, group }) => async dispatch => {
  try {
    dispatch(actions.updateGroupRequest())

    const { group: updatedGroup } = await API.updateGroup({ id, group })

    return dispatch(actions.updateGroupSuccess({ group: updatedGroup }))
  } catch (error) {
    return dispatch(actions.updateGroupError({ error }))
  }
}

export const deleteGroup = ({ id }) => async dispatch => {
  try {
    dispatch(actions.deleteGroupRequest())

    const { group } = await API.deleteGroup({ id })

    return dispatch(actions.deleteGroupSuccess({ group }))
  } catch (error) {
    return dispatch(actions.deleteGroupError({ error }))
  }
}
