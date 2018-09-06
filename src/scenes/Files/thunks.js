import * as API from "services/API"
import { actions as filesActions } from "./ducks"
import { ATTACHMENTABLE_GROUP_TYPE } from "services/constants"

export const fetchAttachments = ({ attachmentable_id, pagination, term }) => {
  return async dispatch => {
    dispatch(filesActions.fetchGroupFilesRequest({ term }))

    try {
      const { attachments, ...meta } = await API.fetchAttachments({
        attachmentable_id,
        attachmentable_type: ATTACHMENTABLE_GROUP_TYPE,
        pagination,
        term
      })

      return dispatch(
        filesActions.fetchGroupFilesSuccess({ attachments, pagination: meta })
      )
    } catch (error) {
      return dispatch(filesActions.fetchGroupFilesError())
    }
  }
}

export const deleteAttachment = ({ attachmentable_id, id }) => {
  return async dispatch => {
    dispatch(filesActions.deleteGroupFileRequest({ id }))

    try {
      const { attachment } = await API.deleteAttachment({
        attachmentable_id,
        attachmentable_type: ATTACHMENTABLE_GROUP_TYPE,
        id
      })

      return dispatch(filesActions.deleteGroupFileSuccess({ attachment }))
    } catch (error) {
      return dispatch(filesActions.deleteGroupFileError())
    }
  }
}
