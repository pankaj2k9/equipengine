import styled from "styled-components"

export const Root = styled.li`
  > :hover {
    background-color: #f4f4f4;
  }

  > div:first-child {
    padding: 1.7em 0 0.8em;
    border-bottom: 1px solid #dadada;
  }

  &:first-child {
    > div:first-child {
      padding-top: 0.8em;
    }
  }

  .panel {
    border-top: 0;
  }

  @media screen and (min-width: 768px) {
    > div:first-child {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 2.3em 2.4em 0.5em;
    }

    &:first-child {
      > div:first-child {
        padding-top: 0.9em;
      }
    }
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h5`
  font-size: 1.09rem;
  color: #111111;
  margin-top: 0;
`

export const Subtitle = styled.p`
  color: #9fa6ad;
  padding-right: 20px;
`

export const ContainerInfoCourse = styled.div`
  width: 95%;
`

export const MenuButton = styled.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline;
    color: #e3e3e3;
  }
`

export const ButtonPanel = styled.p`
  font-weight: 800;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 300ms ease-in;
  margin-bottom: 0;
  display: inline-block;

  &:hover {
    color: #338ffc;
  }
`

export const SpanIcon = styled.span`
  font-size: 18px;
  font-weight: 800;
  margin-left: 0.3em;
`

export const SwitchForm = styled.div`
  display: flex;
  align-items: center;
  color: #9fa6ad;
  margin-bottom: 1.3em;
  font-size: 12px;

  > span {
    margin-right: 1em;
  }
`

export const Body = styled.div`
  margin-top: 2em;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-top: 3em;
  }
`
