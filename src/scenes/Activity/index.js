import React, { Component } from "react"
import IconActivity from "react-icons/lib/fa/line-chart"
import Loading from "base_components/Loading"
//
import activitiesData from "./activities.json"
import ActionActivities from "./components/ActionActivities"
import ListActivities from "./components/ListActivities"
import PageWrapper from "global/PageWrapper"

class Activity extends Component {
  state = {
    activities: [],
    fetchingActivities: false,
    search: undefined
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

  handleSearchChange = event => {
    this.setState({
      search: event.target.value
    })
  }

  render() {
    const { fetchingActivities, activities } = this.state

    return (
      <PageWrapper title="Activity" icon={<IconActivity size={21} />}>
        {fetchingActivities ? (
          <Loading />
        ) : (
          <React.Fragment>
            <ActionActivities
              searchValue={this.state.search}
              handleSearchChange={this.handleSearchChange}
            />
            <ListActivities activities={activities} />
          </React.Fragment>
        )}
      </PageWrapper>
    )
  }
}

export default Activity
