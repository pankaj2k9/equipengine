import styled from "styled-components"
import bgImage from "./course-bg.png"

export const Root = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding: 20px 30px;
  font-weight: 500;
`

export const CourseSmallImage = styled.img`
  width: 100%;
  max-width: 250px;
`
export const CourseTitle = styled.div`
  color: #fff;
  font-size: 30px;
`

export const ExpandLink = styled.a`
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #338ffc;
  }
`

export const ExpandIcon = styled.span`
  margin-left: 4px;
  font-size: 1rem;
`

export const DesktopContainerFlex = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
