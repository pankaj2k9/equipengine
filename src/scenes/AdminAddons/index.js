import React from "react"
import PropTypes from "prop-types"
// components
import BorderedTitle from "base_components/BorderedTitle"
import SearchbarAddons from "./components/SearchbarAddons"
import TabsCoursePackages from "./components/TabsCoursePackages"
import CoursesContainer from "scenes/AdminCoursesContainer"

const Addons = () => (
  <CoursesContainer>
    <BorderedTitle title="Add-ons" />
    <SearchbarAddons />
    <TabsCoursePackages />
  </CoursesContainer>
)

Addons.propTypes = {
  match: PropTypes.object.isRequired
}

export default Addons
