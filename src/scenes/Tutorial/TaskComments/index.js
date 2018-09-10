import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { createTaskComment, fetchTaskComments } from "../thunks"
import { selectors, types } from "../ducks"
import { toastAction } from "global/Toast"
import Loading from "base_components/Loading"
import TaskComment from "../TaskComment"
import TaskCommentForm from "../TaskCommentForm"

class TaskComments extends React.Component {
  componentDidMount() {
    this.props.fetchTaskComments({ taskId: this.props.task.id })
  }

  handleCreateComment = ({ text }) => {
    this.props
      .createTaskComment({ taskId: this.props.task.id, text })
      .then(action =>
        toastAction({
          action,
          errorType: types.CREATE_TASK_COMMENT_ERROR,
          success: "Comment succesfully created",
          error: "Comment creation failed"
        })
      )
  }

  render() {
    const { comments, isFetchingComments, isCreatingComment } = this.props

    return (
      <React.Fragment>
        {isFetchingComments ? (
          <Loading />
        ) : (
          Array.isArray(comments) &&
          comments.map(comment => <TaskComment comment={comment} />)
        )}
        {isCreatingComment ? (
          <Loading />
        ) : (
          <TaskCommentForm onSubmit={this.handleCreateComment} />
        )}
      </React.Fragment>
    )
  }
}

const mapState = (state, { task: { id } }) =>
  createStructuredSelector({
    comments: selectors.selectTaskComments(id),
    isFetchingComments: selectors.selectIsFetchingTaskComments(id),
    isCreatingComment: selectors.selectIsCreatingTaskComment(id)
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      createTaskComment,
      fetchTaskComments
    },
    dispatch
  )

export default connect(
  mapState,
  mapDispatch
)(TaskComments)
