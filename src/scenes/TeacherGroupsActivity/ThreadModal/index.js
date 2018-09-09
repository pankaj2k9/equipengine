import React from "react"

import { ThreadModal } from "./elements"
import ThreadModalBody from "./components/ThreadModalBody"
import ThreadModalFooter from "./components/ThreadModalFooter"
import ThreadModalHeader from "./components/ThreadModalHeader"

export default ({ isOpen, onClose, thread }) => (
  <ThreadModal show={isOpen}>
    <ThreadModalHeader onClose={onClose} />
    <ThreadModalBody thread={thread} />
    <ThreadModalFooter />
  </ThreadModal>
)
