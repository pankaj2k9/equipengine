import React, { Component } from 'react'

const modal = (WrappedComponent) => {
  return class Modal extends Component {
    state = {
      isOpen: false
    }

    handleClose = () => {
      this.setState({ isOpen: false })
    }

    handleOpen = (e) => {
      e.preventDefault()
      this.setState({ isOpen: true })
    }

    render () {
      return (
        <WrappedComponent
          {...this.props}
          onOpen={this.handleOpen}
          onClose={this.handleClose}
          isOpen={this.state.isOpen}
        />
      )
    }
  }
}

export default modal
