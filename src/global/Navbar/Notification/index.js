import React from "react"
import { Link } from "react-router-dom"

import RowData from "./components/RowData"
import RowLink from "./components/RowLink"

import PopoverNoti from "./components/PopoverNoti"
import PopoverMessage from "./components/PopoverMessage"
import Profile from "./components/Profile/index.js"
import avatar from "resources/images/user.png"
import "./styles.css"

const Notification = () => {
  // compose our notification data
  const NotiRowData = url => (
    <ul>
      <Link to={url}>
        <RowData
          date="22 Sep 4:00pm"
          message="Hi, Jane can you send me question I asked for the other day when you…"
        />
      </Link>
      <Link to={url}>
        <RowData
          date="22 Sep 4:00pm"
          message="Hi, Jane can you send me question I asked for the other day when you…"
        />
      </Link>
      <RowLink text="View All" url="/secure/notifications" />
    </ul>
  )

  // compose our message data.
  const MessageRowData = () => (
    <ul>
      <RowData
        avatar={avatar}
        userName="John Jones"
        date="22 Sep 4:00pm"
        message="Hi, Jane can you send me question I asked for the other day when you…"
      />
      <RowData
        avatar={avatar}
        userName="John Jones"
        date="22 Sep 4:00pm"
        message="Hi, Jane can you send me question I asked for the other day when you…"
      />
      <RowLink text="View All" url="/secure/messages" />
    </ul>
  )

  return (
    <div className="Notification">
      <PopoverNoti NotiRowData={() => NotiRowData("/secure/notifications")} />
      <PopoverMessage MessageRowData={MessageRowData} />
      <Profile userName="Jane Doe" avatar={avatar} />
    </div>
  )
}

export default Notification
