import styled from "styled-components"

export const Modal = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(53, 53, 53, 0.53);
  position: fixed;
  z-index: 5;
  top: 0px;
  overflow-y: auto;
  overflow-x: hidden;

  @media screen and (min-width: 767px) {
    /**
     * Badly hides left side bar...
     */
    left: 0px;
  }
`

export const WhiteBackground = styled.div`
  background-color: #fff;
`

export const ContainerFlex = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dadada;
  border-top: 1px solid #dadada;
  min-height: 100vh;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const InfoContainer = styled.div`
  background-color: #f0f0f0;

  @media screen and (min-width: 768px) {
    width: 30%;
  }
`

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 70%;
  }
`
