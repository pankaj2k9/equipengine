import { createSelector } from "reselect"

// Selectors
const countriesSelector = () => state => state.settings

const selectIsFetchingCountries = () =>
  createSelector(countriesSelector(), settings => settings.isFetchingCountries)
const selectStates = () =>
  createSelector(countriesSelector(), settings => settings.countries)

export const selectors = {
  selectIsFetchingCountries,
  selectStates
}
