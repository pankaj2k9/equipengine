import { createSelector } from "reselect"

// Selectors
const addressSelector = () => state => state.address

const selectIsFetchingAddress = () =>
  createSelector(
    addressSelector(),
    address => address.isFetchingStates || address.isFetchingCountries
  )
const selectCountries = () =>
  createSelector(addressSelector(), address => address.countries)
const selectStates = () =>
  createSelector(addressSelector(), address => address.states)

export const selectors = {
  selectIsFetchingAddress,
  selectCountries,
  selectStates
}
