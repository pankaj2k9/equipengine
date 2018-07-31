import * as API from "services/API"
import { actions as chatActions } from "./ducks"

export const fetchChats = () => {
  return async dispatch => {
    dispatch(chatActions.fetchChatsRequest())

    try {
      const response = await API.fetchChats()

      return dispatch(
        chatActions.fetchChatsSuccess({
          chats: response.chats,
          pagination: response.meta
        })
      )
    } catch (error) {
      return dispatch(chatActions.fetchChatsError())
    }
  }
}

export const changeChatRoom = (chatId, users) => {
  return async dispatch => {
    dispatch(chatActions.changeChatRoomRequest())

    try {
      const response = await API.fetchChatMessages({ chatId })

      return dispatch(
        chatActions.changeChatRoomSuccess(response, users, chatId)
      )
    } catch (error) {
      return dispatch(chatActions.changeChatRoomError())
    }
  }
}

export const sendMessage = (chat_id, chat_message) => {
  return async dispatch => {
    dispatch(chatActions.sendMessageRequest())

    try {
      const response = await API.sendMessage({ chat_id, chat_message })

      return dispatch(chatActions.sendMessageSucces(response))
    } catch (error) {
      return dispatch(chatActions.sendMessageError())
    }
  }
}

export const deleteMessage = (chat_id, message_id) => {
  return async dispatch => {
    dispatch(chatActions.deleteMessageRequest())

    try {
      const response = await API.deleteMessage({ chat_id, message_id })
      return dispatch(chatActions.deleteMessageSuccess(response))
    } catch (error) {
      return dispatch(chatActions.deleteMessageError())
    }
  }
}

export const deleteChatRoom = chat_id => {
  return async dispatch => {
    dispatch(chatActions.deleteChatRoomRequest())

    try {
      const response = await API.deleteChatRoom({ chat_id })
      return dispatch(chatActions.deleteChatRoomSuccess(response))
    } catch (error) {
      return dispatch(chatActions.deleteChatRoomError())
    }
  }
}

export const createChatRoom = (opponent_id, myId) => {
  return async dispatch => {
    dispatch(chatActions.createChatRequest())

    try {
      const response = await API.createChatRoom({ opponent_id, myId })
      return dispatch(chatActions.createChatSuccess(response))
    } catch (error) {
      return dispatch(chatActions.createChatError())
    }
  }
}
