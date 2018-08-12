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
import QuizQuestion from "../QuizQuestion"

const questions = [
  {
    id: 1,
    name: "What is the difference between an apple and a orange?",
    answers: [
      { id: 1, name: "Answer", value: 0 },
      { id: 2, name: "Answer", value: 0 },
      { id: 3, name: "Answer", value: 0 },
      { id: 4, name: "Answer", value: 0 }
    ]
  },
  {
    id: 2,
    name: "What is the difference between an olive and a orange?",
    answers: [
      { id: 5, name: "Answer", value: 0 },
      { id: 6, name: "Answer", value: 0 },
      { id: 7, name: "Answer", value: 0 },
      { id: 8, name: "Answer", value: 0 }
    ]
  },
  {
    id: 3,
    name: "What is the difference between a banana and a orange?",
    answers: [
      { id: 9, name: "Answer", value: 0 },
      { id: 10, name: "Answer", value: 0 },
      { id: 11, name: "Answer", value: 0 },
      { id: 12, name: "Answer", value: 0 }
    ]
  },
  {
    id: 4,
    name: "What is the difference between a grape and a orange?",
    answers: [
      { id: 13, name: "Answer", value: 0 },
      { id: 14, name: "Answer", value: 0 },
      { id: 15, name: "Answer", value: 0 },
      { id: 16, name: "Answer", value: 0 }
    ]
  }
]

class Quiz extends Component {
  state = {
    activeStep: 0,
    isFinished: false
  }

  handleBack = () => {
    this.setState({ activeStep: this.state.activeStep - 1 })
  }

  handleFinish = () => {
    this.setState({ isFinished: true, isReview: false })
  }

  handleNext = () => {
    this.setState({ activeStep: this.state.activeStep + 1 })
  }

  handleReview = () => {
    this.setState({ isReview: true, activeStep: 0 })
  }

  render() {
    const { isOpen, onClose } = this.props
    const { activeStep, isFinished, isReview } = this.state

    return (
      <Modal show={isOpen}>
        <ModalHeader>Name of Quiz</ModalHeader>

        <ModalBody>
          <QuizBody>
            <Header>
              {!isFinished
                ? `Question ${activeStep + 1} of ${questions.length}`
                : "Completed"}
            </Header>

            {isFinished && !isReview ? (
              <ResultView>
                <QuizScoreRoot>
                  <span>Your Results</span>
                  <QuizScore>
                    0/
                    {questions.length}
                  </QuizScore>
                </QuizScoreRoot>

                <ButtonContainer>
                  <CloseButton onClick={onClose} secondary>
                    Close
                  </CloseButton>

                  <ReviewButton onClick={this.handleReview} secondary>
                    Review
                  </ReviewButton>
                </ButtonContainer>
              </ResultView>
            ) : (
              <QuestionView>
                <QuizQuestion
                  isFinished={isFinished}
                  question={questions[activeStep]}
                />
              </QuestionView>
            )}
          </QuizBody>
        </ModalBody>

        {(!isFinished || isReview) && (
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

export default Quiz
