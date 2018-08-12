import * as API from "services/API"
import { actions } from "./ducks"

export const fetchCountries = () => {
  return async dispatch => {
    dispatch(actions.fetchCountriesRequest())

    try {
      const response = await API.fetchCountries({})

      return dispatch(actions.fetchCountriesSuccess(response))
    } catch (error) {
      return dispatch(actions.fetchCountriesError())
    }
  }
}

export const fetchStates = () => {
  return async dispatch => {
    dispatch(actions.fetchStatesRequest())

    try {
      const response = await API.fetchStates({})

      return dispatch(actions.fetchStatesSuccess({ states: response.states }))
    } catch (error) {
      return dispatch(actions.fetchStatesError())
    }
  }
}
