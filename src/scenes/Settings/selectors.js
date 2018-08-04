import { createSelector } from "reselect"

// Selectors
const settingSelector = () => state => state.settings

const selectIsUpdatingSettings = () =>
  createSelector(settingSelector(), settings => settings.isUpdatingSettings)

export const selectors = {
  selectIsUpdatingSettings
}
