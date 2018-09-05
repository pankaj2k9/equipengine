import Immutable from "seamless-immutable"
import { createSelector } from "reselect"

//Types
export const types = {
  //
  //Fetch  group files
  //
  FETCH_GROUP_FILES_REQUEST: "equipengine/FETCH_GROUP_FILES_REQUEST",
  FETCH_GROUP_FILES_SUCCESS: "equipengine/FETCH_GROUP_FILES_SUCCESS",
  FETCH_GROUP_FILES_ERROR: "equipengine/FETCH_GROUP_FILES_ERROR",

  //
  // fetch more group files
  //
  FETCH_MORE_GROUP_FILES_REQUEST: "equipengine/FETCH_MORE_GROUP_FILES_REQUEST",
  FETCH_MORE_GROUP_FILES_SUCCESS: "equipengine/FETCH_MORE_GROUP_FILES_SUCCESS",
  FETCH_MORE_GROUP_FILES_ERROR: "equipengine/FETCH_MORE_GROUP_FILES_ERROR"
}

const initalState = Immutable({
  isFetchingMoreAttachments: false,
  isFetchingAttachments: false,
  attachments: [],
  pagination: null,
  searchTerm: null
})

// reducer
export default (state = initalState, action) => {
  switch (action.type) {
    case types.FETCH_GROUP_FILES_REQUEST:
      return state.merge({
        isFetchingAttachments: true,
        searchTerm: action.payload.term
      })
    case types.FETCH_GROUP_FILES_SUCCESS:
      return state.merge({
        isFetchingAttachments: false,
        attachments: action.payload.attachments,
        pagination: action.payload.pagination
      })
    case types.FETCH_GROUP_FILES_ERROR:
      return state.merge({
        isFetchingAttachments: false
      })
    case types.FETCH_MORE_GROUP_FILES_REQUEST:
      return state.merge({
        isFetchingMoreAttachments: true
      })
    case types.FETCH_MORE_GROUP_FILES_SUCCESS:
      return state.merge({
        isFetchingMoreAttachments: false,
        attachments: state.attachments.concat(action.payload.attachments),
        pagination: action.payload.meta
      })
    case types.FETCH_MORE_GROUP_FILES_ERROR:
      return state.merge({
        isFetchingMoreAttachments: false,
        attachments: [],
        meta: null
      })
    default:
      return state
  }
}

//Actions
export const actions = {
  fetchGroupFilesRequest: ({ term }) => ({
    type: types.FETCH_GROUP_FILES_REQUEST,
    payload: { term }
  }),
  fetchGroupFilesSuccess: ({ attachments, meta }) => ({
    type: types.FETCH_GROUP_FILES_SUCCESS,
    payload: { attachments, pagination: meta }
  }),
  fetchGroupFilesError: () => ({
    type: types.FETCH_GROUP_FILES_ERROR
  }),
  fetchMoreGroupFilesRequest: () => ({
    type: types.FETCH_MORE_GROUP_FILES_REQUEST
  }),
  fetchMoreGroupFilesSuccess: ({ meta, attachments }) => ({
    type: types.FETCH_MORE_GROUP_FILES_SUCCESS,
    payload: { meta, attachments }
  }),
  fetchMoreGroupFilesError: () => ({
    type: types.FETCH_MORE_GROUP_FILES_ERROR
  })
}

//Selectors

const filesSelector = () => state => state.groupFiles

const selectIsFetchingFiles = () =>
  createSelector(
    filesSelector(),
    groupFiles => groupFiles.isFetchingAttachments
  )
const selectAttachments = () =>
  createSelector(filesSelector(), groupFiles => groupFiles.attachments)
const selectPagination = () =>
  createSelector(filesSelector(), groupFiles => groupFiles.pagination)

const selectIsFetchingMoreFiles = () =>
  createSelector(
    filesSelector(),
    groupFiles => groupFiles.isFetchingMoreAttachments
  )
const selectSearchTerm = () =>
  createSelector(filesSelector(), groupFiles => groupFiles.searchTerm)

export const selectors = {
  selectIsFetchingMoreFiles,
  selectIsFetchingFiles,
  selectAttachments,
  selectPagination,
  selectSearchTerm
}
