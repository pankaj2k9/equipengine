import Immutable from "seamless-immutable"

// Types
export const types = {
  //
  // SELECT_USER
  //
  SELECT_USER: "equipengine/SELECT_USER"
}

const initialState = Immutable({
  selectedUserId: null
})

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    //
    // SELECT_USER
    //
    case types.SELECT_USER:
      return state.merge({
        selectedUserId: action.payload.userId
      })

    default:
      return state
  }
}

// Actions
export const actions = {
  //
  // SELECT_USER
  //
  selectUser: ({ userId }) => ({
    type: types.SELECT_USER,
    payload: { userId }
  })
}
