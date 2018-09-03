import Immutable from "seamless-immutable"
import { createSelector } from "reselect"

// Types
export const types = {
  FETCH_ORGANIZATION_REQUEST: "equipengine/FETCH_ORGANIZATION_REQUEST",
  FETCH_ORGANIZATION_SUCCESS: "equipengine/FETCH_ORGANIZATION_SUCCESS",
  FETCH_ORGANIZATION_ERROR: "equipengine/FETCH_ORGANIZATION_ERROR",

  CHANGE_ORGANIZATION_REQUEST: "equipengine/CHANGE_ORGANIZATION_REQUEST",
  CHANGE_ORGANIZATION_SUCCESS: "equipengine/CHANGE_ORGANIZATION_SUCCESS",
  CHANGE_ORGANIZATION_ERROR: "equipengine/CHANGE_ORGANIZATION_ERROR",

  ADD_ORGANIZATION_ADMINS: "equipengine/ADD_ORGANIZATION_ADMINS",

  DELETE_ORGANIZATION_ADMIN: "equipengine/DELETE_ORGANIZATION_ADMIN",

  UPDATE_ORGANIZATION_ADMIN_REQUEST:
    "equipengine/UPDATE_ORGANIZATION_ADMIN_REQUEST",
  UPDATE_ORGANIZATION_ADMIN_SUCCESS:
    "equipengine/UPDATE_ORGANIZATION_ADMIN_SUCCESS",
  UPDATE_ORGANIZATION_ADMIN_ERROR:
    "equipengine/UPDATE_ORGANIZATION_ADMIN_ERROR",

  UPDATE_ORGANIZATION_NONADMIN_REQUEST:
    "equipengine/UPDATE_ORGANIZATION_NONADMIN_REQUEST",
  UPDATE_ORGANIZATION_NONADMIN_SUCCESS:
    "equipengine/UPDATE_ORGANIZATION_NONADMIN_SUCCESS",
  UPDATE_ORGANIZATION_NONADMIN_ERROR:
    "equipengine/UPDATE_ORGANIZATION_NONADMIN_ERROR",

  FETCH_ORGANIZATION_ADMINS_REQUEST:
    "equipengine/FETCH_ORGANIZATION_ADMINS_REQUEST",
  FETCH_ORGANIZATION_ADMINS_SUCCESS:
    "equipengine/FETCH_ORGANIZATION_ADMINS_SUCCESS",
  FETCH_ORGANIZATION_ADMINS_ERROR:
    "equipengine/FETCH_ORGANIZATION_ADMINS_ERROR",

  FETCH_ORGANIZATION_NONADMINS_REQUEST:
    "equipengine/FETCH_ORGANIZATION_NONADMINS_REQUEST",
  FETCH_ORGANIZATION_NONADMINS_SUCCESS:
    "equipengine/FETCH_ORGANIZATION_NONADMINS_SUCCESS",
  FETCH_ORGANIZATION_NONADMINS_ERROR:
    "equipengine/FETCH_ORGANIZATION_NONADMINS_ERROR"
}

const initialState = Immutable({
  isFetchingOrganization: true,
  organization: {},
  admins: [],
  adminsPagination: null,
  nonAdmins: [],
  nonAdminsPagination: null,
  isFetchingAdmins: false,
  isFetchingNonAdmins: false
})

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ORGANIZATION_REQUEST:
      return state.merge({
        isFetchingOrganization: true
      })
    case types.FETCH_ORGANIZATION_SUCCESS:
      return state.merge({
        isFetchingOrganization: false,
        organization: action.payload.organization
      })
    case types.FETCH_ORGANIZATION_ERROR:
      return state.merge({
        isFetchingOrganization: false
      })

    case types.CHANGE_ORGANIZATION_REQUEST:
      return state
    case types.CHANGE_ORGANIZATION_SUCCESS:
      return state.merge({
        organization: action.payload.organization
      })
    case types.CHANGE_ORGANIZATION_ERROR:
      return state

    case types.FETCH_ORGANIZATION_ADMINS_REQUEST:
      return state.merge({
        isFetchingAdmins: true
      })
    case types.FETCH_ORGANIZATION_ADMINS_SUCCESS:
      return state.merge({
        isFetchingAdmins: false,
        admins: [...state.admins, ...action.payload.users],
        adminsPagination: action.payload.pagination
      })
    case types.FETCH_ORGANIZATION_ADMINS_ERROR:
      return state.merge({
        isFetchingAdmins: false
      })

    case types.FETCH_ORGANIZATION_NONADMINS_REQUEST:
      return state.merge({
        isFetchingNonAdmins: true
      })
    case types.FETCH_ORGANIZATION_NONADMINS_SUCCESS:
      return state.merge({
        isFetchingNonAdmins: false,
        nonAdmins: [...state.nonAdmins, ...action.payload.users],
        nonAdminsPagination: action.payload.pagination
      })
    case types.FETCH_ORGANIZATION_NONADMINS_ERROR:
      return state.merge({
        isFetchingNonAdmins: false
      })

    case types.ADD_ORGANIZATION_ADMINS: {
      const { selectedIds } = action.payload

      return state.merge({
        admins: [
          ...state.admins,
          ...state.nonAdmins.filter(user =>
            selectedIds.some(id => user.id === id)
          )
        ],
        nonAdmins: state.nonAdmins.filter(user =>
          selectedIds.every(id => user.id !== id)
        )
      })
    }

    case types.DELETE_ORGANIZATION_ADMIN: {
      const {
        user,
        user: { id }
      } = action.payload

      return state.merge({
        admins: [...state.admins.filter(user => user.id !== id)],
        nonAdmins: [...state.nonAdmins, user]
      })
    }

    case types.UPDATE_ORGANIZATION_ADMIN_REQUEST:
      return state
    case types.UPDATE_ORGANIZATION_ADMIN_SUCCESS: {
      const { user } = action.payload

      const admins = Immutable(state.admins).asMutable()
      const index = admins.findIndex(item => item.id === user.user_id)

      const oldUser = admins[index]

      const updatedUser = { ...oldUser, organization_settings: user }

      admins.splice(index, 1, updatedUser)

      return state.merge({ admins })
    }
    case types.UPDATE_ORGANIZATION_ADMIN_ERROR:
      return state

    case types.UPDATE_ORGANIZATION_NONADMIN_REQUEST:
      return state
    case types.UPDATE_ORGANIZATION_NONADMIN_SUCCESS: {
      const { user } = action.payload

      const nonAdmins = Immutable(state.nonAdmins).asMutable()
      const index = nonAdmins.findIndex(item => item.id === user.user_id)

      const oldUser = nonAdmins[index]

      const updatedUser = { ...oldUser, organization_settings: user }

      nonAdmins.splice(index, 1, updatedUser)

      return state.merge({ nonAdmins })
    }
    case types.UPDATE_ORGANIZATION_NONADMIN_ERROR:
      return state

    default:
      return state
  }
}

// Actions
export const actions = {
  //
  // FETCH_ORGANIZATION
  //
  fetchOrganizationRequest: () => ({
    type: types.FETCH_ORGANIZATION_REQUEST
  }),
  fetchOrganizationSuccess: ({ organization }) => ({
    type: types.FETCH_ORGANIZATION_SUCCESS,
    payload: { organization }
  }),
  fetchOrganizationError: () => ({
    type: types.FETCH_ORGANIZATION_ERROR
  }),

  //
  // CHANGE_ORGANIZATION
  //
  changeOrganizationRequest: () => ({
    type: types.CHANGE_ORGANIZATION_REQUEST
  }),
  changeOrganizationSuccess: ({ organization }) => ({
    type: types.CHANGE_ORGANIZATION_SUCCESS,
    payload: { organization }
  }),
  changeOrganizationError: () => ({
    type: types.CHANGE_ORGANIZATION_ERROR
  }),

  //
  // FETCH_ORGANIZATION_ADMINS
  //
  fetchOrganizationAdminsRequest: () => ({
    type: types.FETCH_ORGANIZATION_ADMINS_REQUEST
  }),
  fetchOrganizationAdminsSuccess: ({ users, pagination }) => ({
    type: types.FETCH_ORGANIZATION_ADMINS_SUCCESS,
    payload: { users, pagination }
  }),
  fetchOrganizationAdminsError: () => ({
    type: types.FETCH_ORGANIZATION_ADMINS_ERROR
  }),

  //
  // FETCH_ORGANIZATION_NONADMINS
  //
  fetchOrganizationNonAdminsRequest: () => ({
    type: types.FETCH_ORGANIZATION_NONADMINS_REQUEST
  }),
  fetchOrganizationNonAdminsSuccess: ({ users, pagination }) => ({
    type: types.FETCH_ORGANIZATION_NONADMINS_SUCCESS,
    payload: { users, pagination }
  }),
  fetchOrganizationNonAdminsError: () => ({
    type: types.FETCH_ORGANIZATION_NONADMINS_ERROR
  }),

  //
  // ADD_ORGANIZATION_ADMINS
  //
  addOrganizationAdmins: selectedIds => ({
    type: types.ADD_ORGANIZATION_ADMINS,
    payload: { selectedIds }
  }),

  //
  // DELETE_ORGANIZATION_ADMIN
  //
  deleteOrganizationAdmin: user => ({
    type: types.DELETE_ORGANIZATION_ADMIN,
    payload: { user }
  }),

  //
  // UPDATE_ORGANIZATION_ADMIN
  //
  updateOrganizationAdminRequest: () => ({
    type: types.UPDATE_ORGANIZATION_ADMIN_REQUEST
  }),
  updateOrganizationAdminSuccess: ({ user }) => ({
    type: types.UPDATE_ORGANIZATION_ADMIN_SUCCESS,
    payload: { user }
  }),
  updateOrganizationAdminError: () => ({
    type: types.UPDATE_ORGANIZATION_ADMIN_ERROR
  }),

  //
  // UPDATE_ORGANIZATION_NONADMIN
  //
  updateOrganizationNonAdminRequest: () => ({
    type: types.UPDATE_ORGANIZATION_NONADMIN_REQUEST
  }),
  updateOrganizationNonAdminSuccess: ({ user }) => ({
    type: types.UPDATE_ORGANIZATION_NONADMIN_SUCCESS,
    payload: { user }
  }),
  updateOrganizationNonAdminError: () => ({
    type: types.UPDATE_ORGANIZATION_NONADMIN_ERROR
  })
}

// Selectors
const organizationSettingsSelector = () => state =>
  state.adminOrganizationSettings

// organization settings
const selectOrganization = () =>
  createSelector(
    organizationSettingsSelector(),
    settings => settings.organization
  )

const selectIsFetchingOrganization = () =>
  createSelector(
    organizationSettingsSelector(),
    settings => settings.isFetchingOrganization
  )

const selectAdmins = () =>
  createSelector(organizationSettingsSelector(), settings => settings.admins)

const selectNonAdmins = () =>
  createSelector(organizationSettingsSelector(), settings => settings.nonAdmins)

const selectAdminsPagination = () =>
  createSelector(
    organizationSettingsSelector(),
    settings => settings.adminsPagination
  )

const selectNonAdminsPagination = () =>
  createSelector(
    organizationSettingsSelector(),
    settings => settings.nonAdminsPagination
  )

const selectIsFetchingAdmins = () =>
  createSelector(
    organizationSettingsSelector(),
    settings => settings.isFetchingAdmins
  )

const selectIsFetchingNonAdmins = () =>
  createSelector(
    organizationSettingsSelector(),
    settings => settings.isFetchingNonAdmins
  )

export const selectors = {
  selectOrganization,
  selectIsFetchingOrganization,
  selectAdmins,
  selectNonAdmins,
  selectAdminsPagination,
  selectNonAdminsPagination,
  selectIsFetchingAdmins,
  selectIsFetchingNonAdmins
}
