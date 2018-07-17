import * as API from "services/API"
import { actions as myGroupsActions } from "./ducks"

export const fetchMyGroups = () => {
  return async dispatch => {
    dispatch(myGroupsActions.fetchMyGroupsRequest())

    try {
      const response = await API.fetchMyGroups()

      return dispatch(
        myGroupsActions.fetchMyGroupsSuccess({
          myGroups: response.groups,
          pagination: response.meta
        })
      )
    } catch (error) {
      return dispatch(myGroupsActions.fetchMyGroupsError())
    }
  }
}
