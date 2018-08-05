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
