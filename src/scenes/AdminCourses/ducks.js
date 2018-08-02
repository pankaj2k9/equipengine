import Immutable from "seamless-immutable"
import { createSelector } from "reselect"

// Types
export const types = {
  //
  // FETCH_COURSES
  //
  FETCH_COURSES_REQUEST: "equipengine-admin/FETCH_COURSES_REQUEST",
  FETCH_COURSES_SUCCESS: "equipengine-admin/FETCH_COURSES_SUCCESS",
  FETCH_COURSES_ERROR: "equipengine-admin/FETCH_COURSES_ERROR",
  //
  // CREATE_COURSE
  //
  CREATE_COURSE_REQUEST: "equipengine-admin/CREATE_COURSE_REQUEST",
  CREATE_COURSE_SUCCESS: "equipengine-admin/CREATE_COURSE_SUCCESS",
  CREATE_COURSE_ERROR: "equipengine-admin/CREATE_COURSE_ERROR"
}

const initialState = Immutable({
  isFetchingCourses: false,
  courses: [],
  coursesPagination: null,
  searchTerm: "",
  isSavingCourse: false
})

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    //
    // FETCH_COURSES
    //
    case types.FETCH_COURSES_REQUEST: {
      return state.merge({
        isFetchingCourses: true,
        searchTerm: action.payload.searchTerm
      })
    }
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
  fetchCoursesRequest: ({ term }) => ({
    type: types.FETCH_COURSES_REQUEST,
    payload: { searchTerm: term }
  }),
  fetchCoursesSuccess: ({ courses, pagination }) => ({
    type: types.FETCH_COURSES_SUCCESS,
    payload: { courses, coursesPagination: pagination }
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

// courses
const selectIsFetchingCourses = () =>
  createSelector(coursesSelector(), courses => courses.isFetchingCourses)
const selectIsSavingCourse = () =>
  createSelector(coursesSelector(), courses => courses.isSavingCourse)
const selectCourses = config =>
  createSelector(coursesSelector(), courses => {
    if (!config || !config.withoutCurrentGroupCourses) {
      return courses.courses
    }
    const groupCoursesIds = courses.groupCourses.map(
      groupCourse => groupCourse.id
    )
    return courses.courses.filter(
      course => !groupCoursesIds.includes(course.id)
    )
  })
const selectSearchTerm = () =>
  createSelector(coursesSelector(), courses => courses.searchTerm)

export const selectors = {
  selectIsFetchingCourses,
  selectIsSavingCourse,
  selectCourses,
  selectSearchTerm
}
