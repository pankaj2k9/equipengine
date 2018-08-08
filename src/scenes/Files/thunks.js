import * as API from "services/API"
import { actions as filesActions } from "./ducks"
import { ATTACHMENTABLE_GROUP_TYPE } from "services/constants"

export const fetchFiles = ({ attachmentable_id }) => {
  return async dispatch => {
    dispatch(filesActions.fetchGroupFilesRequest())

    try {
      const { attachments, meta } = await API.fetchAttachments({
        attachmentable_id,
        attachmentable_type: ATTACHMENTABLE_GROUP_TYPE
      })

      return dispatch(
        filesActions.fetchGroupFilesSuccess({ attachments, meta })
      )
    } catch (error) {
      return dispatch(filesActions.fetchGroupFilesError())
    }
  }
}
