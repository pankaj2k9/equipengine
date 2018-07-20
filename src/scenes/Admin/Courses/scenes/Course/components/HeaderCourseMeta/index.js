import React, { Fragment } from "react"
//
import StyledBoxHeaderCourse from "./components/BoxHeaderCourse"
import ButtonsContainer from "./components/ButtonsContainer"
import Button from "./components/Button"
import bgImage from "../../course-bg.png"
import settings from "resources/images/settings.svg"
import courseImg from "resources/images/course-default.png"

import Modal from "./Modal"
import modal from "hoc/modal"

const HeaderCourseMeta = ({ courseTitle, onOpen, onClose, isOpen }) => (
  <Fragment>
    <StyledBoxHeaderCourse
      style={{
        backgroundImage: `url(${bgImage})`
      }}
    >
      <header>
        <div className="course-sm-img">
          <img alt="Course Img" src={courseImg} width="150px" />
        </div>
        <div>
          <h3>{courseTitle}</h3>
          <ButtonsContainer>
            <Button onClick={onOpen} isAlignCenter>
              <img alt="icon pencil" src={settings} /> <span>Settings</span>
            </Button>
          </ButtonsContainer>
        </div>
      </header>
    </StyledBoxHeaderCourse>

    <Modal handleClose={onClose} isOpen={isOpen} />
  </Fragment>
)

export default modal(HeaderCourseMeta)
