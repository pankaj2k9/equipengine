import React from "react"

import { MainInnerContainer, MainLeft } from "base_components/Main"
import Sidebar from "../Sidebar"
import TabsUsers from "../TabsUsers"

const GroupUsersPage = () => (
  <MainInnerContainer>
    <MainLeft>
      <TabsUsers />
    </MainLeft>
    <Sidebar />
  </MainInnerContainer>
)

export default GroupUsersPage
