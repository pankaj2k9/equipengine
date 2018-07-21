import Immutable from "seamless-immutable"
import { createSelector } from "reselect"

// Types
export const types = {
  //
  // FETCH_TUTORIALS
  //
  FETCH_TUTORIALS_REQUEST: "equipengine/FETCH_TUTORIALS_REQUEST",
  FETCH_TUTORIALS_SUCCESS: "equipengine/FETCH_TUTORIALS_SUCCESS",
  FETCH_TUTORIALS_ERROR: "equipengine/FETCH_TUTORIALS_ERROR",

  // UPDATE_TUTORIAL_COMPLETED
  UPDATE_TUTORIAL_COMPLETED_REQUEST:
    "equipengine/UPDATE_TUTORIAL_COMPLETED_REQUEST",
  UPDATE_TUTORIAL_COMPLETED_SUCCESS:
    "equipengine/UPDATE_TUTORIAL_COMPLETED_SUCCESS",
  UPDATE_TUTORIAL_COMPLETED_ERROR: "equipengine/UPDATE_TUTORIAL_COMPLETED_ERROR"
}

const initialState = Immutable({
  isFetchingTutorials: false,
  isUpdatingTutorialCompleted: false,
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

    //
    // UPDATE_TUTORIAL_COMPLETED
    //
    case types.UPDATE_TUTORIAL_COMPLETED_REQUEST:
      return state.merge({
        isUpdatingTutorialCompleted: true
      })
    case types.UPDATE_TUTORIAL_COMPLETED_SUCCESS:
      return state.merge({
        isUpdatingTutorialCompleted: false
        // TODO merge tutorial from payload with new completed
      })
    case types.UPDATE_TUTORIAL_COMPLETED_ERROR:
      return state.merge({
        isUpdatingTutorialCompleted: false
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
  }),

  //
  // UPDATE_TUTORIAL_COMPLETED
  //
  updateTutorialCompletedRequest: () => ({
    type: types.UPDATE_TUTORIAL_COMPLETED_REQUEST
  }),
  updateTutorialCompletedSuccess: ({ tutorialId, completed }) => ({
    type: types.UPDATE_TUTORIAL_COMPLETED_SUCCESS,
    payload: { tutorialId, completed }
  }),
  updateTutorialCompletedError: () => ({
    type: types.UPDATE_TUTORIAL_COMPLETED_ERROR
  })
}

// Selectors
const tutorialsSelector = () => state => state.tutorials

const selectIsFetchingTutorials = () =>
  createSelector(
    tutorialsSelector(),
    tutorials => tutorials.isFetchingTutorials
  )
const selectTutorials = () =>
  createSelector(tutorialsSelector(), tutorials => tutorials.tutorials)
const selectIsUpdatingTutorialCompleted = () =>
  createSelector(
    tutorialsSelector(),
    tutorials => tutorials.isUpdatingTutorialCompleted
  )

export const selectors = {
  selectIsFetchingTutorials,
  selectIsUpdatingTutorialCompleted,
  selectTutorials
}
