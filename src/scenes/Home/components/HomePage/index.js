import React from "react"
import IconSettings from "react-icons/lib/fa/cog"
import OutlineButton from "base_components/OutlineButton"
import { Link } from "react-router-dom"
//
import MyGroups from "../MyGroups"
import LatestActivities from "../LatestActivities"
import PageWrapper from "global/PageWrapper"
import { RootLayout } from "./elements"

const Home = () => (
  <PageWrapper
    title="Hello!"
    disableBack
    actionBar={
      <Link to="/secure/settings">
        <OutlineButton>
          <IconSettings /> Settings
        </OutlineButton>
      </Link>
    }
  >
    <RootLayout>
      <MyGroups />
      <LatestActivities />
    </RootLayout>
  </PageWrapper>
)

export default Home
