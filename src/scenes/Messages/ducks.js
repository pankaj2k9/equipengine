import Immutable from "seamless-immutable"
import { createSelector } from "reselect"

// Types
export const types = {
  //
  // FETCH_MY_GROUP_CHATS
  //
  FETCH_CHATS_REQUEST: "equipengine/FETCH_CHATS_REQUEST",
  FETCH_CHATS_SUCCESS: "equipengine/FETCH_CHATS_SUCCESS",
  FETCH_CHATS_ERROR: "equipengine/FETCH_CHATS_ERROR",

  CREATE_CHAT_REQUEST: "equipengine/CREATE_CHAT_REQUEST",
  CREATE_CHAT_SUCCESS: "equipengine/CREATE_CHAT_SUCCESS",
  CREATE_CHAT_ERROR: "equipengine/CREATE_CHAT_ERROR",

  CHANGE_CHAT_ROOM_REQUEST: "equipengine/CHANGE_CHAT_ROOM_REQUEST",
  CHANGE_CHAT_ROOM_SUCCESS: "equipengine/CHANGE_CHAT_ROOM_SUCCESS",
  CHANGE_CHAT_ROOM_ERROR: "equipengine/CHANGE_CHAT_ROOM_ERROR",

  SEND_MESSAGE_REQUEST: "equipengine/SEND_MESSAGE_REQUEST",
  SEND_MESSAGE_SUCCESS: "equipengine/SEND_MESSAGE_SUCCESS",
  SEND_MESSAGE_ERORR: "equipengine/SEND_MESSAGE_ERROR",

  DELETE_MESSAGE_REQUEST: "equipengine/DELETE_MESSAGE_REQUEST",
  DELETE_MESSAGE_SUCCESS: "equipengine/DELETE_MESSAGE_SUCCESS",
  DELETE_MESSAGE_ERROR: "equipengine/DELETE_MESSAGE_ERROR",

  DELETE_CHAT_ROOM_REQUEST: "equipengine/DELETE_CHAT_ROOM_REQUEST",
  DELETE_CHAT_ROOM_SUCCESS: "equipengine/DELETE_CHAT_ROOM_SUCCESS",
  DELETE_CHAT_ROOM_ERROR: "equipengine/DELETE_CHAT_ROOM_ERROR",

  WRITE_MESSAGE: "equipengine/WRITE_MESSAGE"
}

const initialState = Immutable({
  isFetchingChats: false,
  isFetchingCurrentChat: false,
  isFetchingSendMessage: false,
  chats: [],
  chatsPagination: null,
  currentChatMessages: [],
  currentChatId: null,
  currentChatUsers: [],
  message: "Haha, its work?"
})

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CHATS_REQUEST:
      return state.merge({
        isFetchingChats: true,
        currentChatMessages: [],
        currentChatUsers: [],
        currentChatId: null
      })
    case types.FETCH_CHATS_SUCCESS:
      return state.merge({
        isFetchingChats: false,
        chats: action.payload.chats,
        chatsPagination: action.payload.pagination
      })
    case types.FETCH_CHATS_ERROR:
      return state.merge({
        isFetchingChats: false
      })

    case types.CHANGE_CHAT_ROOM_REQUEST:
      return state.merge({
        isFetchingCurrentChat: true
      })
    case types.CHANGE_CHAT_ROOM_SUCCESS:
      return state.merge({
        isFetchingCurrentChat: false,
        currentChatMessages: action.payload.payload.chat_messages,
        currentChatUsers: action.payload.users,
        currentChatId: action.payload.currentChatId
      })
    case types.CHANGE_CHAT_ROOM_ERROR:
      return state.merge({
        isFetchingCurrentChat: false,
        currentChatMessages: [],
        currentChatUsers: []
      })

    case types.SEND_MESSAGE_REQUEST:
      return state.merge({
        isFetchingSendMessage: true,
        //  currentChatMessages: state.currentChatMessages.concat([
        //  actions.payload
        //]),
        message: null
      })
    case types.SEND_MESSAGE_SUCCESS:
      return state.merge({
        isFetchingSendMessage: false
      })
    case types.SEND_MESSAGE_ERORR:
      return state.merge({
        isFetchingSendMessage: false
      })

    case types.WRITE_MESSAGE:
      return state.merge({
        message: action.payload
      })

    default:
      return state
  }
}

// Actions
export const actions = {
  //
  // FETCH_MY_CHATS
  //
  fetchChatsRequest: () => ({
    type: types.FETCH_CHATS_REQUEST
  }),
  fetchChatsSuccess: ({ chats, pagination }) => ({
    type: types.FETCH_CHATS_SUCCESS,
    payload: { chats, pagination }
  }),
  fetchChatsError: () => ({
    type: types.FETCH_CHATS_ERROR
  }),

  //
  // CREATE_CHAT_WITH_OPONENT
  //
  createChatRequest: () => ({
    type: types.CREATE_CHAT_REQUEST
  }),
  createChatSuccess: () => ({
    type: types.CREATE_CHAT_SUCCESS
  }),
  createChatError: () => ({
    type: types.CREATE_CHAT_ERROR
  }),

  //
  // CHANGE_CHAT_ROOM
  //
  changeChatRoomRequest: () => ({
    type: types.CHANGE_CHAT_ROOM_REQUEST
  }),
  changeChatRoomSuccess: (payload, users, chatId) => ({
    type: types.CHANGE_CHAT_ROOM_SUCCESS,
    payload: { payload, users, currentChatId: chatId }
  }),
  changeChatRoomError: () => ({
    type: types.CHANGE_CHAT_ROOM_ERROR
  }),

  //
  // SEND_MESSAGE
  //
  sendMessageRequest: payload => ({
    type: types.SEND_MESSAGE_REQUEST,
    payload
  }),
  sendMessageSucces: () => ({
    type: types.SEND_MESSAGE_SUCCESS
  }),
  sendMessageError: () => ({
    type: types.SEND_MESSAGE_ERORR
  }),

  //
  // DELETE_MESSAGE
  deleteMessageRequest: () => ({
    type: types.DELETE_MESSAGE_REQUEST
  }),
  deleteMessageSuccess: () => ({
    type: types.DELETE_MESSAGE_SUCCES
  }),
  deleteMessageError: () => ({
    type: types.DELETE_MESSAGE_ERROR
  }),
  //
  // DELETE_CHAT
  //
  deleteChatRoomRequest: () => ({
    type: types.DELETE_CHAT_ROOM_REQUEST
  }),
  deleteChatRoomSuccess: () => ({
    type: types.DELETE_CHAT_ROOM_SUCCESS
  }),
  deleteChatRoomError: () => ({
    type: types.DELETE_CHAT_ROOM_ERROR
  }),

  writeMessage: messageInfo => ({
    type: types.WRITE_MESSAGE,
    payload: messageInfo
  })
}

// Selectors
const chatSelector = () => state => state.chats

const selectIsFetchingChats = () =>
  createSelector(chatSelector(), chats => chats.isFetchingChats)
const selectChats = () => createSelector(chatSelector(), chats => chats.chats)

const selectIsFetchingCurrentChat = () =>
  createSelector(chatSelector(), chats => chats.isFetchingCurrentChat)
const selectCurrentChatMessages = () =>
  createSelector(chatSelector(), chats => chats.currentChatMessages)
const selectCurrentChatUsers = () =>
  createSelector(chatSelector(), chats => chats.currentChatUsers)
const selectMessage = () =>
  createSelector(chatSelector(), chats => chats.message)
const selectCurrentChatId = () =>
  createSelector(chatSelector(), chats => chats.currentChatId)

export const selectors = {
  selectIsFetchingChats,
  selectChats,
  selectIsFetchingCurrentChat,
  selectCurrentChatMessages,
  selectCurrentChatUsers,
  selectCurrentChatId,
  selectMessage
}
