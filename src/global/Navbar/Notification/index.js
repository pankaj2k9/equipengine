import React from "react"
import { Link } from "react-router-dom"

import RowData from "./components/RowData"
import RowLink from "./components/RowLink"

import PopoverNoti from "./components/PopoverNoti"
import PopoverMessage from "./components/PopoverMessage"
import Profile from "./components/Profile/index.js"
import avatar from "resources/images/user.png"
import "./styles.css"

const messages = [
  {
    id: 1,
    chatId: 1,
    date: "22 Sep 4:00pm",
    message:
      "Hi, Jane can you send me question I asked for the other day when you…",
    userName: "John Jones"
  },
  {
    id: 2,
    chatId: 2,
    date: "23 Sep 5:00pm",
    message:
      "Hi, Jane can you send me question I asked for the other day when you…",
    userName: "John Doe"
  }
]

const notifications = [
  {
    id: 1,
    date: "22 Sep 4:00pm",
    message:
      "Hi, Jane can you send me question I asked for the other day when you…"
  },
  {
    id: 2,
    date: "22 Sep 4:00pm",
    message:
      "Hi, Jane can you send me question I asked for the other day when you…"
  }
]

const Notification = () => {
  // compose our notification data
  const NotiRowData = url => (
    <ul>
      {notifications.map(notification => (
        <Link to={url} key={notification.id}>
          <RowData date={notification.date} message={notification.message} />
        </Link>
      ))}
      <RowLink text="View All" url="/secure/notifications" />
    </ul>
  )

  // compose our message data.
  const MessageRowData = url => (
    <ul>
      {messages.map(message => (
        <Link
          key={message.id}
          to={{
            pathname: url,
            state: { chatId: message.chatId }
          }}
        >
          <RowData
            avatar={avatar}
            userName={message.userName}
            date={message.date}
            message={message.message}
          />
        </Link>
      ))}
      <RowLink text="View All" url="/secure/messages" />
    </ul>
  )

  return (
    <div className="Notification">
      <PopoverNoti NotiRowData={() => NotiRowData("/secure/notifications")} />
      <PopoverMessage
        MessageRowData={() => MessageRowData("/secure/messages")}
      />
      <Profile userName="Jane Doe" avatar={avatar} />
    </div>
  )
}

export default Notification
