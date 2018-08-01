import React from "react"
import { Modal } from "react-bootstrap"
import styled from "styled-components"

import ThreadModalBody from "./components/ThreadModalBody"
import ThreadModalFooter from "./components/ThreadModalFooter"
import ThreadModalHeader from "./components/ThreadModalHeader"

const ThreadModal = styled(Modal)`
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
      position: relative;
    }
  }
`

export default ({ isOpen, onClose, thread }) => (
  <ThreadModal show={isOpen}>
    <ThreadModalHeader onClose={onClose} />
    <ThreadModalBody thread={thread} />
    <ThreadModalFooter />
  </ThreadModal>
)
