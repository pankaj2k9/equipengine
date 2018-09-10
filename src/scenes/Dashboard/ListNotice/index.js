import moment from "moment"
import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { compose } from "recompose"
import { bindActionCreators } from "redux"

import MessageForm from "base_components/MessageForm"
import DateTime from "base_components/DateTime"
import UserAvatar from "base_components/UserAvatar"

import { ListItem } from "./elements"
import { createComment } from "../thunks"

class ListNotice extends Component {
  handleSendMessage = (id, comment_body) => {
    const { createComment, match } = this.props

    createComment({
      commentable_id: match.params.groupId,
      comment_body,
      root_id: id
    })
  }

  render() {
    const { comments } = this.props

    return (
      <ul>
        {comments.map(comment => (
          <ListItem>
            <div>
              <UserAvatar
                image={comment.user && comment.user.avatar.small.url}
              />
              <span>
                {comment.user &&
                  `${comment.user.first_name} ${comment.user.last_name}`}
              </span>
              <DateTime
                date={moment(comment.created_at).format("DD MMM")}
                time={moment(comment.created_at).format("hh:mm a")}
              />
            </div>
            <div>
              <p>{comment.body}</p>

              <MessageForm
                onSendMessage={body => this.handleSendMessage(comment.id, body)}
                placeholder="Comment..."
              />
            </div>
          </ListItem>
        ))}
      </ul>
    )
  }
}

const mapDispatch = dispatch => bindActionCreators({ createComment }, dispatch)

export default compose(
  withRouter,
  connect(
    null,
    mapDispatch
  )
)(ListNotice)
