import React from "react"
import styled from "styled-components"
import Breadcrumbs from "base_components/Breadcrumbs"

import BodyDashboard from "./components/BodyDashboard"

const ContainerNoticeboard = styled.div`
  border-right: 1px solid #dadada;

  @media screen and (min-width: 768px) {
    width: 60%;
  }
`

// noticeboard component.
const NoticeboardDashboard = () => (
  <ContainerNoticeboard>
    <Breadcrumbs
      items={[
        {
          // TODO change to /secure/groupId/dashboard if it makes sense
          to: "/secure/dashboard",
          label: "Noticeboard"
        }
      ]}
    />
    <BodyDashboard />
  </ContainerNoticeboard>
)

export default NoticeboardDashboard
