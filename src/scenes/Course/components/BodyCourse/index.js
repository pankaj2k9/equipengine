import React, { PureComponent } from "react"
import PropTypes from "prop-types"

import Box from "base_components/Box"
import TabsCourse from "../TabsCourse"
import LatestGroupDiscussion from "../LatestGroupDiscussions"
import { Mobile, Desktop } from "base_components/Responsive"

class BodyCourse extends PureComponent {
  render() {
    const { course, latestDicussions } = this.props
    return (
      <div>
        {/* this is the layout for 0-767px width */}
        <Mobile>
          <Box>
            <TabsCourse course={course} />
            <LatestGroupDiscussion latestDicussions={latestDicussions} />
          </Box>
        </Mobile>
        {/* this is the layout for 767px and up width */}
        <Desktop>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <TabsCourse
              course={course}
              style={{
                width: "60%"
              }}
            />
            <LatestGroupDiscussion latestDicussions={latestDicussions} />
          </Box>
        </Desktop>
      </div>
    )
  }
}

BodyCourse.propTypes = {
  course: PropTypes.object.isRequired,
  latestDicussions: PropTypes.array.isRequired
}

export default BodyCourse
