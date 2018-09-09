import styled from "styled-components"

export const Container = styled.div`
  button {
    font-weight: 400;
    padding: 10px 20px;
  }

  & > .table-responsive {
    padding: 2%;
  }

  @media screen and (min-width: 768px) {
    & > .table-responsive {
      padding: 27px 40px;
    }
  }
`
