import Immutable from "seamless-immutable"
import { createSelector } from "reselect"

// Types
export const types = {
  //
  // FETCH_GROUP_COURSES
  //
  FETCH_GROUP_COURSES_REQUEST: "equipengine/FETCH_GROUP_COURSES_REQUEST",
  FETCH_GROUP_COURSES_SUCCESS: "equipengine/FETCH_GROUP_COURSES_SUCCESS",
  FETCH_GROUP_COURSES_ERROR: "equipengine/FETCH_GROUP_COURSES_ERROR"
}

const initialState = Immutable({
  isFetchingCourses: false,
  courses: [],
  pagination: null
})

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    //
    // FETCH_GROUP_COURSES
    //
    case types.FETCH_GROUP_COURSES_REQUEST:
      return state.merge({
        isFetchingCourses: true
      })
    case types.FETCH_GROUP_COURSES_SUCCESS:
      return state.merge({
        isFetchingCourses: false,
        courses: action.payload.courses
      })
    case types.FETCH_GROUP_COURSES_ERROR:
      return state.merge({
        isFetchingCourses: false,
        courses: []
      })

    default:
      return state
  }
}

// Actions
export const actions = {
  //
  // FETCH_GROUP_COURSES
  //
  fetchCoursesRequest: () => ({
    type: types.FETCH_GROUP_COURSES_REQUEST
  }),
  fetchCoursesSuccess: ({ courses, pagination }) => ({
    type: types.FETCH_GROUP_COURSES_SUCCESS,
    payload: { courses, pagination }
  }),
  fetchCoursesError: () => ({
    type: types.FETCH_GROUP_COURSES_ERROR
  })
}

// Selectors
const coursesSelector = () => state => state.courses

const selectIsFetchingCourses = () =>
  createSelector(coursesSelector(), courses => courses.isFetchingCourses)
const selectCourses = () =>
  createSelector(coursesSelector(), courses => courses.courses)

export const selectors = { selectIsFetchingCourses, selectCourses }
