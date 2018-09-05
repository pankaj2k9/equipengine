import * as API from "services/API"
import { actions } from "./ducks"

export const createVideo = ({
  videoableId,
  videoLink,
  file,
  title,
  description
}) => {
  return async dispatch => {
    dispatch(actions.createVideoRequest())

    try {
      const { video } = await API.createVideo({
        videoable_id: videoableId,
        video_link: videoLink,
        file,
        title,
        description
      })

      return dispatch(
        actions.createVideoSuccess({
          video
        })
      )
    } catch (error) {
      return dispatch(actions.createVideoError())
    }
  }
}
