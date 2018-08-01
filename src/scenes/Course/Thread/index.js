import React, { Component } from "react"
import PropTypes from "prop-types"
import IconPlus from "react-icons/lib/fa/plus"

import { ButtonIcon } from "base_components/RootButton"

import CreateThreadModal from "../CreateThreadModal"

class Thread extends Component {
  constructor() {
    super()

    this.state = {
      showModal: false
    }
  }

  close = () => {
    this.setState({ showModal: false })
  }

  open = () => {
    this.setState({ showModal: true })
  }

  render() {
    const { showModal } = this.state

    return (
      <div>
        <ButtonIcon secondary onClick={this.open}>
          New Thread
          <i>
            <IconPlus />
          </i>
        </ButtonIcon>

        <CreateThreadModal
          isOpen={showModal}
          onClose={this.close}
          onSubmit={() => {}}
        />
      </div>
    )
  }
}

export default Thread
