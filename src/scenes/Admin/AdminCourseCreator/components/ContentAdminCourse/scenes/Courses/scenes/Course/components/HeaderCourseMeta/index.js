import React from "react"
//
import StyledBoxHeaderCourse from "./components/BoxHeaderCourse"
import ContainerFlex from "base_components/ContainerFlex"
import bgImage from "../../course-bg.png"
import settings from "resources/images/settings.svg"
import iconPencil from "resources/images/iconPencil.svg"

const HeaderCourseMeta = ({ courseTitle }) => (
  <StyledBoxHeaderCourse
    style={{
      backgroundImage: `url(${bgImage})`
    }}
  >
    <header>
      <div>
        <h3>{courseTitle}</h3>
        <ContainerFlex className="containerControllButton">
          <ContainerFlex isAlignCenter>
            <img alt="icon pencil" src={iconPencil} />
            <span>Edit Info</span>
          </ContainerFlex>
          <ContainerFlex isAlignCenter>
            <img alt="icon pencil" src={settings} />
            <span>Settings</span>
          </ContainerFlex>
        </ContainerFlex>
      </div>
    </header>
  </StyledBoxHeaderCourse>
)

export default HeaderCourseMeta
