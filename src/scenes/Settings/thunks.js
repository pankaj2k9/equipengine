import * as API from "services/API"
import { actions } from "./ducks"

export const updateSettings = ({
  id,
  firstName,
  lastName,
  address,
  phone,
  zipCode,
  state,
  country,
  birthDate
}) => {
  return async dispatch => {
    dispatch(actions.updateSettingsRequest())

    try {
      const { user } = await API.updateSetting({
        id,
        firstName,
        lastName,
        address,
        phone,
        zipCode,
        state,
        country,
        birthDate
      })
      return dispatch(actions.updateSettingsSuccess({ user }))
    } catch (error) {
      return dispatch(actions.updateSettingsError())
    }
  }
}
