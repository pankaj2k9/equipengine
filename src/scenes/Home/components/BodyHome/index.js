import React from "react"
import styled from "styled-components"
//
import HomeTabsGroup from "./components/HomeTabsGroup"
import HomeListLatestNotification from "./components/HomeListLatestNotification"
import ContainerFlex from "base_components/ContainerFlex"

const BodyHome = ({ className }) => {
  // your group items.
  const groups = [
    {
      id: "5fgjsdflsadjflksafmsmf",
      desc:
        "You are not part of any groups. Contact the system administrator about joining a group.",
      infoIcon: "Learn more about groups",
      isSelected: false,
      type: "your-group"
    }
  ]

  return (
    <ContainerFlex className={className}>
      <HomeTabsGroup groups={groups} />
      <HomeListLatestNotification />
    </ContainerFlex>
  )
}

export default styled(BodyHome)`
  flex-direction: column;
  .nav-tabs > li {
    margin-bottom: 0px;
    > a {
      padding: 10px 15px 12px 15px;
    }
  }
  .nav-tabs > li.active > a {
    border-bottom: none;
    &:hover,
    &:focus {
      border-bottom: none;
    }
  }
  > div:first-child h5 {
    font-size: 14px;
  }
  .tab-content {
    margin-top: 14px;
  }
  @media screen and (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
    margin-top: 1em;

    > div {
      width: 47%;
    }
  }
`
