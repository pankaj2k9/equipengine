import Immutable from "seamless-immutable"
import { createSelector } from "reselect"

//Types
export const types = {
  //
  //Fetch  group files
  //
  FETCH_GROUP_FILES_REQUEST: "equipengine/FETCH_GROUP_FILES_REQUEST",
  FETCH_GROUP_FILES_SUCCESS: "equipengine/FETCH_GROUP_FILES_SUCCESS",
  FETCH_GROUP_FILES_ERROR: "equipengine/FETCH_GROUP_FILES_ERROR"
}

const initalState = Immutable({
  isFetchingAttachments: false,
  attachments: [],
  pagination: null
})

// reducer
export default (state = initalState, action) => {
  switch (action.type) {
    case types.FETCH_GROUP_FILES_REQUEST:
      return state.merge({
        isFetchingAttachments: true
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
    default:
      return state
  }
}

//Actions
export const actions = {
  fetchGroupFilesRequest: () => ({
    type: types.FETCH_GROUP_FILES_REQUEST
  }),
  fetchGroupFilesSuccess: ({ attachments, meta }) => ({
    type: types.FETCH_GROUP_FILES_SUCCESS,
    payload: { attachments, pagination: meta }
  }),
  fetchGroupFilesError: () => ({
    type: types.FETCH_GROUP_FILES_ERROR
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

export const selectors = {
  selectIsFetchingFiles,
  selectAttachments,
  selectPagination
}
