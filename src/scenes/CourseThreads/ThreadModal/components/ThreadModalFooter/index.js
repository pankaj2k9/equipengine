import React, { Component } from "react"
import styled from "styled-components"
import ModalFooter from "react-bootstrap/lib/ModalFooter"
import { toastAction } from "global/Toast"
import { compose } from "recompose"
import { types } from "../../../ducks"

import MessageForm from "base_components/MessageForm"

class ThreadModalFooter extends Component {
  submit = message => {
    const { createCommentThread, threadId } = this.props
    createCommentThread({ thread_id: threadId, body: message }).then(action =>
      toastAction({
        action,
        errorType: types.CREATE_THREAD_ERROR,
        success: `New thread is succesffully created`,
        error: `Failed to create thread`
      })
    )
  }

  render() {
    const { className } = this.props
    return (
      <ModalFooter className={className}>
        <div className="modal-footer__content">
          <MessageForm
            placeholder="Write something…"
            onSendMessage={this.submit}
          />
        </div>
      </ModalFooter>
    )
  }
}

export default compose(
  component => styled(component)`
    padding: 24px 0;

    .modal-footer__content {
      max-width: 774px;
      margin: 0 auto;
    }
  `
)(ThreadModalFooter)
