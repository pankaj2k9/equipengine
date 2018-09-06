import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { compose, pure } from "recompose"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { withRouter } from "react-router-dom"
import { toastAction } from "global/Toast"

import { fetchCourseThreads, createThreadDiscussion } from "../thunks"
import { selectors, types } from "../ducks"

import Loading from "base_components/Loading"

import TabGroupDiscussions from "../TabGroupDiscussions"

class CourseThreadsPage extends Component {
  componentDidMount() {
    const { groupId, courseId } = this.props.match.params

    this.props.fetchCourseThreads({ groupId, courseId })
  }

  createDiscussion = fields => {
    const { groupId, courseId } = this.props.match.params

    this.props
      .createThreadDiscussion({
        groupId,
        courseId,
        title: fields.name
      })
      .then(action =>
        toastAction({
          action,
          errorType: types.CREATE_THREAD_ERROR,
          success: `New thread is succesffully created`,
          error: `Failed to create thread`
        })
      )
  }

  render() {
    const { isFetchingThreads, discussions } = this.props
    if (isFetchingThreads) {
      return <Loading />
    }
    return (
      <TabGroupDiscussions
        discussions={discussions}
        createThreadDiscussion={this.createDiscussion}
      />
    )
  }
}

const mapState = () =>
  createStructuredSelector({
    discussions: selectors.selectCourseThreads(),
    isFetchingThreads: selectors.selectIsFetchingCourseThreads(),
    pagintation: selectors.selectPagintation()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      fetchCourseThreads,
      createThreadDiscussion
    },
    dispatch
  )

export default compose(
  withRouter,
  component =>
    connect(
      mapState,
      mapDispatch
    )(component),
  pure
)(CourseThreadsPage)
