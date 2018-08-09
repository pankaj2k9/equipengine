import React, { Component } from "react"

import Button from "base_components/RootButton"

import {
  ButtonContainer,
  CloseButton,
  Header,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  QuestionView,
  QuizBody,
  QuizScore,
  QuizScoreRoot,
  ResultView,
  ReviewButton,
  Step,
  Steps
} from "./elements"
import TutorialQuizQuestion from "../TutorialQuizQuestion"

const questions = [
  { question: "What is the difference between an apple and a orange?" },
  { question: "What is the difference between an olive and a orange?" },
  { question: "What is the difference between a banana and a orange?" },
  { question: "What is the difference between a grape and a orange?" }
]

class TutorialQuiz extends Component {
  state = {
    activeStep: 0,
    isFinished: false
  }

  handleBack = () => {
    this.setState({ activeStep: this.state.activeStep - 1 })
  }

  handleFinish = () => {
    this.setState({ isFinished: true })
  }

  handleNext = () => {
    this.setState({ activeStep: this.state.activeStep + 1 })
  }

  render() {
    const { isOpen, onClose } = this.props
    const { activeStep, isFinished } = this.state

    return (
      <Modal show={isOpen}>
        <ModalHeader>Name of Quiz</ModalHeader>

        <ModalBody>
          <QuizBody>
            {!isFinished && (
              <Header>
                Question {activeStep + 1} of {questions.length}
              </Header>
            )}
            {isFinished && <Header>Completed</Header>}

            {isFinished ? (
              <ResultView>
                <QuizScoreRoot>
                  <span>Your Results</span>
                  <QuizScore>7/8</QuizScore>
                </QuizScoreRoot>

                <ButtonContainer>
                  <CloseButton onClick={onClose} secondary>
                    Close
                  </CloseButton>

                  <ReviewButton secondary>Review</ReviewButton>
                </ButtonContainer>
              </ResultView>
            ) : (
              <QuestionView>
                <TutorialQuizQuestion question={questions[activeStep]} />
              </QuestionView>
            )}
          </QuizBody>
        </ModalBody>

        {!isFinished && (
          <ModalFooter>
            <Button
              disabled={activeStep === 0}
              onClick={this.handleBack}
              secondary
            >
              Back
            </Button>
            <Steps>
              {questions.map((_question, index) => (
                <Step className={activeStep === index && "active"} />
              ))}
            </Steps>
            {activeStep === questions.length - 1 ? (
              <Button onClick={this.handleFinish}>Finish Quiz</Button>
            ) : (
              <Button onClick={this.handleNext} secondary>
                Next
              </Button>
            )}
          </ModalFooter>
        )}
      </Modal>
    )
  }
}

export default TutorialQuiz
