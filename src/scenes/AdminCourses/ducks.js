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
  CREATE_COURSE_ERROR: "equipengine-admin/CREATE_COURSE_ERROR",
  //
  // FETCH_GROUP_COURSES
  //
  FETCH_GROUP_COURSES_REQUEST: "equipengine-admin/FETCH_GROUP_COURSES_REQUEST",
  FETCH_GROUP_COURSES_SUCCESS: "equipengine-admin/FETCH_GROUP_COURSES_SUCCESS",
  FETCH_GROUP_COURSES_ERROR: "equipengine-admin/FETCH_GROUP_COURSES_ERROR",
  //
  // ADD_COURSES_TO_GROUP
  //
  ADD_COURSES_TO_GROUP_REQUEST:
    "equipengine-admin/ADD_COURSES_TO_GROUP_REQUEST",
  ADD_COURSES_TO_GROUP_SUCCESS:
    "equipengine-admin/ADD_COURSES_TO_GROUP_SUCCESS",
  ADD_COURSES_TO_GROUP_ERROR: "equipengine-admin/ADD_COURSES_TO_GROUP_ERROR"
}

const initialState = Immutable({
  // courses
  isFetchingCourses: false,
  courses: [],
  coursesPagination: null,
  searchTerm: "",
  isSavingCourse: false,
  isFetchingGroupCourses: false,
  // group courses
  groupCourses: [],
  groupCoursesPagination: null,
  isAddingCoursesToGroup: false
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

    //
    // FETCH_GROUP_COURSES
    //
    case types.FETCH_GROUP_COURSES_REQUEST:
      return state.merge({
        isFetchingGroupCourses: true
      })
    case types.FETCH_GROUP_COURSES_SUCCESS:
      return state.merge({
        isFetchingGroupCourses: false,
        groupCourses: action.payload.groupCourses
      })
    case types.FETCH_GROUP_COURSES_ERROR:
      return state.merge({
        isFetchingGroupCourses: false,
        groupCourses: []
      })

    //
    // ADD_COURSES_TO_GROUP
    //
    case types.ADD_COURSES_TO_GROUP_REQUEST:
      return state.merge({
        isAddingCoursesToGroup: true
      })
    case types.ADD_COURSES_TO_GROUP_SUCCESS:
      return state.merge({
        isAddingCoursesToGroup: false,
        groupCourses: state.groupCourses.concat(
          action.payload.courseIds.map(courseId =>
            state.courses.find(course => course.id === courseId)
          )
        )
      })
    case types.ADD_COURSES_TO_GROUP_ERROR:
      return state.merge({
        isAddingCoursesToGroup: false
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
  }),
  //
  // FETCH_GROUP_COURSES
  //
  fetchGroupCoursesRequest: () => ({
    type: types.FETCH_GROUP_COURSES_REQUEST
  }),
  fetchGroupCoursesSuccess: ({ groupCourses, groupCoursesPagination }) => ({
    type: types.FETCH_GROUP_COURSES_SUCCESS,
    payload: { groupCourses, groupCoursesPagination }
  }),
  fetchGroupCoursesError: () => ({
    type: types.FETCH_GROUP_COURSES_ERROR
  }),
  //
  // ADD_COURSES_TO_GROUP_TO_GROUP
  //
  addCoursesToGroupRequest: () => ({
    type: types.ADD_COURSES_TO_GROUP_REQUEST
  }),
  addCoursesToGroupSuccess: ({ courseIds }) => ({
    type: types.ADD_COURSES_TO_GROUP_SUCCESS,
    payload: { courseIds }
  }),
  addCoursesToGroupError: () => ({
    type: types.ADD_COURSES_TO_GROUP_ERROR
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

// group courses
const selectIsFetchingGroupCourses = () =>
  createSelector(coursesSelector(), courses => courses.isFetchingGroupCourses)
const selectIsAddingCoursesToGroup = () =>
  createSelector(coursesSelector(), courses => courses.isAddingCoursesToGroup)
const selectGroupCourses = () =>
  createSelector(coursesSelector(), courses => courses.groupCourses)

export const selectors = {
  // courses
  selectIsFetchingCourses,
  selectIsSavingCourse,
  selectCourses,
  selectSearchTerm,
  // group courses
  selectIsFetchingGroupCourses,
  selectGroupCourses,
  selectIsAddingCoursesToGroup
}
