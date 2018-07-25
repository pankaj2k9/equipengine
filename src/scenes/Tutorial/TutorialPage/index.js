import React from "react"
import { bindActionCreators } from "redux"
import { chain } from "ramda"
import { connect } from "react-redux"
import { compose } from "recompose"
import { createStructuredSelector } from "reselect"
import { toastr } from "react-redux-toastr"
import { withRouter } from "react-router-dom"

import HeaderLinksBar from "../HeaderLinksBar"
import Error from "base_components/Error"
import Loading from "base_components/Loading"
import PageNavigationBar from "base_components/PageNavigationBar"
import TutorialDescription from "../TutorialDescription"
import TutorialToDo from "../TutorialToDo"
import TutorialTabs from "../TutorialTabs"
import VideosPlayer from "../VideosPlayer"
import { fetchTasks, fetchTutorials, updateTutorialCompleted } from "../thunks"
import { selectors, types } from "../ducks"
import {
  Modal,
  FullScreenWhiteBackground,
  WhiteBackground,
  TaskContainer,
  InfoContainer,
  ContainerFlex
} from "./elements"
import { TUTORIAL_COMPLETED_STATUS } from "services/constants"

// Modal is used here as a variant of hiding appbar and navbar..
class TutorialModalPage extends React.Component {
  componentDidMount() {
    const { groupId, courseId, tutorialId } = this.props.match.params
    this.props.fetchTutorials({
      groupId,
      courseId
    })
    this.props.fetchTasks({
      groupId,
      courseId,
      tutorialId
    })
  }

  handleCloseModal = () => {
    const { groupId, courseId } = this.props.match.params
    this.props.history.push(`/secure/${groupId}/courses/${courseId}`)
  }

  handlePreviousClick = () => {
    const { groupId, courseId } = this.props.match.params
    const tutorialIndex = this.findTutorialIndex()
    if (tutorialIndex === -1 || tutorialIndex === 0) {
      // Fail to get next page cause there are no more tutorials
      return
    }
    const previousTutorialId = this.props.tutorials[tutorialIndex - 1].id
    this.props.history.push(
      `/secure/${groupId}/courses/${courseId}/tutorials/${previousTutorialId}`
    )
  }

  handleNextClick = () => {
    const { groupId, courseId } = this.props.match.params
    const tutorialIndex = this.findTutorialIndex()
    if (
      tutorialIndex === -1 ||
      tutorialIndex + 1 >= this.props.tutorials.length
    ) {
      // Fail to get next page cause there are no more tutorials
      return
    }
    const nextTutorialId = this.props.tutorials[tutorialIndex + 1].id
    this.props.history.push(
      `/secure/${groupId}/courses/${courseId}/tutorials/${nextTutorialId}`
    )
  }

  handleCompletedChange = completed => {
    const { groupId, courseId, tutorialId } = this.props.match.params
    this.props
      .updateTutorialCompleted({
        groupId,
        courseId,
        tutorialId,
        completed
      })
      .then(action => {
        if (action.type === types.UPDATE_TUTORIAL_COMPLETED_SUCCESS) {
          toastr.success(
            "Success",
            `Tutorial is succesfully ${completed ? "completed" : "uncompleted"}`
          )
        } else {
          toastr.error(
            "Error",
            `${completed ? "Complete" : "Uncomplete"} tutorial failed`
          )
        }
      })
  }

  findTutorialIndex = () =>
    this.props.tutorials.findIndex(
      tutorial => tutorial.id.toString() === this.props.match.params.tutorialId
    )

  extractCompleted = tutorial =>
    Array.isArray(tutorial.lesson_user_for_current_student) &&
    tutorial.lesson_user_for_current_student.length > 0 &&
    tutorial.lesson_user_for_current_student[0].status ===
      TUTORIAL_COMPLETED_STATUS

  extractVideos = tasks => {
    if (!Array.isArray(tasks)) {
      return []
    }

    return chain(
      video => video,
      tasks.filter(task => Array.isArray(task.videos)).map(task => task.videos)
    ).filter(video => video.video_link)
  }

  render() {
    const { isFetchingTutorials, isFetchingTasks, tasks } = this.props

    if (isFetchingTutorials) {
      return (
        <Modal>
          <FullScreenWhiteBackground>
            <HeaderLinksBar
              onCloseTutorial={this.handleCloseModal}
              onViewAllTutorials={this.handleCloseModal}
            />
            <Loading />
          </FullScreenWhiteBackground>
        </Modal>
      )
    }

    const tutorialIndex = this.findTutorialIndex()
    if (tutorialIndex === -1) {
      return <Error>Tutorial not found</Error>
    }
    const tutorial = this.props.tutorials[tutorialIndex]

    return (
      // Modal is used here as a variant of hiding appbar and navbar..
      // Not perfect existing solution..
      <Modal>
        <WhiteBackground>
          <HeaderLinksBar
            onCloseTutorial={this.handleCloseModal}
            onViewAllTutorials={this.handleCloseModal}
          />
          <ContainerFlex>
            <InfoContainer>
              <TutorialDescription
                title={tutorial.title}
                description={tutorial.description}
              />
              <TutorialToDo
                tasks={tasks}
                completed={this.extractCompleted(tutorial)}
                onChangeCompleted={this.handleCompletedChange}
              />
            </InfoContainer>
            <TaskContainer>
              {isFetchingTasks ? (
                <Loading />
              ) : (
                <React.Fragment>
                  <VideosPlayer videos={this.extractVideos(tasks)} />
                  <TutorialTabs tasks={tasks} />
                </React.Fragment>
              )}
            </TaskContainer>
          </ContainerFlex>
          <PageNavigationBar
            disabledPrevious={tutorialIndex === 0}
            disabledNext={tutorialIndex + 1 >= this.props.tutorials.length}
            onNextClick={this.handleNextClick}
            onPreviousClick={this.handlePreviousClick}
          />
        </WhiteBackground>
      </Modal>
    )
  }
}

const mapState = () =>
  createStructuredSelector({
    tutorials: selectors.selectTutorials(),
    isFetchingTutorials: selectors.selectIsFetchingTutorials(),
    tasks: selectors.selectTasks(),
    isFetchingTasks: selectors.selectIsFetchingTasks()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      fetchTasks,
      fetchTutorials,
      updateTutorialCompleted
    },
    dispatch
  )

export default compose(
  withRouter,
  comp =>
    connect(
      mapState,
      mapDispatch
    )(comp)
)(TutorialModalPage)
