import Immutable from "seamless-immutable"

// Types
export const types = {
  // Fetch countries
  FECTH_COUNTRIES_REQUEST: "equipengine/FECTH_COUNTRIES_REQUEST",
  FECTH_COUNTRIES_SUCCESS: "equipengine/FECTH_COUNTRIES_SUCCESS",
  FECTH_COUNTRIES_ERROR: "equipengine/FECTH_COUNTRIES_ERROR"
}

const initialState = Immutable({
  isFetchingCountries: false,
  countries: []
})

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FECTH_COUNTRIES_REQUEST:
      return state.merge({
        isFetchingCountries: true
      })
    case types.FECTH_COUNTRIES_SUCCESS:
      return state.merge({
        isFetchingCountries: false,
        countries: action.payload.countries
      })
    case types.FECTH_COUNTRIES_ERROR:
      return state.merge({
        isFetchingCountries: false
      })
    default:
      return state
  }
}

// Actions

export const actions = {
  // Fetch countries
  fetchCountriesRequest: () => ({
    type: types.FECTH_COUNTRIES_REQUEST
  }),
  fetchCountriesSuccess: ({ countries }) => ({
    type: types.FECTH_COUNTRIES_SUCCESS,
    payload: { countries }
  }),
  fetchCountriesError: () => ({
    type: types.FECTH_COUNTRIES_ERROR
  })
}
