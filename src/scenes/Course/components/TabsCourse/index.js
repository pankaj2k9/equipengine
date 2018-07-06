import React from "react"
import PropTypes from "prop-types"
import { Tab } from "react-bootstrap"

import Tabs from "base_components/Tabs"
import TabListTutorials from "../TabListTutorials"
import TabTutorialFiles from "../TabTutorialFiles"
import TabGroupDiscussions from "../TabGroupDiscussions"

class TabsCourse extends React.Component {
  shouldComponentUpdate(nextProps) {
    // if not the same, re-render the components
    if (this.props.course !== nextProps.course) {
      return true
    }

    return false
  }

  render() {
    // get the list tutorials for this course
    const { tutorials, files } = this.props.course

    return (
      <Tabs style={this.props.style}>
        <Tab eventKey={1} title="Tutorials">
          <TabListTutorials tutorials={tutorials} />
        </Tab>
        <Tab eventKey={2} title="Group Discussions">
          <TabGroupDiscussions />
        </Tab>
        <Tab eventKey={3} title="Files">
          <TabTutorialFiles files={files} />
        </Tab>
      </Tabs>
    )
  }
}

TabsCourse.propTypes = {
  style: PropTypes.object
}

export default TabsCourse
