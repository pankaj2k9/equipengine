import Immutable from "seamless-immutable"

// Types
export const types = {
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
  groupCourses: [],
  groupCoursesPagination: null,
  isAddingCoursesToGroup: false
})

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
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
        groupCourses: state.groupCourses.concat(action.payload.courses)
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
  // ADD_COURSES_TO_GROUP
  //
  addCoursesToGroupRequest: () => ({
    type: types.ADD_COURSES_TO_GROUP_REQUEST
  }),
  addCoursesToGroupSuccess: ({ courses }) => ({
    type: types.ADD_COURSES_TO_GROUP_SUCCESS,
    payload: { courses }
  }),
  addCoursesToGroupError: () => ({
    type: types.ADD_COURSES_TO_GROUP_ERROR
  })
}
