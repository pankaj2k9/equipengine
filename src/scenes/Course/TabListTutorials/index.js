import React from "react"
import PropTypes from "prop-types"
import { bindActionCreators } from "redux"
import { isNil } from "ramda"
import { connect } from "react-redux"
import { compose, lifecycle } from "recompose"
import { createStructuredSelector } from "reselect"
import { withRouter } from "react-router-dom"

import iconPlayButton from "./play-button.svg"
import iconExam from "./exam.svg"
import { fetchTutorials } from "../thunks"
import List from "base_components/List"
import { selectors } from "../ducks"
import {
  EmptyTutorialsList,
  StyledListRow,
  StyledListRowLeft,
  StyledListRowRight,
  ViewButton
} from "./elenents"
import Loading from "base_components/Loading"

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
            {tutorial.type === "video" ? (
              <img src={iconPlayButton} alt="Play button icon" />
            ) : (
              <img src={iconExam} alt="Exam icon" />
            )}
            <div>
              <p>{tutorial.title}</p>
              {!isNil(tutorial.video) ? <p>{tutorial.video.length}</p> : <p />}
            </div>
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
    tutorials: selectors.selectTutorials(),
    isFetchingTutorials: selectors.selectIsFetchingTutorials()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      fetchTutorials
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
