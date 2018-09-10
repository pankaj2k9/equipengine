import Immutable from "seamless-immutable"
import { createSelector } from "reselect"

//Types
export const types = {
  //
  // FETCH_GROUP_COMMENTS
  //
  FETCH_GROUP_COMMENTS_ERROR: "equipengine/FETCH_GROUP_COMMENTS_ERROR",
  FETCH_GROUP_COMMENTS_REQUEST: "equipengine/FETCH_GROUP_COMMENTS_REQUEST",
  FETCH_GROUP_COMMENTS_SUCCESS: "equipengine/FETCH_GROUP_COMMENTS_SUCCESS",

  //
  // CREATE_COMMENT
  //
  CREATE_COMMENT_ERROR: "equipengine/CREATE_COMMENT_ERROR",
  CREATE_COMMENT_REQUEST: "equipengine/CREATE_COMMENT_REQUEST",
  CREATE_COMMENT_SUCCESS: "equipengine/CREATE_COMMENT_SUCCESS"
}

const initialState = Immutable({
  comments: [],
  isCreatingComments: false,
  isFetchingComments: false,
  pagination: { current_page: 1, current_count: 20 }
})

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    //
    // FETCH_GROUP_COMMENTS
    //
    case types.FETCH_GROUP_COMMENTS_ERROR:
      return state.merge({ isFetchingComments: false })

    case types.FETCH_GROUP_COMMENTS_REQUEST:
      return state.merge({ isFetchingComments: true })

    case types.FETCH_GROUP_COMMENTS_SUCCESS:
      return state.merge({
        isFetchingComments: false,
        comments: action.payload.comments,
        pagination: action.payload.pagination
      })

    //
    // CREATE_COMMENT
    //
    case types.CREATE_COMMENT_ERROR:
      return state.merge({ isCreatingComments: false })

    case types.CREATE_COMMENT_REQUEST:
      return state.merge({ isCreatingComments: true })

    case types.CREATE_COMMENT_SUCCESS:
      return state.merge({
        isCreatingComments: false,
        comments: state.comments.concat(action.payload.comment)
      })

    default:
      return state
  }
}

//Actions
export const actions = {
  //
  // FETCH_GROUP_COMMENTS
  //
  fetchCommentsError: () => ({ type: types.FETCH_GROUP_COMMENTS_ERROR }),

  fetchCommentsRequest: ({ pagination }) => ({
    type: types.FETCH_GROUP_COMMENTS_REQUEST,
    payload: { pagination }
  }),

  fetchCommentsSuccess: ({ comments, pagination }) => ({
    type: types.FETCH_GROUP_COMMENTS_SUCCESS,
    payload: { comments, pagination }
  }),

  //
  // CREATE_COMMENT
  //
  createCommentError: () => ({ type: types.CREATE_COMMENT_ERROR }),

  createCommentRequest: () => ({ type: types.CREATE_COMMENT_REQUEST }),

  createCommentSuccess: ({ comment }) => ({
    type: types.CREATE_COMMENT_SUCCESS,
    payload: { comment }
  })
}

//Selectors

const dashboardSelector = () => state => state.dashboard

const selectComments = () =>
  createSelector(dashboardSelector(), dashboard => dashboard.comments)

const selectIsCreatingComments = () =>
  createSelector(dashboardSelector(), dashboard => dashboard.isCreatingComments)

const selectIsFetchingComments = () =>
  createSelector(dashboardSelector(), dashboard => dashboard.isFetchingComments)

const selectPagination = () =>
  createSelector(dashboardSelector(), dashboard => dashboard.pagination)

export const selectors = {
  selectComments,
  selectIsCreatingComments,
  selectIsFetchingComments,
  selectPagination
}
