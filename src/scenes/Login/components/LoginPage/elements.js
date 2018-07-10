import styled from "styled-components"

export const Root = styled.div`
  background: #f5f5f5;
  height: 100vh;
  position: relative;
`

export const Centerer = styled.div`
  width: 80%;
  height: 300px;
  padding: 2em;
  background-color: #ffffff;
  box-shadow: 0px 3px 29px 0px rgba(214, 214, 214, 0.67);
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 768px) {
    width: 30%;
  }
`

export const Title = styled.h3`
  margin-top: 0.4em;
  margin-bottom: 0.6em;
  font-size: 1.8rem;
  font-weight: 800;
`

export const Error = styled.span`
  color: #ef2525;
  margin-bottom: 0.7em;
  display: block;
`
