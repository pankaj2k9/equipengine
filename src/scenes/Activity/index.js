import React, { Component } from "react"
import IconActivity from "react-icons/lib/fa/line-chart"
import Loading from "base_components/Loading"
//
import ActionActivities from "./components/ActionActivities"
import ListActivities from "./components/ListActivities"
import PageWrapper from "../components/PageWrapper"

class Activity extends Component {
  state = {
    activities: [],
    fetchingActivities: false
  }

  componentDidMount() {
    this.setState({ fetchingActivities: true })
    setTimeout(
      () =>
        this.setState({
          fetchingActivities: false,
          activities: [
            {
              id: 1,
              eventable_type: "Comment",
              flagged: false,
              status: "pending",
              user: {
                id: 5,
                first_name: "Jon",
                last_name: "Mcall",
                avatar: {
                  url:
                    "https://s3.amazonaws.com/uifaces/faces/twitter/ripplemdk/128.jpg"
                }
              },
              course: {
                id: 1,
                title: "Communication and Culture"
              },
              lesson: {
                title: "Tutorial 1.1"
              },
              created_at: {
                date: "22 Sep",
                time: "1:00pm"
              }
            },
            {
              id: 2,
              eventable_type: "Comment",
              flagged: true,
              status: "not-pending",
              user: {
                id: 6,
                first_name: "Jill",
                last_name: "Mane",
                avatar: {
                  url:
                    "https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"
                }
              },
              course: {
                id: 2,
                title: "Becoming Equipment to Communicate"
              },
              lesson: {
                title: "Tutorial 1.3"
              },
              created_at: {
                date: "22 Sep",
                time: "1:00pm"
              }
            }
          ]
        }),
      2000
    )
  }

  render() {
    const { fetchingActivities, activities } = this.state

    return (
      <PageWrapper title="Activity" icon={<IconActivity size={21} />}>
        {fetchingActivities ? (
          <Loading />
        ) : (
          <React.Fragment>
            <ActionActivities />
            <ListActivities activities={activities} />
          </React.Fragment>
        )}
      </PageWrapper>
    )
  }
}

export default Activity
