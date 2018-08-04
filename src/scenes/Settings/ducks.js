import Immutable from "seamless-immutable"

// Types
export const types = {
  // Update settings
  UPDATE_SETTINGS_REQUEST: "equipengine/UPDATE_SETTINGS_REQUEST",
  UPDATE_SETTINGS_SUCCESS: "equipengine/UPDATE_SETTINGS_SUCCESS",
  UPDATE_SETTINGS_ERROR: "equipengine/UPDATE_SETTINGS_ERROR"
}

const initialState = Immutable({
  isUpdatingSettings: false
})

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_SETTINGS_REQUEST:
      return state.merge({
        isUpdatingSettings: true
      })
    case types.UPDATE_SETTINGS_SUCCESS:
      return state.merge({
        isUpdatingSettings: false
      })
    case types.UPDATE_SETTINGS_ERROR:
      return state.merge({
        isUpdatingSettings: false
      })

    default:
      return state
  }
}

// Actions

export const actions = {
  // Update setting
  updateSettingsRequest: () => ({
    type: types.UPDATE_SETTINGS_REQUEST
  }),
  updateSettingsSuccess: ({ user }) => ({
    type: types.UPDATE_SETTINGS_SUCCESS,
    payload: { user }
  }),
  updateSettingsError: () => ({
    type: types.UPDATE_SETTINGS_ERROR
  })
}
