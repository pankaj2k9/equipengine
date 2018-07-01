import React from "react"
import IconSettings from "react-icons/lib/fa/cog"
import OutlineButton from "base_components/OutlineButton"
import { Link } from "react-router-dom"
//
import BodyBrowseGroups from "./components/BodyBrowseGroups"
import PageWrapper from "../components/PageWrapper"

const BrowseGroups = () => (
  <PageWrapper
    title="Hi Jane!"
    disableBack
    actionBar={
      <Link to="/secure/settings">
        <OutlineButton>
          <IconSettings /> Settings
        </OutlineButton>
      </Link>
    }
  >
    <BodyBrowseGroups />
  </PageWrapper>
)

export default BrowseGroups
