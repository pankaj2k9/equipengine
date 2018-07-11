import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { Link } from "react-router-dom"
//
import iconArrowRight from "resources/images/arrowRight.svg"
import ListActivities from "../ListActivities"
import Loading from "base_components/Loading"
import { selectors as authSelectors } from "global/Auth"
import { selectors as activitiesSelectors, thunks } from "global/Activities"
import UnderlinedTitle from "base_components/UnderlinedTitle"

class LatestActivities extends Component {
  componentDidMount() {
    this.props.fetchActivities({ userId: this.props.userId })
  }

  render() {
    const { isFetchingActivities, activities } = this.props

    return (
      <div>
        <UnderlinedTitle>
          Latest Activity{" "}
          <Link to="/secure/activity">
            <img alt="icon arrow right" src={iconArrowRight} />
          </Link>
        </UnderlinedTitle>
        {isFetchingActivities ? (
          <Loading />
        ) : (
          <ListActivities activities={activities} />
        )}
      </div>
    )
  }
}

const mapState = () =>
  createStructuredSelector({
    activities: activitiesSelectors.selectActivities(),
    isFetchingActivities: activitiesSelectors.selectIsFetchingActivities(),
    userId: authSelectors.selectCurrentUserId()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      fetchActivities: thunks.fetchActivities
    },
    dispatch
  )

export default connect(
  mapState,
  mapDispatch
)(LatestActivities)
