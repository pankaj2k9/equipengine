import React from "react"
import IconPlus from "react-icons/lib/fa/plus"

import { ButtonIcon } from "base_components/RootButton"
import modal from "hoc/modal"

import CreateThreadModal from "../CreateThreadModal"

const Thread = ({ isOpen, onClose, onOpen, createThreadDiscussion }) => (
  <div>
    <ButtonIcon secondary onClick={onOpen}>
      New Thread
      <i>
        <IconPlus />
      </i>
    </ButtonIcon>

    <CreateThreadModal
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={fields => {
        createThreadDiscussion(fields)
        onClose()
      }}
    />
  </div>
)

export default modal(Thread)
