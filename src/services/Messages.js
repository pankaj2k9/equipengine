import { client } from "./API"

/**
 * @returns list of current user chats
 */
export const fetchChats = () =>
  client.get(`/api/v1/chats`).then(response => response.data)

/**
 * @returns specific chat message objects
 */
export const fetchChatMessages = ({ chatId }) =>
  client
    .get(`/api/v1/chats/${chatId}/chat_messages`)
    .then(response => response.data)

/**
 * Send new message in dialog room
 * @returns specific chat messages object
 */
export const sendMessage = ({ chat_id, chat_message }) =>
  client
    .post(`/api/v1/chats/${chat_id}/chat_messages`, {
      chat_message: {
        message: chat_message,
        to_user_id: 3
      }
    })
    .then(response => response.data)

export const deleteMessage = ({ chat_id, message_id }) =>
  client
    .delete(`/api/v1/chats/${chat_id}/chat_messages/${message_id}`)
    .then(response => response.data)

export const deleteChatRoom = ({ chat_id }) =>
  client.delete(`/api/v1/chats/${chat_id}`).then(response => response.data)

export const createChatRoom = ({ opponent_id, myId }) => {
  client
    .get(`/api/v1/chats/with_opponent/${opponent_id}`, {
      params: { id: myId }
    })
    .then(response => response.data)
}
