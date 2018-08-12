import React, { Component, Fragment } from "react"
import { bindActionCreators } from "redux"
import { compose } from "recompose"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
//
import { Actions } from "./elements"
import ButtonAdd from "base_components/ButtonAdd"
import CreateTaskModal from "../CreateTaskModal"
import { createTask, fetchTasks } from "../thunks"
import modal from "hoc/modal"
import Loading from "base_components/Loading"
import { selectors } from "../selectors"
import { toastAction } from "global/Toast"
import TutorialTasksList from "../TutorialTasksList"
import { types } from "../ducks"

class TutorialTasksTab extends Component {
  componentDidMount() {
    this.fetchCurrentTutorialTasks()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedTutorial !== this.props.selectedTutorial) {
      this.fetchCurrentTutorialTasks()
    }
  }

  fetchCurrentTutorialTasks = () =>
    this.props.fetchTasks({
      courseId: this.props.selectedTutorial.course_id,
      tutorialId: this.props.selectedTutorial.id
    })

  handleCreateTask = task =>
    this.props
      .createTask({
        courseId: this.props.selectedTutorial.course_id,
        tutorialId: this.props.selectedTutorial.id,
        task
      })
      .then(action =>
        toastAction({
          action,
          errorType: types.CREATE_TASK_ERROR,
          success: "Task is succesffully created",
          error: "Task creation failed"
        })
      )

  render() {
    const {
      isCreatingTask,
      isFetchingTasks,
      tasks,
      isOpen,
      onOpen,
      onClose
    } = this.props
    return (
      <Fragment>
        <Actions>
          <ButtonAdd text="Add" iconPosition="right" onHandlerClick={onOpen} />
        </Actions>
        {isFetchingTasks || isCreatingTask ? (
          <Loading />
        ) : tasks.length === 0 ? (
          "This tutorial has no tasks"
        ) : (
          <TutorialTasksList tasks={tasks} />
        )}
        <CreateTaskModal
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={this.handleCreateTask}
        />
      </Fragment>
    )
  }
}

const mapState = () =>
  createStructuredSelector({
    selectedTutorial: selectors.selectSelectedTutorial(),
    tasks: selectors.selectTasks(),
    isFetchingTasks: selectors.selectIsFetchingTasks(),
    isCreatingTask: selectors.selectIsCreatingTask()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      createTask,
      fetchTasks
    },
    dispatch
  )

export default compose(
  component =>
    connect(
      mapState,
      mapDispatch
    )(component),
  modal
)(TutorialTasksTab)
