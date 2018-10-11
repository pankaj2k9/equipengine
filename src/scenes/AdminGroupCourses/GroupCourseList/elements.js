import styled, { css } from "styled-components"

export const Layout = styled.div`
  transition: 300ms ease-in;
  @media screen and (min-width: 768px) {
    display: flex;
    flex: 1;
  }

  .group-course-setting {
    background-color: transparent;
  }

  ${props =>
    props.hover &&
    css`
      &:hover {
        background: #f2f3f6;
      }
    `};
`

export const Header = styled.div`
  padding: 8px 4px;
  line-height: 1.42857143;
  font-size: 12px;
  font-weight: 400;
  color: #636363;
  text-transform: uppercase;
  width: ${props => props.width};
  text-align: ${props => (props.align ? props.align : "center")};
`

export const CourseListCell = styled.div`
  padding: 8px;
  line-height: 1.42857143;
  border-top: 1px solid #ddd;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  width: ${props => props.width};
  text-align: ${props => (props.align ? props.align : "center")};

  ${props =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize};
    `};
`

export const CourseTitle = styled.div`
  font-size: 16px;
`
