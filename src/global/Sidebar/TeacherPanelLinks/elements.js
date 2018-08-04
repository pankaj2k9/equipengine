import styled from "styled-components"

export const LinkWithBadge = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1.6em;

  li {
    margin-bottom: 0 !important;
  }

  .link-badge {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 13px;
    height: 13px;

    background: #f44336;
    border-radius: 50%;

    color: #ffffff;
    font-family: "Avenir Next", sans-serif;
    font-size: 7px;
    font-weight: 500;
  }
`
