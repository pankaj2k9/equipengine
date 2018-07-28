import styled from "styled-components"

export const ActionBar = styled.div`
  padding: 16px;
  border-bottom: 1px solid ${props => props.theme.lightgray};
`

export const Layout = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export const Tabs = styled.div`
  @media screen and (min-width: 768px) {
    flex: 1;
    min-width: 350px;
    height: 85vh;
    overflow-y: scroll;
  }
`

export const TabContent = styled.div`
  padding: 16px;
  @media screen and (min-width: 768px) {
    border-left: 1px solid ${props => props.theme.lightgray};
    flex: 1;
  }
`
