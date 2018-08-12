import { client } from "./API"
import { VIDEOABLE_TASK_TYPE } from "./constants"

/**
 * Fetch videos data without file content by type and id (like lesson type and lesson id)
 */
export const fetchVideos = ({ videoable_id, videoable_type }) =>
  client
    .get(`/api/v1/${videoable_type}/${videoable_id}/videos`)
    .then(response => response.data)

/**
 * Create video with video_link
 */
export const createVideo = ({
  videoable_id,
  videoable_type = VIDEOABLE_TASK_TYPE,
  video_link,
  title,
  description = ""
}) =>
  client
    .post(`/api/v1/${videoable_type}/${videoable_id}/videos`, {
      video_link,
      title: title || video_link,
      description
    })
    .then(response => response.data)
