import * as API from "services/API"
import { actions as filesActions } from "./ducks"
import { ATTACHMENTABLE_GROUP_TYPE } from "services/constants"

export const fetchFiles = ({ attachmentable_id, term }) => {
  return async dispatch => {
    dispatch(
      filesActions.fetchGroupFilesRequest({
        term
      })
    )

    try {
      const { attachments, meta } = await API.fetchAttachments({
        attachmentable_id,
        attachmentable_type: ATTACHMENTABLE_GROUP_TYPE,
        term
      })

      return dispatch(
        filesActions.fetchGroupFilesSuccess({ attachments, meta, term })
      )
    } catch (error) {
      return dispatch(filesActions.fetchGroupFilesError())
    }
  }
}

export const fetchMoreGroupFiles = ({
  attachmentable_id,
  term,
  pagination
}) => {
  return async dispatch => {
    dispatch(filesActions.fetchMoreGroupFilesRequest())

    try {
      const { attachments, meta } = await API.fetchAttachments({
        attachmentable_id,
        attachmentable_type: ATTACHMENTABLE_GROUP_TYPE,
        pagination,
        term
      })
      return dispatch(
        filesActions.fetchMoreGroupFilesSuccess({ attachments, meta })
      )
    } catch (error) {
      return dispatch(filesActions.fetchMoreGroupFilesError())
    }
  }
}
