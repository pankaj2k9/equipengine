import { createSelector } from "reselect"

// Selectors
const videosSelector = () => state => state.adminVideos

const selectVideos = () =>
  createSelector(videosSelector(), videos => videos.videos)
const selectIsFetchingVideos = () =>
  createSelector(videosSelector(), videos => videos.isFetchingVideos)
const selectIsCreatingVideo = () =>
  createSelector(videosSelector(), videos => videos.isCreatingVideo)
const selectIsUpdatingVideo = () =>
  createSelector(videosSelector(), videos => videos.isUpdatingVideo)

export const selectors = {
  selectVideos,
  selectIsFetchingVideos,
  selectIsCreatingVideo,
  selectIsUpdatingVideo
}
