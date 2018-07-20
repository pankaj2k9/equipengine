import React from "react"

import HeaderLinksBar from "../HeaderLinksBar"
import Error from "base_components/Error"
import PageNavigationBar from "base_components/PageNavigationBar"
import TutorialDescription from "../TutorialDescription"
import TutorialToDo from "../TutorialToDo"
import TutorialTabs from "../TutorialTabs"
import VideoPlayer from "../VideoPlayer"

import {
  Modal,
  WhiteBackground,
  TaskContainer,
  InfoContainer,
  ContainerFlex
} from "./elements"

import lessonsData from "../../lessons.json"

// Modal is used here as a variant of hiding appbar and navbar..
class TutorialModalPage extends React.Component {
  constructor() {
    super()
    this.state = {
      lessons: lessonsData.lessons,
      pagination: lessonsData.meta
    }
  }

  handleCloseModal = () => {
    const { groupId, courseId } = this.props.match.params
    this.props.history.push(`/secure/${groupId}/courses/${courseId}`)
  }

  handlePreviousClick = () => {
    const { groupId, courseId } = this.props.match.params
    const lessonIndex = this.findLessonIndex()
    if (lessonIndex === -1 || lessonIndex === 0) {
      // Fail to get next page cause there are no more lessons
      return
    }
    const previousLessonId = this.state.lessons[lessonIndex - 1].id
    this.props.history.push(
      `/secure/${groupId}/courses/${courseId}/tutorials/${previousLessonId}`
    )
  }

  handleNextClick = () => {
    const { groupId, courseId } = this.props.match.params
    const lessonIndex = this.findLessonIndex()
    if (lessonIndex === -1 || lessonIndex + 1 >= this.state.lessons.length) {
      // Fail to get next page cause there are no more lessons
      return
    }
    const nextLessonId = this.state.lessons[lessonIndex + 1].id
    this.props.history.push(
      `/secure/${groupId}/courses/${courseId}/tutorials/${nextLessonId}`
    )
  }

  findLessonIndex = () =>
    this.state.lessons.findIndex(
      lesson => lesson.id.toString() === this.props.match.params.id
    )

  render() {
    const lessonIndex = this.findLessonIndex()
    if (lessonIndex === -1) {
      return <Error>Lesson not found</Error>
    }
    const lesson = this.state.lessons[lessonIndex]

    return (
      // Modal is used here as a variant of hiding appbar and navbar..
      // Not perfect existing solution..
      <Modal>
        <WhiteBackground>
          <HeaderLinksBar
            onCloseTutorial={this.handleCloseModal}
            onViewAllLessons={this.handleCloseModal}
          />
          <ContainerFlex>
            <InfoContainer>
              <TutorialDescription
                title={lesson.title}
                description={lesson.description}
              />
              <TutorialToDo />
            </InfoContainer>
            <TaskContainer>
              <VideoPlayer />
              <TutorialTabs tasks={lesson.tasks} />
            </TaskContainer>
          </ContainerFlex>
          <PageNavigationBar
            disabledPrevious={lessonIndex === 0}
            disabledNext={lessonIndex + 1 >= this.state.lessons.length}
            onNextClick={this.handleNextClick}
            onPreviousClick={this.handlePreviousClick}
          />
        </WhiteBackground>
      </Modal>
    )
  }
}

export default TutorialModalPage
