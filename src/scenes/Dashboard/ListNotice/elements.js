import styled from "styled-components"

export const ListItem = styled.li`
  display: flex;
  border-bottom: 1px solid #dadada;
  padding: 2em 0 1.5em 0;

  span {
    font-size: 12px;
  }

  > div:first-child {
    display: flex;
    flex-direction: column;
    margin-right: 0.8em;
    width: 115px;

    span:first-child {
      font-size: 10px;
    }
  }

  p {
    color: #000000;
    text-align: inherit;
  }
`
