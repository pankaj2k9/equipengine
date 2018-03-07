import React, { Component } from 'react'

// TODO: In future, instead of using hoc for managing the modal state, we will give the job in Redux.
export default (WrappedComponent) => {
  class ModalParent extends Component {
    state = {
      isOpen: false
    }

    handleClose = () => {
      this.setState({ isOpen: false })
    }

    handleShow = (e) => {
      e.preventDefault()
      this.setState({ isOpen: true })
    }

    render () {
      return (
        <WrappedComponent
          {...this.props}
          handleShow={this.handleShow}
          handleClose={this.handleClose}
          isOpen={this.state.isOpen}
        />
      )
    }
  }

  return ModalParent
}
