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
  file,
  title,
  description = ""
}) => {
  const formData = new FormData()
  formData.append("video[title]", title || video_link || (file && file.name))

  if (video_link) {
    formData.append("video[video_link]", video_link)
  }

  if (file) {
    formData.append("video[file]", file, file.name)
  }

  if (description) {
    formData.append("video[description]", description)
  }

  return client
    .post(`/api/v1/${videoable_type}/${videoable_id}/videos`, formData)
    .then(response => response.data)
}
