import React, { Component } from "react"
//
import EntityModal from "base_components/EntityModal"
import TaskForm from "../TaskForm"

class UpdateTaskModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: props.task
    }
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
        title="Update Task"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={this.handleSubmit}
      >
        <TaskForm task={this.state.task} onChange={this.handleChange} />
      </EntityModal>
    )
  }
}

export default UpdateTaskModal
