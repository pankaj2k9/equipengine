import Immutable from "seamless-immutable"
import { createSelector } from "reselect"

//Types
export const types = {
  //
  // FETCH_GROUP_FILES
  //
  FETCH_GROUP_FILES_ERROR: "equipengine/FETCH_GROUP_FILES_ERROR",
  FETCH_GROUP_FILES_REQUEST: "equipengine/FETCH_GROUP_FILES_REQUEST",
  FETCH_GROUP_FILES_SUCCESS: "equipengine/FETCH_GROUP_FILES_SUCCESS",

  //
  // DELETE_GROUP_FILE
  //
  DELETE_GROUP_FILE_ERROR: "equipengine/DELETE_GROUP_FILE_ERROR",
  DELETE_GROUP_FILE_REQUEST: "equipengine/DELETE_GROUP_FILE_REQUEST",
  DELETE_GROUP_FILE_SUCCESS: "equipengine/DELETE_GROUP_FILE_SUCCESS",

  //
  // UPLOAD_GROUP_FILE
  //
  UPLOAD_GROUP_FILE_ERROR: "equipengine/UPLOAD_GROUP_FILE_ERROR",
  UPLOAD_GROUP_FILE_REQUEST: "equipengine/UPLOAD_GROUP_FILE_REQUEST",
  UPLOAD_GROUP_FILE_SUCCESS: "equipengine/UPLOAD_GROUP_FILE_SUCCESS"
}

const initialState = Immutable({
  attachments: [],
  isFetchingAttachments: false,
  isRemovingAttachment: false,
  isUploadingAttachment: false,
  pagination: { current_page: 1, current_count: 20 },
  term: null
})

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    //
    // FETCH_GROUP_FILES
    //
    case types.FETCH_GROUP_FILES_REQUEST:
      return state.merge({
        isFetchingAttachments: true,
        term: action.payload.term
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

    //
    // DELETE_GROUP_FILE
    //
    case types.DELETE_GROUP_FILE_ERROR:
      return state.merge({ isRemovingAttachment: false })

    case types.DELETE_GROUP_FILE_REQUEST:
      return state.merge({ isRemovingAttachment: true })

    case types.DELETE_GROUP_FILE_SUCCESS: {
      const { attachment } = action.payload

      const attachments = Immutable(state.attachments).asMutable()
      const index = attachments.findIndex(item => item.id === attachment.id)

      attachments.splice(index, 1)

      return state.merge({ attachments, isRemovingAttachment: false })
    }

    //
    // UPLOAD_GROUP_FILE
    //
    case types.UPLOAD_GROUP_FILE_ERROR:
      return state.merge({ isUploadingAttachment: false })

    case types.UPLOAD_GROUP_FILE_REQUEST:
      return state.merge({ isUploadingAttachment: true })

    case types.UPLOAD_GROUP_FILE_SUCCESS:
      return state.merge({
        isUploadingAttachment: false,
        attachments: [...state.attachments, action.payload.attachment]
      })

    default:
      return state
  }
}

//Actions
export const actions = {
  //
  // FETCH_GROUP_FILES
  //
  fetchGroupFilesError: () => ({ type: types.FETCH_GROUP_FILES_ERROR }),
  fetchGroupFilesRequest: ({ pagination, term }) => ({
    type: types.FETCH_GROUP_FILES_REQUEST,
    payload: { pagination, term }
  }),
  fetchGroupFilesSuccess: ({ attachments, pagination }) => ({
    type: types.FETCH_GROUP_FILES_SUCCESS,
    payload: { attachments, pagination }
  }),

  //
  // DELETE_GROUP_FILE
  //
  deleteGroupFileError: () => ({ type: types.DELETE_GROUP_FILE_ERROR }),
  deleteGroupFileRequest: () => ({ type: types.DELETE_GROUP_FILE_REQUEST }),
  deleteGroupFileSuccess: ({ attachment }) => ({
    type: types.DELETE_GROUP_FILE_SUCCESS,
    payload: { attachment }
  }),

  //
  // UPLOAD_GROUP_FILE
  //
  uploadGroupFileError: () => ({ type: types.UPLOAD_GROUP_FILE_ERROR }),
  uploadGroupFileRequest: () => ({ type: types.UPLOAD_GROUP_FILE_REQUEST }),
  uploadGroupFileSuccess: ({ attachment }) => ({
    type: types.UPLOAD_GROUP_FILE_SUCCESS,
    payload: { attachment }
  })
}

//Selectors

const filesSelector = () => state => state.groupFiles

const selectAttachments = () =>
  createSelector(filesSelector(), groupFiles => groupFiles.attachments)

const selectIsFetchingAttachments = () =>
  createSelector(
    filesSelector(),
    groupFiles => groupFiles.isFetchingAttachments
  )

const selectIsRemovingAttachment = () =>
  createSelector(filesSelector(), groupFiles => groupFiles.isRemovingAttachment)

const selectIsUploadingAttachment = () =>
  createSelector(
    filesSelector(),
    groupFiles => groupFiles.isUploadingAttachment
  )

const selectPagination = () =>
  createSelector(filesSelector(), groupFiles => groupFiles.pagination)

const selectTerm = () =>
  createSelector(filesSelector(), groupFiles => groupFiles.term)

export const selectors = {
  selectAttachments,
  selectIsFetchingAttachments,
  selectIsRemovingAttachment,
  selectIsUploadingAttachment,
  selectPagination,
  selectTerm
}
