import Immutable from "seamless-immutable"

// Types
export const types = {
  //
  // FETCH_GROUP_COURSES
  //
  FETCH_GROUP_COURSES_REQUEST: "equipengine-admin/FETCH_GROUP_COURSES_REQUEST",
  FETCH_GROUP_COURSES_SUCCESS: "equipengine-admin/FETCH_GROUP_COURSES_SUCCESS",
  FETCH_GROUP_COURSES_ERROR: "equipengine-admin/FETCH_GROUP_COURSES_ERROR",
  //
  // FETCH_GROUP_COURSES
  //
  FETCH_MORE_GROUP_COURSES_REQUEST:
    "equipengine-admin/FETCH_MORE_GROUP_COURSES_REQUEST",
  FETCH_MORE_GROUP_COURSES_SUCCESS:
    "equipengine-admin/FETCH_MORE_GROUP_COURSES_SUCCESS",
  FETCH_MORE_GROUP_COURSES_ERROR:
    "equipengine-admin/FETCH_MORE_GROUP_COURSES_ERROR",
  //
  // ADD_COURSES_TO_GROUP
  //
  ADD_COURSES_TO_GROUP_REQUEST:
    "equipengine-admin/ADD_COURSES_TO_GROUP_REQUEST",
  ADD_COURSES_TO_GROUP_SUCCESS:
    "equipengine-admin/ADD_COURSES_TO_GROUP_SUCCESS",
  ADD_COURSES_TO_GROUP_ERROR: "equipengine-admin/ADD_COURSES_TO_GROUP_ERROR",
  //
  // FETCH_GROUP_COURSE_SETTINGS
  //
  FETCH_GROUP_COURSE_SETTINGS_REQUEST:
    "equipengine-admin/FETCH_GROUP_COURSE_SETTINGS_REQUEST",
  FETCH_GROUP_COURSE_SETTINGS_SUCCESS:
    "equipengine-admin/FETCH_GROUP_COURSE_SETTINGS_SUCCESS",
  FETCH_GROUP_COURSE_SETTINGS_ERROR:
    "equipengine-admin/FETCH_GROUP_COURSE_SETTINGS_ERROR",
  //
  // UPDATE_GROUP_COURSE_SETTINGS
  //
  UPDATE_GROUP_COURSE_SETTINGS_REQUEST:
    "equipengine-admin/UPDATE_GROUP_COURSE_SETTINGS_REQUEST",
  UPDATE_GROUP_COURSE_SETTINGS_SUCCESS:
    "equipengine-admin/UPDATE_GROUP_COURSE_SETTINGS_SUCCESS",
  UPDATE_GROUP_COURSE_SETTINGS_ERROR:
    "equipengine-admin/UPDATE_GROUP_COURSE_SETTINGS_ERROR",
  //
  // DELETE_GROUP_COURSE_SETTINGS
  //
  DELETE_GROUP_COURSE_SETTINGS_REQUEST:
    "equipengine-admin/DELETE_GROUP_COURSE_SETTINGS_REQUEST",
  DELETE_GROUP_COURSE_SETTINGS_SUCCESS:
    "equipengine-admin/DELETE_GROUP_COURSE_SETTINGS_SUCCESS",
  DELETE_GROUP_COURSE_SETTINGS_ERROR:
    "equipengine-admin/DELETE_GROUP_COURSE_SETTINGS_ERROR"
}

const initialState = Immutable({
  groupCourses: [],
  groupCoursesPagination: null,
  isFetchingGroupCourses: false,
  isAddingCoursesToGroup: false,
  groupCourseSettings: [],
  groupCourseSettingsPagination: null,
  isFetchingGroupCourseSettings: false,
  isUpdatingGroupCourseSettings: false,
  isDeletingGroupCourseSettings: false
})

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    //
    // FETCH_GROUP_COURSES
    //
    case types.FETCH_GROUP_COURSES_REQUEST:
      return state.merge({
        isFetchingGroupCourses: true
      })
    case types.FETCH_GROUP_COURSES_SUCCESS:
      return state.merge({
        isFetchingGroupCourses: false,
        groupCourses: action.payload.groupCourses,
        groupCoursesPagination: action.payload.groupCoursesPagination
      })
    case types.FETCH_GROUP_COURSES_ERROR:
      return state.merge({
        isFetchingGroupCourses: false,
        groupCourses: []
      })

    //
    // FETCH_MORE_GROUP_COURSES
    //
    case types.FETCH_MORE_GROUP_COURSES_REQUEST:
      return state.merge({}) // placeholder for now
    case types.FETCH_MORE_GROUP_COURSES_SUCCESS:
      return state.merge({
        groupCourses: state.groupCourses.concat(action.payload.groupCourses),
        groupCoursesPagination: action.payload.groupCoursesPagination
      })

    //
    // ADD_COURSES_TO_GROUP
    //
    case types.ADD_COURSES_TO_GROUP_REQUEST:
      return state.merge({
        isAddingCoursesToGroup: true
      })
    case types.ADD_COURSES_TO_GROUP_SUCCESS:
      return state.merge({
        isAddingCoursesToGroup: false,
        groupCourses: state.groupCourses.concat(action.payload.courses)
      })
    case types.ADD_COURSES_TO_GROUP_ERROR:
      return state.merge({
        isAddingCoursesToGroup: false
      })

    //
    // FETCH_GROUP_COURSE_SETTINGS
    //
    case types.FETCH_GROUP_COURSE_SETTINGS_REQUEST:
      return state.merge({
        isFetchingGroupCourseSettings: true
      })
    case types.FETCH_GROUP_COURSE_SETTINGS_SUCCESS:
      return state.merge({
        isFetchingGroupCourseSettings: false,
        groupCourseSettings: action.payload.groupCourseSettings,
        groupCourseSettingsPagination:
          action.payload.groupCourseSettingsPagination
      })
    case types.FETCH_GROUP_COURSE_SETTINGS_ERROR:
      return state.merge({
        isFetchingGroupCourseSettings: false,
        groupCourseSettings: []
      })

    //
    // UPDATE_GROUP_COURSE_SETTINGS
    //
    case types.UPDATE_GROUP_COURSE_SETTINGS_REQUEST:
      return state.merge({
        isUpdatingGroupCourseSettings: true
      })
    case types.UPDATE_GROUP_COURSE_SETTINGS_SUCCESS: {
      const { course_group } = action.payload

      const groupCourseSettings = Immutable(
        state.groupCourseSettings
      ).asMutable()

      const index = groupCourseSettings.findIndex(
        item => item.id === course_group.id
      )

      groupCourseSettings.splice(index, 1, course_group)

      return state.merge({
        course_group,
        groupCourseSettings,
        isUpdatingGroupCourseSettings: false
      })
    }
    case types.UPDATE_GROUP_COURSE_SETTINGS_ERROR:
      return state.merge({
        isUpdatingGroupCourseSettings: false
      })

    //
    // DELETE_GROUP_COURSE_SETTINGS
    //
    case types.DELETE_GROUP_COURSE_SETTINGS_REQUEST:
      return state.merge({
        isDeletingGroupCourseSettings: true
      })
    case types.DELETE_GROUP_COURSE_SETTINGS_SUCCESS: {
      const { groupCourseSetting } = action.payload

      const groupCourseSettings = Immutable(
        state.groupCourseSettings
      ).asMutable()

      const index = groupCourseSettings.findIndex(
        item => item.id === groupCourseSetting.id
      )

      groupCourseSettings.splice(index, 1)

      return state.merge({
        groupCourseSetting: {},
        groupCourseSettings,
        isDeletingGroupCourseSettings: false
      })
    }
    case types.DELETE_GROUP_COURSE_SETTINGS_ERROR:
      return state.merge({
        isDeletingGroupCourseSettings: false
      })

    default:
      return state
  }
}

// Actions
export const actions = {
  //
  // FETCH_GROUP_COURSES
  //
  fetchGroupCoursesRequest: () => ({
    type: types.FETCH_GROUP_COURSES_REQUEST
  }),
  fetchGroupCoursesSuccess: ({ groupCourses, groupCoursesPagination }) => ({
    type: types.FETCH_GROUP_COURSES_SUCCESS,
    payload: { groupCourses, groupCoursesPagination }
  }),
  fetchGroupCoursesError: () => ({
    type: types.FETCH_GROUP_COURSES_ERROR
  }),
  //
  // FETCH_MORE_GROUP_COURSES
  //
  fetchMoreGroupCoursesRequest: () => ({
    type: types.FETCH_MORE_GROUP_COURSES_REQUEST
  }),
  fetchMoreGroupCoursesSuccess: ({ groupCourses, groupCoursesPagination }) => ({
    type: types.FETCH_MORE_GROUP_COURSES_SUCCESS,
    payload: { groupCourses, groupCoursesPagination }
  }),
  //
  // ADD_COURSES_TO_GROUP
  //
  addCoursesToGroupRequest: () => ({
    type: types.ADD_COURSES_TO_GROUP_REQUEST
  }),
  addCoursesToGroupSuccess: ({ courses }) => ({
    type: types.ADD_COURSES_TO_GROUP_SUCCESS,
    payload: { courses }
  }),
  addCoursesToGroupError: () => ({
    type: types.ADD_COURSES_TO_GROUP_ERROR
  }),
  //
  // FETCH_GROUP_COURSE_SETTINGS
  //
  fetchGroupCourseSettingsRequest: () => ({
    type: types.FETCH_GROUP_COURSE_SETTINGS_REQUEST
  }),
  fetchGroupCourseSettingsSuccess: ({
    groupCourseSettings,
    groupCourseSettingsPagination
  }) => ({
    type: types.FETCH_GROUP_COURSE_SETTINGS_SUCCESS,
    payload: { groupCourseSettings, groupCourseSettingsPagination }
  }),
  fetchGroupCourseSettingsError: () => ({
    type: types.FETCH_GROUP_COURSE_SETTINGS_ERROR
  }),
  //
  // UPDATE_GROUP_COURSE_SETTINGS
  //
  updateGroupCourseSettingsRequest: () => ({
    type: types.UPDATE_GROUP_COURSE_SETTINGS_REQUEST
  }),
  updateGroupCourseSettingsSuccess: ({ course_group }) => ({
    type: types.UPDATE_GROUP_COURSE_SETTINGS_SUCCESS,
    payload: { course_group }
  }),
  updateGroupCourseSettingsError: () => ({
    type: types.UPDATE_GROUP_COURSE_SETTINGS_ERROR
  }),
  //
  // DELETE_GROUP_COURSE_SETTINGS
  //
  deleteGroupCourseSettingsRequest: () => ({
    type: types.DELETE_GROUP_COURSE_SETTINGS_REQUEST
  }),
  deleteGroupCourseSettingsSuccess: ({ groupCourseSetting }) => ({
    type: types.DELETE_GROUP_COURSE_SETTINGS_SUCCESS,
    payload: { groupCourseSetting }
  }),
  deleteGroupCourseSettingsError: () => ({
    type: types.DELETE_GROUP_COURSE_SETTINGS_ERROR
  })
}
