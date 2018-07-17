import Immutable from "seamless-immutable"
import { createSelector } from "reselect"

// Types
export const types = {
  //
  // FETCH_ACTIVITIES
  //
  FETCH_ACTIVITIES_REQUEST: "equipengine/FETCH_ACTIVITIES_REQUEST",
  FETCH_ACTIVITIES_SUCCESS: "equipengine/FETCH_ACTIVITIES_SUCCESS",
  FETCH_ACTIVITIES_ERROR: "equipengine/FETCH_ACTIVITIES_ERROR"
}

const initialState = Immutable({
  isFetchingActivities: false,
  activities: [],
  pagination: null
})

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    //
    // FETCH_ACTIVITIES
    //
    case types.FETCH_ACTIVITIES_REQUEST:
      return state.merge({
        isFetchingActivities: true
      })
    case types.FETCH_ACTIVITIES_SUCCESS:
      return state.merge({
        isFetchingActivities: false,
        activities: action.payload.activities
      })
    case types.FETCH_ACTIVITIES_ERROR:
      return state.merge({
        isFetchingActivities: false,
        activities: []
      })

    default:
      return state
  }
}

// Actions
export const actions = {
  //
  // FETCH_ACTIVITIES
  //
  fetchActivitiesRequest: () => ({
    type: types.FETCH_ACTIVITIES_REQUEST
  }),
  fetchActivitiesSuccess: ({ activities, pagination }) => ({
    type: types.FETCH_ACTIVITIES_SUCCESS,
    payload: { activities, pagination }
  }),
  fetchActivitiesError: () => ({
    type: types.FETCH_ACTIVITIES_ERROR
  })
}

// Selectors
const activitiesSelector = () => state => state.activities

const selectIsFetchingActivities = () =>
  createSelector(
    activitiesSelector(),
    activities => activities.isFetchingActivities
  )
const selectActivities = () =>
  createSelector(activitiesSelector(), activities => activities.activities)

export const selectors = { selectIsFetchingActivities, selectActivities }
