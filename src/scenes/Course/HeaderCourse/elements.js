import styled from "styled-components"

export const CourseSmallImage = styled.img`
  width: 100%;
  max-width: 200px;
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
