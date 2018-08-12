import React, { Component } from "react"
//
import CreateEntityModal from "base_components/CreateEntityModal"
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
      <CreateEntityModal
        className={className}
        title="New Task"
        isOpen={isOpen}
        onClose={onClose}
        isSubmitting={false}
        onSubmit={this.handleSubmit}
      >
        <TaskForm task={this.state.task} onChange={this.handleChange} />
      </CreateEntityModal>
    )
  }
}

export default CreateTaskModal
