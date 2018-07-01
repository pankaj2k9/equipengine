import React from "react"
//
import StyledBoxHeaderCourse from "./components/BoxHeaderCourse"
import ButtonsContainer from "./components/ButtonsContainer"
import Button from "./components/Button"
import bgImage from "../../course-bg.png"
import settings from "resources/images/settings.svg"
import iconPencil from "resources/images/iconPencil.svg"
import courseImg from "resources/images/steve-bible-teaching.jpg"

const HeaderCourseMeta = ({ courseTitle }) => (
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
          <Button isAlignCenter>
            <img alt="icon pencil" src={iconPencil} /> <span>Edit Info</span>
          </Button>
          <Button isAlignCenter>
            <img alt="icon pencil" src={settings} /> <span>Settings</span>
          </Button>
        </ButtonsContainer>
      </div>
    </header>
  </StyledBoxHeaderCourse>
)

export default HeaderCourseMeta
