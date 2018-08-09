import React, { Component, Fragment } from "react"

import Button from "base_components/RootButton"

import {
  ButtonContainer,
  CloseButton,
  Header,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Question,
  QuizBody,
  QuizBodyContent,
  QuizScore,
  QuizScoreRoot,
  ReviewButton,
  Step,
  Steps
} from "./elements"

const questions = [{}, {}, {}, {}]

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
            {!isFinished && <Header>Question 8 of 8</Header>}
            {isFinished && <Header>Completed</Header>}

            <QuizBodyContent>
              {isFinished ? (
                <Fragment>
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
                </Fragment>
              ) : (
                <Fragment>
                  <Question>
                    What is the difference between an apple and a orange?
                  </Question>
                </Fragment>
              )}
            </QuizBodyContent>
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
