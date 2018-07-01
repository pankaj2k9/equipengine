import React from "react"
import IconBell from "react-icons/lib/fa/bell"
import IconDelete from "react-icons/lib/fa/trash"
import Loading from "base_components/Loading"

import ListNotification from "./components/ListNotification"
import OutlineButton from "../../base_components/OutlineButton"
import PageWrapper from "../components/PageWrapper"

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
          notifications: [
            {
              id: 1,
              text:
                "You have recieved access to a new course - Communication and Culture.",
              date: "22 Sep",
              time: "1:00pm"
            },
            {
              id: 2,
              text: "New post was made on the noticeboard",
              date: "23 Sep",
              time: "2:00pm"
            }
          ]
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
        header={
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
