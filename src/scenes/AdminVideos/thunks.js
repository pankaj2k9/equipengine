import * as API from "services/API"
import { VIDEOABLE_ORGANIZATION_TYPE } from "services/constants"
import { actions } from "./ducks"

export const fetchOrganizationVideos = ({ organizationId }) => {
  return async dispatch => {
    dispatch(actions.fetchOrganizationVideosRequest())

    try {
      const { videos, meta } = await API.fetchVideos({
        videoable_id: organizationId,
        videoable_type: VIDEOABLE_ORGANIZATION_TYPE
      })

      return dispatch(
        actions.fetchOrganizationVideosSuccess({ videos, pagination: meta })
      )
    } catch (error) {
      return dispatch(actions.fetchOrganizationVideosError())
    }
  }
}

export const createOrganizationVideo = ({ organizationId, file, title }) => {
  return async dispatch => {
    dispatch(actions.createOrganizationVideoRequest())

    try {
      const { video } = await API.createVideo({
        videoable_id: organizationId,
        videoable_type: VIDEOABLE_ORGANIZATION_TYPE,
        file,
        title
      })

      return dispatch(actions.createOrganizationVideoSuccess({ video }))
    } catch (error) {
      return dispatch(actions.createOrganizationVideoError())
    }
  }
}

export const updateOrganizationVideo = ({
  id,
  organizationId,
  file,
  title
}) => {
  return async dispatch => {
    dispatch(actions.updateOrganizationVideoRequest())

    try {
      const { video } = await API.updateVideo({
        id,
        videoable_id: organizationId,
        videoable_type: VIDEOABLE_ORGANIZATION_TYPE,
        file,
        title
      })

      return dispatch(actions.updateOrganizationVideoSuccess({ video }))
    } catch (error) {
      return dispatch(actions.updateOrganizationVideoError())
    }
  }
}
