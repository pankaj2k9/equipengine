import { createSelector } from "reselect"

// Selectors
const videosSelector = () => state => state.adminVideos

const selectIsCreatingVideo = () =>
  createSelector(videosSelector(), videos => videos.isCreatingVideo)

export const selectors = {
  selectIsCreatingVideo
}
