import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import ModalBody from "react-bootstrap/lib/ModalBody"
import Loading from "base_components/Loading"
import DateTime from "base_components/DateTime"

import UserInfoFormatter from "base_components/UserInfoFormatter"

const ListRow = styled.li`
  padding: 1em 0;

  border-bottom: 1px solid #dadada;

  div {
    display: flex;
    align-items: center;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 10px;
      width: 45px;

      img {
        margin-bottom: 0.7em;
      }

      span {
        color: #7e7e7e;
      }

      span:nth-child(2) {
        color: #1e1e1e;
      }
    }
  }
`
const StyledBody = styled(ModalBody)`
  flex: 1;

  padding: 20px 0;

  overflow-y: auto;

  .modal-body__content {
    max-width: 774px;
    margin: 0 auto;

    header {
      border-bottom: 1px solid #dadada;
    }

    p {
      display: inline-block;
      color: #1e1e1e;
    }

    p:last-child {
      color: #7e7e7e;
      margin-left: 0.8em;
    }

    h3 {
      margin-top: 0.5em;
      font-size: 1.6rem;
      color: #111111;
      text-align: left;
      max-width: 493px;
    }
  }
`
class ThreadModalBody extends Component {
  componentDidMount() {
    if (this.props.thread)
      this.props.fetchThreadComments({ thread_id: this.props.thread.id })
  }

  commentList = () => {
    const { commentsThread, isFetching } = this.props
    if (isFetching) return <Loading />
    return commentsThread.comments !== null
      ? commentsThread.comments.map(comment => (
          <ListRow key={comment.id}>
            <div>
              <div>
                <UserInfoFormatter user={comment.user} />
                <DateTime
                  date={new Date(comment.created_at)}
                  fontSize="14px"
                  withYear
                />
              </div>
              <p>{comment.body}</p>
            </div>
          </ListRow>
        ))
      : ""
  }

  render() {
    const { className, thread } = this.props
    return (
      <StyledBody className={className}>
        <div className="modal-body__content">
          <header>
            <h3>{thread.title}</h3>
            <span>{`Posted by ${thread.user.first_name} ${
              thread.user.last_name
            }`}</span>
            <DateTime
              date={new Date(thread.created_at)}
              fontSize="14px"
              withYear
              horizontal
            />
          </header>
          <ul>{this.commentList()}</ul>
        </div>
      </StyledBody>
    )
  }
}

ThreadModalBody.propTypes = {
  thread: PropTypes.object.isRequired
}

export default ThreadModalBody
