import React from "react"
import IconSettings from "react-icons/lib/fa/cog"
import OutlineButton from "base_components/OutlineButton"
import { Link } from "react-router-dom"
//
import BodyHome from "./components/BodyHome"
import PageWrapper from "../components/PageWrapper"

const Home = () => (
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
    <BodyHome />
  </PageWrapper>
)

export default Home
