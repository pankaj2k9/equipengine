import styled from "styled-components"

export const ItemRoot = styled.li`
  background-color: none;
  padding: 17px 35px;
  transition: all 300ms ease-in;
  cursor: pointer;

  &:hover {
    background-color: rgba(184, 184, 184, 0.2);
  }

  > div > div {
    &:first-child {
      span {
        margin-left: 1em;
      }
    }

    &:last-child {
      > div {
        margin-right: 1em;
      }
    }
  }
`
