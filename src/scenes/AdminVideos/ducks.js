import Immutable from "seamless-immutable"

// Types
export const types = {
  //
  // FETCH_ORGANIZATION_VIDEOS
  //
  FETCH_ORGANIZATION_VIDEOS_REQUEST:
    "equipengine-admin/FETCH_ORGANIZATION_VIDEOS_REQUEST",
  FETCH_ORGANIZATION_VIDEOS_SUCCESS:
    "equipengine-admin/FETCH_ORGANIZATION_VIDEOS_SUCCESS",
  FETCH_ORGANIZATION_VIDEOS_ERROR:
    "equipengine-admin/FETCH_ORGANIZATION_VIDEOS_ERROR",
  //
  // CREATE_ORGANIZATION_VIDEO
  //
  CREATE_ORGANIZATION_VIDEO_REQUEST:
    "equipengine-admin/CREATE_ORGANIZATION_VIDEO_REQUEST",
  CREATE_ORGANIZATION_VIDEO_SUCCESS:
    "equipengine-admin/CREATE_ORGANIZATION_VIDEO_SUCCESS",
  CREATE_ORGANIZATION_VIDEO_ERROR:
    "equipengine-admin/CREATE_ORGANIZATION_VIDEO_ERROR",
  //
  // UPDATE_ORGANIZATION_VIDEO
  //
  UPDATE_ORGANIZATION_VIDEO_REQUEST:
    "equipengine-admin/UPDATE_ORGANIZATION_VIDEO_REQUEST",
  UPDATE_ORGANIZATION_VIDEO_SUCCESS:
    "equipengine-admin/UPDATE_ORGANIZATION_VIDEO_SUCCESS",
  UPDATE_ORGANIZATION_VIDEO_ERROR:
    "equipengine-admin/UPDATE_ORGANIZATION_VIDEO_ERROR"
}

const initialState = Immutable({
  videos: [],
  isFetchingVideos: false,
  isCreatingVideo: false,
  isUpdatingVideo: false
})

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    //
    // FETCH_ORGANIZATION_VIDEOS
    //
    case types.FETCH_ORGANIZATION_VIDEOS_REQUEST:
      return state.merge({
        isFetchingVideos: true
      })
    case types.FETCH_ORGANIZATION_VIDEOS_SUCCESS:
      return state.merge({
        isFetchingVideos: false,
        videos: action.payload.videos
      })
    case types.FETCH_ORGANIZATION_VIDEOS_ERROR:
      return state.merge({
        isFetchingVideos: false,
        videos: []
      })

    //
    // CREATE_ORGANIZATION_VIDEO
    //
    case types.CREATE_ORGANIZATION_VIDEO_REQUEST:
      return state.merge({
        isCreatingVideo: true
      })
    case types.CREATE_ORGANIZATION_VIDEO_SUCCESS:
      return state.merge({
        isCreatingVideo: false,
        videos: state.videos.concat([action.payload.video])
      })
    case types.CREATE_ORGANIZATION_VIDEO_ERROR:
      return state.merge({
        isCreatingVideo: false
      })

    //
    // UPDATE_ORGANIZATION_VIDEO
    //
    case types.UPDATE_ORGANIZATION_VIDEO_REQUEST:
      return state.merge({
        isUpdatingVideo: true
      })
    case types.UPDATE_ORGANIZATION_VIDEO_SUCCESS:
      return state.merge({
        isUpdatingVideo: false,
        videos: state.videos.map(
          video =>
            video.id === action.payload.video.id ? action.payload.video : video
        )
      })
    case types.UPDATE_ORGANIZATION_VIDEO_ERROR:
      return state.merge({
        isUpdatingVideo: false
      })

    default:
      return state
  }
}

// Actions
export const actions = {
  //
  // FETCH_ORGANIZATION_VIDEOS
  //
  fetchOrganizationVideosRequest: () => ({
    type: types.FETCH_ORGANIZATION_VIDEOS_REQUEST
  }),
  fetchOrganizationVideosSuccess: ({ videos, pagination }) => ({
    type: types.FETCH_ORGANIZATION_VIDEOS_SUCCESS,
    payload: { videos, pagination }
  }),
  fetchOrganizationVideosError: () => ({
    type: types.FETCH_ORGANIZATION_VIDEOS_ERROR
  }),
  //
  // CREATE_ORGANIZATION_VIDEO
  //
  createOrganizationVideoRequest: () => ({
    type: types.CREATE_ORGANIZATION_VIDEO_REQUEST
  }),
  createOrganizationVideoSuccess: ({ video }) => ({
    type: types.CREATE_ORGANIZATION_VIDEO_SUCCESS,
    payload: { video }
  }),
  createOrganizationVideoError: () => ({
    type: types.CREATE_ORGANIZATION_VIDEO_ERROR
  }),
  //
  // UPDATE_ORGANIZATION_VIDEO
  //
  updateOrganizationVideoRequest: () => ({
    type: types.UPDATE_ORGANIZATION_VIDEO_REQUEST
  }),
  updateOrganizationVideoSuccess: ({ video }) => ({
    type: types.UPDATE_ORGANIZATION_VIDEO_SUCCESS,
    payload: { video }
  }),
  updateOrganizationVideoError: () => ({
    type: types.UPDATE_ORGANIZATION_VIDEO_ERROR
  })
}
