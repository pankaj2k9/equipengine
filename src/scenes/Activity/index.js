import React, { Component } from "react"
import IconActivity from "react-icons/lib/fa/line-chart"
import Loading from "base_components/Loading"
//
import activitiesData from "./activities.json"
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
          activities: activitiesData
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
