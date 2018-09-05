import React from "react"
// components
import BorderedTitle from "base_components/BorderedTitle"
import SearchActionBar from "../SearchActionBar"
import TableVideos from "../TableVideos"
import CoursesContainer from "scenes/AdminCoursesContainer"

const Videos = () => (
  <CoursesContainer>
    <BorderedTitle title="Videos" />
    <SearchActionBar
      searchbarInfo={{
        placeholder: "Search videos"
      }}
    />
    <TableVideos />
  </CoursesContainer>
)

export default Videos
