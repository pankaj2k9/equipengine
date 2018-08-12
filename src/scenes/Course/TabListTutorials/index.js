import React from "react"
import PropTypes from "prop-types"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { compose, lifecycle } from "recompose"
import { createStructuredSelector } from "reselect"
import { withRouter } from "react-router-dom"

import features from "features"
import List from "base_components/List"
import {
  EmptyTutorialsList,
  StyledListRow,
  StyledListRowLeft,
  StyledListRowRight,
  ViewButton
} from "./elenents"
import Loading from "base_components/Loading"
import TutorialTitle from "global/TutorialTitle"

const TabListTutorials = ({ tutorials, isFetchingTutorials, match }) => {
  if (isFetchingTutorials) {
    return <Loading />
  }

  if (!Array.isArray(tutorials) || tutorials.length === 0) {
    return <EmptyTutorialsList>No tutorials found</EmptyTutorialsList>
  }

  return (
    <List>
      {tutorials.map(tutorial => (
        <StyledListRow key={tutorial.id}>
          <StyledListRowLeft>
            <TutorialTitle tutorial={tutorial} />
          </StyledListRowLeft>
          <StyledListRowRight>
            <ViewButton
              text="View"
              url={`${match.url}/tutorials/${tutorial.id}`}
            />
          </StyledListRowRight>
        </StyledListRow>
      ))}
    </List>
  )
}

TabListTutorials.propTypes = {
  tutorials: PropTypes.array.isRequired
}

const mapState = () =>
  createStructuredSelector({
    tutorials: features.tutorials.selectors.selectTutorials(),
    isFetchingTutorials: features.tutorials.selectors.selectIsFetchingTutorials()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      fetchTutorials: features.tutorials.actions.fetchTutorials
    },
    dispatch
  )

export default compose(
  withRouter,
  comp =>
    connect(
      mapState,
      mapDispatch
    )(comp),
  lifecycle({
    componentDidMount() {
      const { groupId, courseId } = this.props.match.params
      this.props.fetchTutorials({
        groupId,
        courseId
      })
    }
  })
)(TabListTutorials)
