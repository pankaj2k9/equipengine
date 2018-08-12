import Immutable from "seamless-immutable"

// Types
export const types = {
  // Fetch countries
  FECTH_COUNTRIES_REQUEST: "equipengine/FECTH_COUNTRIES_REQUEST",
  FECTH_COUNTRIES_SUCCESS: "equipengine/FECTH_COUNTRIES_SUCCESS",
  FECTH_COUNTRIES_ERROR: "equipengine/FECTH_COUNTRIES_ERROR",

  // Fetch states
  FETCH_STATES_REQUEST: "equipengine/FETCH_STATES_REQUEST",
  FETCH_STATES_SUCCESS: "equipengine/FETCH_STATES_SUCCESS",
  FETCH_STATES_ERROR: "equipengine/FETCH_STATES_ERROR"
}

const initialState = Immutable({
  isFetchingCountries: false,
  isFetchingStates: false,
  countries: [],
  states: []
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

    case types.FETCH_STATES_REQUEST:
      return state.merge({
        isFetchingStates: true
      })
    case types.FETCH_STATES_SUCCESS:
      return state.merge({
        isFetchingStates: false,
        states: action.payload.states
      })
    case types.FETCH_STATES_ERROR:
      return state.merge({
        isFetchingStates: false
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
  }),

  // Fetch states
  fetchStatesRequest: () => ({
    type: types.FETCH_STATES_REQUEST
  }),
  fetchStatesSuccess: ({ states }) => ({
    type: types.FETCH_STATES_SUCCESS,
    payload: { states }
  }),
  fetchStatesError: () => ({
    type: types.FETCH_STATES_ERROR
  })
}
