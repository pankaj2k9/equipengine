import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { compose } from "recompose"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { withRouter } from "react-router-dom"
// component
import Button from "base_components/RootButton"
import CreateTutorialModal from "../CreateTutorialModal"
import {
  createTutorial,
  fetchTutorials,
  fetchMoreTutorials,
  updateTutorial,
  deleteTutorial
} from "../thunks"
import { selectors } from "../selectors"
import { actions, types } from "../ducks"
import modal from "hoc/modal"
import { toastAction } from "global/Toast"
import TutorialItemFormatter from "../TutorialItemFormatter"
import TutorialTabs from "../TutorialTabs"
import VerticalTabs from "base_components/VerticalTabs"

class Course extends Component {
  componentDidMount() {
    const { courseId } = this.props.match.params
    this.props.fetchTutorials({ courseId })
  }

  handleCreateTutorial = ({ title, description }) => {
    const { courseId } = this.props.match.params
    this.props.onClose()
    this.props
      .createTutorial({
        courseId,
        title,
        description
      })
      .then(action => {
        toastAction({
          action,
          errorType: types.CREATE_TUTORIAL_ERROR,
          success: `New tutorial "${title}" is succesffully created`,
          error: `Failed to create tutorial "${title}"`
        })
      })
  }

  handleSelectTutorial = ({ id }) => {
    this.props.selectTutorial({ selectedTutorialId: id })
  }

  handleLoadMore = page => {
    const { courseId } = this.props.match.params
    this.props.fetchMoreTutorials({ currentPage: page, courseId })
  }

  handleUpdateTutorialStatus = ({ status, tutorialId }) => {
    const { courseId } = this.props.match.params
    this.props.updateTutorial({
      courseId,
      tutorialId,
      status
    })
  }

  handleDeleteTutorial = ({ tutorialId }) => {
    const { courseId } = this.props.match.params
    this.props.deleteTutorial({
      tutorialId,
      courseId
    })
  }

  render() {
    const {
      tutorials,
      selectedTutorial,
      isCreatingTutorial,
      isUpdatingTutorial,
      updatingTutorialId,
      isDeletingTutorial,
      deletingTutorialId,
      isFetchingTutorials,
      isOpen,
      onOpen,
      onClose,
      pagination
    } = this.props

    return (
      <VerticalTabs
        actionBar={
          <div>
            <Button onClick={onOpen} large>
              New tutorial
            </Button>
            <CreateTutorialModal
              isOpen={isOpen}
              onClose={onClose}
              onSubmit={this.handleCreateTutorial}
            />
          </div>
        }
        loading={isCreatingTutorial || isFetchingTutorials}
        tabs={tutorials}
        tabFormatter={tutorial => (
          <TutorialItemFormatter
            tutorial={tutorial}
            isUpdatingTutorial={isUpdatingTutorial}
            updatingTutorialId={updatingTutorialId}
            isDeletingTutorial={isDeletingTutorial}
            deletingTutorialId={deletingTutorialId}
            onUpdateTutorialStatus={this.handleUpdateTutorialStatus}
            onDeleteTutorial={this.handleDeleteTutorial}
          />
        )}
        selectedTab={selectedTutorial && selectedTutorial.id}
        content={<TutorialTabs tutorial={selectedTutorial} />}
        onTabClick={this.handleSelectTutorial}
        handleLoadMore={this.handleLoadMore}
        pagination={pagination}
        useWindowScroll
      />
    )
  }
}

const mapState = () =>
  createStructuredSelector({
    tutorials: selectors.selectTutorials(),
    isFetchingTutorials: selectors.selectIsFetchingTutorials(),
    isCreatingTutorial: selectors.selectIsCreatingTutorial(),
    isUpdatingTutorial: selectors.selectIsUpdatingTutorial(),
    updatingTutorialId: selectors.selectUpdatingTutorialId(),
    isDeletingTutorial: selectors.selectIsDeletingTutorial(),
    deletingTutorialId: selectors.selectDeletingTutorialId(),
    selectedTutorial: selectors.selectSelectedTutorial(),
    pagination: selectors.selectTutorialPagination()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      createTutorial,
      fetchTutorials,
      fetchMoreTutorials,
      updateTutorial,
      deleteTutorial,
      selectTutorial: actions.selectTutorial
    },
    dispatch
  )

export default compose(
  component =>
    connect(
      mapState,
      mapDispatch
    )(component),
  withRouter,
  modal
)(Course)
