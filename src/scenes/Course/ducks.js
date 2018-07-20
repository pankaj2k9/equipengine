import Immutable from "seamless-immutable"
import { createSelector } from "reselect"

// Types
export const types = {
  //
  // FETCH_TUTORIALS
  //
  FETCH_TUTORIALS_REQUEST: "equipengine/FETCH_TUTORIALS_REQUEST",
  FETCH_TUTORIALS_SUCCESS: "equipengine/FETCH_TUTORIALS_SUCCESS",
  FETCH_TUTORIALS_ERROR: "equipengine/FETCH_TUTORIALS_ERROR"
}

const initialState = Immutable({
  isFetchingTutorials: false,
  tutorials: [],
  pagination: null
})

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    //
    // FETCH_TUTORIALS
    //
    case types.FETCH_TUTORIALS_REQUEST:
      return state.merge({
        isFetchingTutorials: true
      })
    case types.FETCH_TUTORIALS_SUCCESS:
      return state.merge({
        isFetchingTutorials: false,
        tutorials: action.payload.tutorials
      })
    case types.FETCH_TUTORIALS_ERROR:
      return state.merge({
        isFetchingTutorials: false,
        tutorials: []
      })

    default:
      return state
  }
}

// Actions
export const actions = {
  //
  // FETCH_TUTORIALS
  //
  fetchTutorialsRequest: () => ({
    type: types.FETCH_TUTORIALS_REQUEST
  }),
  fetchTutorialsSuccess: ({ tutorials, pagination }) => ({
    type: types.FETCH_TUTORIALS_SUCCESS,
    payload: { tutorials, pagination }
  }),
  fetchTutorialsError: () => ({
    type: types.FETCH_TUTORIALS_ERROR
  })
}

// Selectors
const courseSelector = () => state => state.course

const selectIsFetchingTutorials = () =>
  createSelector(courseSelector(), course => course.isFetchingTutorials)
const selectTutorials = () =>
  createSelector(courseSelector(), course => course.tutorials)

export const selectors = { selectIsFetchingTutorials, selectTutorials }
