import Immutable from "seamless-immutable"
import { createSelector } from "reselect"

// Types
export const types = {
  //
  // FETCH_COURSES
  //
  FETCH_COURSES_REQUEST: "equipengine-admin/FETCH_COURSES_REQUEST",
  FETCH_MORE_COURSES_REQUEST: "equipengine-admin/FETCH_MORE_COURSES_REQUEST",
  FETCH_COURSES_SUCCESS: "equipengine-admin/FETCH_COURSES_SUCCESS",
  FETCH_MORE_COURSES_SUCCESS: "equipengine-admin/FETCH_MORE_COURSES_SUCCESS",
  FETCH_COURSES_ERROR: "equipengine-admin/FETCH_COURSES_ERROR",
  //
  // CREATE_COURSE
  //
  CREATE_COURSE_REQUEST: "equipengine-admin/CREATE_COURSE_REQUEST",
  CREATE_COURSE_SUCCESS: "equipengine-admin/CREATE_COURSE_SUCCESS",
  CREATE_COURSE_ERROR: "equipengine-admin/CREATE_COURSE_ERROR",
  //
  // UPDATE_COURSE
  //
  UPDATE_COURSE_REQUEST: "equipengine-admin/UPDATE_COURSE_REQUEST",
  UPDATE_COURSE_SUCCESS: "equipengine-admin/UPDATE_COURSE_SUCCESS",
  UPDATE_COURSE_ERROR: "equipengine-admin/UPDATE_COURSE_ERROR"
}

const initialState = Immutable({
  isFetchingCourses: false,
  courses: [],
  coursesPagination: null,
  searchTerm: "",
  isSavingCourse: false,
  isUpdatingCourse: false
})

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    //
    // FETCH_COURSES
    //
    case types.FETCH_COURSES_REQUEST:
      return state.merge({
        isFetchingCourses: true,
        searchTerm: action.payload.searchTerm
      })
    case types.FETCH_MORE_COURSES_REQUEST:
      return state.merge({
        searchTerm: action.payload.searchTerm
      })
    case types.FETCH_COURSES_SUCCESS:
      return state.merge({
        isFetchingCourses: false,
        courses: action.payload.courses,
        coursesPagination: action.payload.coursesPagination
      })
    case types.FETCH_MORE_COURSES_SUCCESS:
      return state.merge({
        courses: state.courses.concat(action.payload.courses),
        coursesPagination: action.payload.coursesPagination
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

    //
    // UPDATE_COURSES
    //
    case types.UPDATE_COURSE_REQUEST:
      return state.merge({
        isUpdatingCourse: true
      })
    case types.UPDATE_COURSE_SUCCESS:
      const course = action.payload.course
      const index = state.courses.findIndex(item => item.id === course.id)
      const courses = state.courses.set(index, course)

      return state.merge({
        isUpdatingCourse: false,
        courses: courses
      })
    case types.UPDATE_COURSE_ERROR:
      return state.merge({
        isUpdatingCourse: false
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
  fetchMoreCoursesRequest: ({ term }) => ({
    type: types.FETCH_MORE_COURSES_REQUEST,
    payload: { searchTerm: term }
  }),
  fetchCoursesSuccess: ({ courses, pagination }) => ({
    type: types.FETCH_COURSES_SUCCESS,
    payload: { courses, coursesPagination: pagination }
  }),
  fetchMoreCoursesSuccess: ({ courses, pagination }) => ({
    type: types.FETCH_MORE_COURSES_SUCCESS,
    payload: { courses, coursesPagination: pagination }
  }),
  fetchCoursesError: () => ({
    type: types.FETCH_COURSES_ERROR
  }),
  //
  // CREATE_COURSES
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
  }),
  //
  // UPDATE_COURSES
  //
  updateCourseRequest: () => ({
    type: types.UPDATE_COURSE_REQUEST
  }),
  updateCourseSuccess: ({ course }) => ({
    type: types.UPDATE_COURSE_SUCCESS,
    payload: { course }
  }),
  updateCourseError: () => ({
    type: types.UPDATE_COURSE_ERROR
  })
}

// Selectors
const coursesSelector = () => state => state.adminCourses

// courses
const selectIsFetchingCourses = () =>
  createSelector(coursesSelector(), courses => courses.isFetchingCourses)
const selectIsSavingCourse = () =>
  createSelector(coursesSelector(), courses => courses.isSavingCourse)
const selectCourses = () =>
  createSelector(coursesSelector(), courses => courses.courses)
const selectSearchTerm = () =>
  createSelector(coursesSelector(), courses => courses.searchTerm)
const selectIsUpdatingCourse = () =>
  createSelector(coursesSelector(), courses => courses.isUpdatingCourse)
const selectCoursesPagination = () =>
  createSelector(coursesSelector(), courses => courses.coursesPagination)

export const selectors = {
  selectIsFetchingCourses,
  selectIsSavingCourse,
  selectCourses,
  selectSearchTerm,
  selectIsUpdatingCourse,
  selectCoursesPagination
}
