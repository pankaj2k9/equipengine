import * as API from "services/API"
import { actions as activitiesActions } from "./ducks"

export const fetchActivities = ({ userId }) => {
  return async dispatch => {
    dispatch(activitiesActions.fetchActivitiesRequest())

    try {
      const response = await API.fetchActivities({ userId })

      return dispatch(
        activitiesActions.fetchActivitiesSuccess({
          activities: response.activities,
          pagination: response.meta
        })
      )
    } catch (error) {
      return dispatch(activitiesActions.fetchActivitiesError())
    }
  }
}
