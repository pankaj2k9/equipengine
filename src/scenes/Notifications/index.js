import React from "react"
import IconBell from "react-icons/lib/fa/bell"
import styled from "styled-components"
import Loading from "base_components/Loading"

import notificationsData from "./notifications.json"
import ListNotification from "./components/ListNotification"
import OutlineButton from "../../base_components/OutlineButton"
import PageWrapper from "global/PageWrapper"

const ExtendOutlineButton = styled(OutlineButton)`
  border: none;
  color: #c9c9c9;
  font-size: 14px;
`
const NoNotification = styled.h4`
  text-align: center;
  color: #a6a6a6;
  font-size: 14px;
`

class Notifications extends React.Component {
  state = {
    fetchingNotifications: false,
    notifications: []
  }

  componentDidMount() {
    this.setState({ fetchingNotifications: true })
    setTimeout(
      () =>
        this.setState({
          fetchingNotifications: false,
          notifications: notificationsData
        }),
      2000
    )
  }

  handleClearAll = () => {
    this.setState({ fetchingNotifications: true })
    setTimeout(
      () =>
        this.setState({
          fetchingNotifications: false,
          notifications: []
        }),
      2000
    )
  }

  render() {
    const { fetchingNotifications, notifications } = this.state

    return (
      <PageWrapper
        icon={
          <IconBell
            size={18}
            style={{
              verticalAlign: "baseline"
            }}
          />
        }
        title="Notifications"
        actionBar={
          <ExtendOutlineButton onClick={this.handleClearAll}>
            CLEAR ALL
          </ExtendOutlineButton>
        }
      >
        {fetchingNotifications ? (
          <Loading />
        ) : notifications.length > 0 ? (
          <ListNotification notifications={notifications} />
        ) : (
          <NoNotification>No notifications to show.</NoNotification>
        )}
      </PageWrapper>
    )
  }
}

export default Notifications
