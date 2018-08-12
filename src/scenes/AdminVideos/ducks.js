import Immutable from "seamless-immutable"

// Types
export const types = {
  //
  // CREATE_VIDEO
  //
  CREATE_VIDEO_REQUEST: "equipengine-admin/CREATE_VIDEO_REQUEST",
  CREATE_VIDEO_SUCCESS: "equipengine-admin/CREATE_VIDEO_SUCCESS",
  CREATE_VIDEO_ERROR: "equipengine-admin/CREATE_VIDEO_ERROR"
}

const initialState = Immutable({
  isCreatingVideo: false
})

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    //
    // CREATE_VIDEO
    //
    case types.CREATE_VIDEO_REQUEST:
      return state.merge({
        isCreatingVideo: true
      })
    case types.CREATE_VIDEO_SUCCESS:
      return state.merge({
        isCreatingVideo: false
      })
    case types.CREATE_VIDEO_ERROR:
      return state.merge({
        isCreatingVideo: false
      })

    default:
      return state
  }
}

// Actions
export const actions = {
  //
  // CREATE_VIDEO
  //
  createVideoRequest: () => ({
    type: types.CREATE_VIDEO_REQUEST
  }),
  createVideoSuccess: ({ video }) => ({
    type: types.CREATE_VIDEO_SUCCESS,
    payload: { video }
  }),
  createVideoError: () => ({
    type: types.CREATE_VIDEO_ERROR
  })
}
