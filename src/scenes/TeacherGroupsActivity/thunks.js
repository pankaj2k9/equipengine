import * as API from "services/API"
import { ATTACHMENTABLE_GROUP_TYPE } from "services/constants"

import { actions } from "./ducks"

export const fetchGroupActivities = ({ notifiable_id, pagination }) => {
  return async dispatch => {
    dispatch(actions.fetchGroupActivitiesRequest({ pagination }))

    try {
      const { activities, ...meta } = await API.fetchGroupActivities({
        notifiable_id,
        notifiable_type: ATTACHMENTABLE_GROUP_TYPE,
        pagination
      })

      return dispatch(
        actions.fetchGroupActivitiesSuccess({ activities, pagination: meta })
      )
    } catch (error) {
      return dispatch(actions.fetchGroupActivitiesError())
    }
  }
}
