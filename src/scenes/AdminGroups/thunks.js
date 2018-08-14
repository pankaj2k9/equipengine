import * as API from "services/API"
import { ACTIVE_GROUP_STATUS, PAUSE_GROUP_STATUS } from "services/constants"
import { actions as groupsActions } from "./ducks"

export const fetchGroups = ({ term }) => {
  return async dispatch => {
    dispatch(groupsActions.fetchGroupsRequest({ term }))

    try {
      const { groups, meta } = await API.fetchGroups({ term })

      return dispatch(
        groupsActions.fetchGroupsSuccess({
          groups,
          pagination: meta
        })
      )
    } catch (error) {
      return dispatch(groupsActions.fetchGroupsError())
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
    dispatch(groupsActions.createGroupRequest())

    try {
      const { group } = await API.createGroup({
        title,
        user_limit: userLimit,
        status: enabled ? ACTIVE_GROUP_STATUS : PAUSE_GROUP_STATUS,
        noticeboard_enabled: noticeboardEnabled,
        student_can_post: studentCanPost,
        student_can_comment: studentCanComment
      })

      return dispatch(
        groupsActions.createGroupSuccess({
          group
        })
      )
    } catch (error) {
      return dispatch(groupsActions.createGroupError())
    }
  }
}
