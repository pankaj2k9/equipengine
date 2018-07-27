import Immutable from "seamless-immutable"
import { createSelector } from "reselect"

// Types
export const types = {
  //
  // FETCH_COURSES
  //
  FETCH_COURSES_REQUEST: "equipengine/FETCH_COURSES_REQUEST",
  FETCH_COURSES_SUCCESS: "equipengine/FETCH_COURSES_SUCCESS",
  FETCH_COURSES_ERROR: "equipengine/FETCH_COURSES_ERROR",
  //
  // CREATE_COURSE
  //
  CREATE_COURSE_REQUEST: "equipengine/CREATE_COURSE_REQUEST",
  CREATE_COURSE_SUCCESS: "equipengine/CREATE_COURSE_SUCCESS",
  CREATE_COURSE_ERROR: "equipengine/CREATE_COURSE_ERROR"
}

const initialState = Immutable({
  isFetchingCourses: false,
  courses: [],
  pagination: null,
  isSavingCourse: false
})

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    //
    // FETCH_COURSES
    //
    case types.FETCH_COURSES_REQUEST:
      return state.merge({
        isFetchingCourses: true
      })
    case types.FETCH_COURSES_SUCCESS:
      return state.merge({
        isFetchingCourses: false,
        courses: action.payload.courses
      })
    case types.FETCH_COURSES_ERROR:
      return state.merge({
        isFetchingCourses: false,
        courses: []
      })

    //
    // CREATE_COURSES
    //
    case types.CREATE_COURSE_REQUEST:
      return state.merge({
        isSavingCourse: true
      })
    case types.CREATE_COURSE_SUCCESS:
      return state.merge({
        isSavingCourse: false,
        courses: state.courses.concat(action.payload.course)
      })
    case types.CREATE_COURSE_ERROR:
      return state.merge({
        isSavingCourse: false
      })

    default:
      return state
  }
}

// Actions
export const actions = {
  //
  // FETCH_COURSES
  //
  fetchCoursesRequest: () => ({
    type: types.FETCH_COURSES_REQUEST
  }),
  fetchCoursesSuccess: ({ courses, pagination }) => ({
    type: types.FETCH_COURSES_SUCCESS,
    payload: { courses, pagination }
  }),
  fetchCoursesError: () => ({
    type: types.FETCH_COURSES_ERROR
  }),
  //
  // FETCH_COURSES
  //
  createCourseRequest: () => ({
    type: types.CREATE_COURSE_REQUEST
  }),
  createCourseSuccess: ({ course }) => ({
    type: types.CREATE_COURSE_SUCCESS,
    payload: { course }
  }),
  createCourseError: () => ({
    type: types.CREATE_COURSE_ERROR
  })
}

// Selectors
const coursesSelector = () => state => state.adminCourses

const selectIsFetchingCourses = () =>
  createSelector(coursesSelector(), courses => courses.isFetchingCourses)
const selectCourses = () =>
  createSelector(coursesSelector(), courses => courses.courses)
const selectIsSavingCourse = () =>
  createSelector(coursesSelector(), courses => courses.isSavingCourse)

export const selectors = {
  selectIsFetchingCourses,
  selectIsSavingCourse,
  selectCourses
}
