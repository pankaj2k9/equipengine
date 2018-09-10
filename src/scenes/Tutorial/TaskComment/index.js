import React from "react"
import styled from "styled-components"

import UserInfoFormatter from "base_components/UserInfoFormatter"

const Text = styled.div`
  margin: 10px;
  padding-bottom: 10px;
`

class TaskComment extends React.Component {
  render() {
    const { comment } = this.props
    return (
      <div>
        <UserInfoFormatter user={comment.user} />
        <Text>{comment.body}</Text>
      </div>
    )
  }
}

export default TaskComment
