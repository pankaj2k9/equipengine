import Immutable from "seamless-immutable"
import { createSelector } from "reselect"

// Types
export const types = {
  //
  // CREATE_THREAD
  //
  CREATE_THREAD_REQUEST: "equipengine/CREATE_THREAD_REQUEST",
  CREATE_THREAD_SUCCESS: "equipengine/CREATE_THREAD_SUCCESS",
  CREATE_THREAD_ERROR: "equipengine/CREATE_THREAD_ERROR",
  //
  // FETCH_COURSE_THREADS
  //
  FETCH_COURSE_THREADS_REQUEST: "equipengine/FETCH_COURSE_THREADS_REQUEST",
  FETCH_COURSE_THREADS_SUCCESS: "equipengine/FETCH_COURSE_THREADS_SUCCESS",
  FETCH_COURSE_THREADS_ERROR: "equipengine/FETCH_COURSE_THREADS_ERROR",
  //
  // FETCH_THREAD_COMMENTS
  //
  FETCH_THREAD_COMMENTS_REQUEST: "equipengine/FETCH_THREAD_COMMENTS_REQUEST",
  FETCH_THREAD_COMMENTS_SUCCESS: "equipengine/FETCH_THREAD_COMMENTS_SUCCESS",
  FETCH_THREAD_COMMENTS_ERROR: "equipengine/FETCH_THREAD_COMMENTS_ERROR"
}

const initialState = Immutable({
  isFetchingThreads: false,
  threads: [],
  pagination: null,
  threadComments: {
    comments: {},
    pagination: null
  }
})

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    //
    // CREATE_THREAD
    //
    case types.CREATE_THREAD_REQUEST:
      return state
    case types.CREATE_THREAD_SUCCESS:
      return state.merge({
        threads: state.threads.concat([action.payload.courseThread])
      })
    case types.CREATE_THREAD_ERROR:
      return state
    //
    // FETCH_THREAD_COMMENTS
    //
    case types.FETCH_THREAD_COMMENTS_REQUEST:
      return state.merge({
        isFetchingThreads: true,
        threadComments: { comments: {}, pagination: null }
      })
    case types.FETCH_THREAD_COMMENTS_SUCCESS:
      return state.merge({
        isFetchingThreads: false,
        threadComments: {
          comments: action.payload.comments,
          pagination: action.payload.pagination
        }
      })
    case types.FETCH_THREAD_COMMENTS_ERROR:
      return state.merge({
        isFetchingThreads: false,
        threadComments: { comments: {}, pagination: null }
      })
    //
    // FETCH_COURSE_THREADS
    //
    case types.FETCH_COURSE_THREADS_REQUEST:
      return state.merge({
        isFetchingThreads: true,
        threads: [],
        pagination: null
      })
    case types.FETCH_COURSE_THREADS_SUCCESS:
      return state.merge({
        isFetchingThreads: false,
        threads: action.payload.threads,
        pagination: action.payload.pagination
      })
    case types.FETCH_COURSE_THREADS_ERROR:
      return state.merge({
        isFetchingThreads: false,
        threads: [],
        pagination: null
      })
    default:
      return state
  }
}

// Actions
export const actions = {
  //
  // CREATE_THREAD
  //
  createThreadRequest: () => ({
    type: types.CREATE_THREAD_REQUEST
  }),
  createThreadSuccess: ({ courseThread }) => ({
    type: types.CREATE_THREAD_SUCCESS,
    payload: { courseThread }
  }),
  createThreadError: () => ({
    type: types.CREATE_THREAD_ERROR
  }),
  //
  // FETCH_COURSE_THREADS
  //
  fetchCourseThreadsRequest: () => ({
    type: types.FETCH_COURSE_THREADS_REQUEST
  }),
  fetchCourseThreadsSuccess: ({ threads, pagination }) => ({
    type: types.FETCH_COURSE_THREADS_SUCCESS,
    payload: { threads, pagination }
  }),
  fetchCourseThreadsError: () => ({
    type: types.FETCH_COURSE_THREADS_ERROR
  }),
  //
  // FETCH_THREAD_COMMENTS
  //
  fetchThreadCommentsRequest: () => ({
    type: types.FETCH_THREAD_COMMENTS_REQUEST
  }),
  fetchThreadCommentsSuccess: ({ comments, pagination }) => ({
    type: types.FETCH_THREAD_COMMENTS_SUCCESS,
    payload: { comments, pagination }
  }),
  fetchThreadCommentsError: () => ({
    type: types.FETCH_THREAD_COMMENTS_ERROR
  })
}

// Selectors
const courseThreadsSelector = () => state => state.courseThreads

const selectCourseThreads = () =>
  createSelector(courseThreadsSelector(), base => base.threads)

const selectIsFetchingCourseThreads = () =>
  createSelector(courseThreadsSelector(), base => base.isFetchingThreads)

const selectPagintation = () =>
  createSelector(courseThreadsSelector(), base => base.pagination)

const selectDiscussionThreads = () =>
  createSelector(courseThreadsSelector(), base => base.threadComments)

export const selectors = {
  selectCourseThreads,
  selectIsFetchingCourseThreads,
  selectDiscussionThreads,
  selectPagintation
}
