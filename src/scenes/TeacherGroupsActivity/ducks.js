import Immutable from "seamless-immutable"
import { createSelector } from "reselect"

//Types
export const types = {
  //
  // FETCH_GROUPS_ACTIVITIES
  //
  FETCH_GROUPS_ACTIVITIES_ERROR: "equipengine/FETCH_GROUPS_ACTIVITIES_ERROR",
  FETCH_GROUPS_ACTIVITIES_REQUEST:
    "equipengine/FETCH_GROUPS_ACTIVITIES_REQUEST",
  FETCH_GROUPS_ACTIVITIES_SUCCESS: "equipengine/FETCH_GROUPS_ACTIVITIES_SUCCESS"
}

const initialState = Immutable({
  activities: [],
  isFetchingActivities: false,
  pagination: { current_page: 1, current_count: 20 }
})

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    //
    // FETCH_GROUPS_ACTIVITIES
    //
    case types.FETCH_GROUPS_ACTIVITIES_ERROR:
      return state.merge({ isFetchingActivities: false })

    case types.FETCH_GROUPS_ACTIVITIES_REQUEST:
      return state.merge({ isFetchingActivities: true })

    case types.FETCH_GROUPS_ACTIVITIES_SUCCESS:
      return state.merge({ isFetchingActivities: false })

    default:
      return state
  }
}

//Actions
export const actions = {
  //
  // FETCH_GROUPS_ACTIVITIES
  //
  fetchGroupActivitiesError: () => ({
    type: types.FETCH_GROUPS_ACTIVITIES_ERROR
  }),

  fetchGroupActivitiesRequest: ({ pagination }) => ({
    type: types.FETCH_GROUPS_ACTIVITIES_REQUEST,
    payload: { pagination }
  }),

  fetchGroupActivitiesSuccess: ({ activities, pagination }) => ({
    type: types.FETCH_GROUPS_ACTIVITIES_SUCCESS,
    payload: { activities, pagination }
  })
}

//Selectors

const teacherGroupActivitiesSelector = () => state =>
  state.teacherGroupActivities

const selectGroupActivities = () =>
  createSelector(
    teacherGroupActivitiesSelector(),
    teacherGroupActivities => teacherGroupActivities.activities
  )

const selectIsFetchingGroupActivities = () =>
  createSelector(
    teacherGroupActivitiesSelector(),
    teacherGroupActivities => teacherGroupActivities.isFetchingActivities
  )

const selectPagination = () =>
  createSelector(
    teacherGroupActivitiesSelector(),
    teacherGroupActivities => teacherGroupActivities.pagination
  )

export const selectors = {
  selectGroupActivities,
  selectIsFetchingGroupActivities,
  selectPagination
}
