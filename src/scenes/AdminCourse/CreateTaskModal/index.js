import React, { Component } from "react"
//
import EntityModal from "base_components/EntityModal"
import TaskForm from "../TaskForm"

class CreateTaskModal extends Component {
  state = {
    task: {}
  }

  handleChange = task => {
    this.setState({ task })
  }

  handleSubmit = () => {
    this.props.onClose()
    this.props.onSubmit(this.state.task)
  }

  render() {
    const { className, isOpen, onClose } = this.props
    return (
      <EntityModal
        className={className}
        title="New Task"
        isOpen={isOpen}
        onClose={onClose}
        isSubmitting={false}
        onSubmit={this.handleSubmit}
      >
        <TaskForm task={this.state.task} onChange={this.handleChange} />
      </EntityModal>
    )
  }
}

export default CreateTaskModal
