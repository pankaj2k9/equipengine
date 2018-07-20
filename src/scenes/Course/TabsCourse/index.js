import React from "react"
import PropTypes from "prop-types"
import { Tab } from "react-bootstrap"

import Tabs from "base_components/Tabs"
import TabListTutorials from "../TabListTutorials"
import TabTutorialFiles from "../TabTutorialFiles"
import TabGroupDiscussions from "../TabGroupDiscussions"

class TabsCourse extends React.Component {
  render() {
    return (
      <Tabs style={this.props.style}>
        <Tab eventKey={1} title="Tutorials">
          <TabListTutorials />
        </Tab>
        <Tab eventKey={2} title="Group Discussions">
          <TabGroupDiscussions />
        </Tab>
        <Tab eventKey={3} title="Files">
          <TabTutorialFiles files={[]} />
        </Tab>
      </Tabs>
    )
  }
}

TabsCourse.propTypes = {
  style: PropTypes.object
}

export default TabsCourse
