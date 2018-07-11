import React from "react"
import IconBell from "react-icons/lib/fa/bell"
import IconDelete from "react-icons/lib/fa/trash"
import Loading from "base_components/Loading"

import notificationsData from "./notifications.json"
import ListNotification from "./components/ListNotification"
import OutlineButton from "../../base_components/OutlineButton"
import PageWrapper from "global/PageWrapper"

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

  handleClearAll = () => {}

  render() {
    const { fetchingNotifications, notifications } = this.state
    const { onClearAll } = this.props

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
          <OutlineButton onClick={onClearAll}>
            <IconDelete /> CLEAR ALL
          </OutlineButton>
        }
      >
        {fetchingNotifications ? (
          <Loading />
        ) : (
          <ListNotification notifications={notifications} />
        )}
      </PageWrapper>
    )
  }
}

export default Notifications
