import styled from "styled-components"

export const ActionBar = styled.div`
  padding: 1em 10px;
  border-bottom: 1px solid ${props => props.theme.lightgray};
`

export const Layout = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex: 1;
  }
`

export const Tabs = styled.div`
  @media screen and (min-width: 768px) {
    flex: 1;

    min-width: 350px;
    max-width: 400px;
    height: auto;

    overflow-y: auto;
  }
`

export const TabContent = styled.div`
  padding: 16px;
  @media screen and (min-width: 768px) {
    flex: 1;

    height: auto;

    border-left: 1px solid ${props => props.theme.lightgray};

    overflow-y: auto;
  }
`
