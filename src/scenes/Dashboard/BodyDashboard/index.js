import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { compose } from "recompose"
import { bindActionCreators } from "redux"
import { createStructuredSelector } from "reselect"

import Loading from "base_components/Loading"
import MessageForm from "base_components/MessageForm"

import { Body, FormContainer, Placeholder } from "./elements"
import { selectors } from "../ducks"
import ListNotice from "../ListNotice"
import { createComment } from "../thunks"

class BodyDashboard extends Component {
  handleSendMessage = comment_body => {
    const { createComment, match } = this.props

    createComment({ commentable_id: match.params.groupId, comment_body })
  }

  renderList = () => {
    const { comments } = this.props

    return comments.length ? (
      <ListNotice comments={comments} />
    ) : (
      <Placeholder>No posts on the noticeboard.</Placeholder>
    )
  }

  render() {
    const { isFetchingComments } = this.props

    return (
      <Body>
        <FormContainer>
          <MessageForm
            onSendMessage={this.handleSendMessage}
            placeholder="Write on the noticeboard…"
          />
        </FormContainer>

        {isFetchingComments ? <Loading /> : this.renderList()}
      </Body>
    )
  }
}

const mapState = () =>
  createStructuredSelector({
    comments: selectors.selectComments(),
    isFetchingComments: selectors.selectIsFetchingComments()
  })

const mapDispatch = dispatch => bindActionCreators({ createComment }, dispatch)

export default compose(
  withRouter,
  connect(
    mapState,
    mapDispatch
  )
)(BodyDashboard)
