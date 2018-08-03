import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { bindActionCreators } from "redux"

import { actions, selectors } from "../ducks"
import ChatsList from "../ChatsList"
import {
  changeChatRoom,
  fetchChats,
  sendMessage,
  deleteChatRoom,
  deleteMessage,
  createChatRoom
} from "../thunks"
import Loading from "base_components/Loading"
import MessagesList from "../MessagesList"
import PageWrapper from "global/PageWrapper"
import { Root } from "./elements"
import features from "features"
import { types } from "../ducks"
import { toastr } from "react-redux-toastr"

class Messages extends React.Component {
  handleChangeTextMessage = ({ target: { value } }) =>
    this.props.writeMessage(value)

  handleSendMessage = () =>
    this.props.onSendMessage(this.props.currentChatId, this.props.textMessage)

  handleSelectChat = (chatId, users) =>
    this.props.getChatMessages(chatId, users).then(action => {
      if (action.type === types.CHANGE_CHAT_ROOM_ERROR)
        toastr.error("Select chat failed", "Some error")
    })
  /*  handleGetMyChats = (myId, array = []) => {
    this.props.chats.forEach(chat => {
      let accessChat = false
      chat.users.forEach(user => {
        if (user.id === myId) accessChat = true
      })
      accessChat ? (array[array.length] = chat) : null
    })
    return array
  }
 */

  componentDidMount() {
    this.props.fetchChats().then(() => {
      const {
        location: { state },
        users
      } = this.props

      if (state && state.chatId) {
        this.handleSelectChat(state.chatId, users)
      }
    })
  }

  render() {
    const {
      chats,
      isFetchingChats,
      isFetchingCurrentChat,
      currentChatMessages,
      currentChatUsers,
      textMessage,
      id,
      deleteChatRoom,
      createChatRoom,
      currentChatId
    } = this.props

    //const chats = this.handleGetMyChats(id)
    return (
      <PageWrapper disableMargin>
        <Root>
          {isFetchingChats ? (
            <Loading />
          ) : (
            <ChatsList
              chats={chats}
              currentChatId={currentChatId}
              isFetchingChats={isFetchingChats}
              getChatMessages={this.handleSelectChat}
              deleteChatRoom={deleteChatRoom}
              myId={id}
              deleteMessage={this.handleLClearAllMsg}
              currentChatMessages={currentChatMessages}
              createChatRoom={createChatRoom}
            />
          )}

          <MessagesList
            currentChatMessages={currentChatMessages}
            currentChatUsers={currentChatUsers}
            isFetchingCurrentChat={isFetchingCurrentChat}
            onWriteMessage={this.handleChangeTextMessage}
            textMessage={textMessage}
            onSendMessage={this.handleSendMessage}
          />
        </Root>
      </PageWrapper>
    )
  }
}

const mapState = () =>
  createStructuredSelector({
    chats: selectors.selectChats(),
    isFetchingChats: selectors.selectIsFetchingChats(),
    currentChatId: selectors.selectCurrentChatId(),
    currentChatMessages: selectors.selectCurrentChatMessages(),
    currentChatUsers: selectors.selectCurrentChatUsers(),
    isFetchingCurrentChat: selectors.selectIsFetchingCurrentChat(),
    textMessage: selectors.selectMessage(),
    id: features.login.selectors.selectCurrentUserId()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      fetchChats,
      getChatMessages: changeChatRoom,
      writeMessage: actions.writeMessage,
      onSendMessage: sendMessage,
      deleteChatRoom: deleteChatRoom,
      deleteMessage: deleteMessage,
      createChatRoom
    },
    dispatch
  )

export default connect(
  mapState,
  mapDispatch
)(Messages)
