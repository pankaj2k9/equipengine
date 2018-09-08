import Immutable from "seamless-immutable"

// Types
export const types = {
  //
  // SELECT_USER
  //
  SELECT_USER: "equipengine/SELECT_USER",
  //
  // FETCH_STUDENT_COURSES_TUTORIALS
  //
  FETCH_STUDENT_COURSES_TUTORIALS_REQUEST:
    "equipengine/FETCH_STUDENT_COURSES_TUTORIALS_REQUEST",
  FETCH_STUDENT_COURSES_TUTORIALS_SUCCESS:
    "equipengine/FETCH_STUDENT_COURSES_TUTORIALS_SUCCESS",
  FETCH_STUDENT_COURSES_TUTORIALS_ERROR:
    "equipengine/FETCH_STUDENT_COURSES_TUTORIALS_ERROR"
}

const initialState = Immutable({
  selectedUserId: null,
  // map with course id as key and tutorial list as value
  coursesTutorials: {},
  isFetchingCoursesTutorials: false
})

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    //
    // SELECT_USER
    //
    case types.SELECT_USER:
      return state.merge({
        selectedUserId: action.payload.userId
      })

    //
    // FETCH_STUDENT_COURSES_TUTORIALS
    //
    case types.FETCH_STUDENT_COURSES_TUTORIALS_REQUEST:
      return state.merge({
        isFetchingCoursesTutorials: true
      })
    case types.FETCH_STUDENT_COURSES_TUTORIALS_SUCCESS:
      return state.merge({
        isFetchingCoursesTutorials: false,
        coursesTutorials: action.payload.coursesTutorials
      })
    case types.FETCH_STUDENT_COURSES_TUTORIALS_ERROR:
      return state.merge({
        isFetchingCoursesTutorials: false
      })

    default:
      return state
  }
}

// Actions
export const actions = {
  //
  // SELECT_USER
  //
  selectUser: ({ userId }) => ({
    type: types.SELECT_USER,
    payload: { userId }
  }),

  //
  // FETCH_STUDENT_COURSES_TUTORIALS
  //
  fetchStudentCoursesTutorialsRequest: () => ({
    type: types.FETCH_STUDENT_COURSES_TUTORIALS_REQUEST
  }),
  fetchStudentCoursesTutorialsSuccess: ({ coursesTutorials }) => ({
    type: types.FETCH_STUDENT_COURSES_TUTORIALS_SUCCESS,
    payload: { coursesTutorials }
  }),
  fetchStudentCoursesTutorialsError: () => ({
    type: types.FETCH_STUDENT_COURSES_TUTORIALS_ERROR
  })
}
