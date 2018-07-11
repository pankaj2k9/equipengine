import styled from "styled-components"

export const RootLayout = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
    margin-top: 1em;

    > div {
      width: 47%;
    }
  }
`
