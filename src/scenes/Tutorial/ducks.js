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
  UPDATE_TUTORIAL_COMPLETED_ERROR:
    "equipengine/UPDATE_TUTORIAL_COMPLETED_ERROR",

  //
  // FETCH_TASKS
  //
  FETCH_TASKS_REQUEST: "equipengine/FETCH_TASKS_REQUEST",
  FETCH_TASKS_SUCCESS: "equipengine/FETCH_TASKS_SUCCESS",
  FETCH_TASKS_ERROR: "equipengine/FETCH_TASKS_ERROR"
}

const initialState = Immutable({
  isFetchingTutorials: false,
  isUpdatingTutorialCompleted: false,
  tutorials: [],
  pagination: null,
  isFetchingTasks: false,
  tasks: []
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

    //
    // FETCH_TASKS
    //
    case types.FETCH_TASKS_REQUEST:
      return state.merge({
        isFetchingTasks: true
      })
    case types.FETCH_TASKS_SUCCESS:
      return state.merge({
        isFetchingTasks: false,
        tasks: action.payload.tasks
      })
    case types.FETCH_TASKS_ERROR:
      return state.merge({
        isFetchingTasks: false,
        tasks: []
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
  }),

  //
  // FETCH_TASKS
  //
  fetchTasksRequest: () => ({
    type: types.FETCH_TASKS_REQUEST
  }),
  fetchTasksSuccess: ({ tasks, pagination }) => ({
    type: types.FETCH_TASKS_SUCCESS,
    payload: { tasks, pagination }
  }),
  fetchTasksError: () => ({
    type: types.FETCH_TASKS_ERROR
  })
}

// Selectors
const tutorialsSelector = () => state => state.tutorials

// Tutorials
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

// Tasks
const selectIsFetchingTasks = () =>
  createSelector(tutorialsSelector(), tutorials => tutorials.isFetchingTasks)
const selectTasks = () =>
  createSelector(tutorialsSelector(), tutorials => tutorials.tasks)

export const selectors = {
  selectIsFetchingTutorials,
  selectIsUpdatingTutorialCompleted,
  selectTutorials,
  selectIsFetchingTasks,
  selectTasks
}
