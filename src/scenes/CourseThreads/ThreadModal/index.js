import React, { Component } from "react"
import { Modal } from "react-bootstrap"
import styled from "styled-components"

import { bindActionCreators } from "redux"
import { compose } from "recompose"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { createCommentThread, fetchThreadComments } from "../thunks"
import { selectors } from "../ducks"

import ThreadModalBody from "./components/ThreadModalBody"
import ThreadModalFooter from "./components/ThreadModalFooter"
import ThreadModalHeader from "./components/ThreadModalHeader"

const StyledModal = styled(Modal)`
  .modal-dialog {
    width: 100%;
    height: 100%;
    margin: 0;

    .modal-content {
      display: flex;
      flex-direction: column;

      border-radius: 0;
      border: 0;
      min-height: 100vh;
      max-height: 100vh;
      position: relative;
    }
  }
`
class ThreadModal extends Component {
  render() {
    const {
      isOpen,
      onClose,
      createCommentThread,
      fetchThreadComments,
      threadId,
      commentsThread,
      isFetching
    } = this.props
    return (
      <StyledModal show={isOpen}>
        <ThreadModalHeader onClose={onClose} />
        <ThreadModalBody
          thread={this.props.threads.find(
            value => value.id === this.props.threadId
          )}
          commentsThread={commentsThread}
          isFetching={isFetching}
          fetchThreadComments={fetchThreadComments}
        />
        <ThreadModalFooter
          createCommentThread={createCommentThread}
          threadId={threadId}
        />
      </StyledModal>
    )
  }
}

const mapState = () =>
  createStructuredSelector({
    commentsThread: selectors.selectCommentsThread(),
    threads: selectors.selectCourseThreads(),
    threadId: selectors.selectOpenedThread(),
    isFetching: selectors.selectIsFetchingCourseThreads()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      createCommentThread,
      fetchThreadComments
    },
    dispatch
  )

export default compose(component =>
  connect(
    mapState,
    mapDispatch
  )(component)
)(ThreadModal)
