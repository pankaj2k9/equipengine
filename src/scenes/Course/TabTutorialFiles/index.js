import React from "react"
import PropTypes from "prop-types"

import TableFiles from "base_components/TableFiles"

const TabTutorialFiles = ({ files }) => <TableFiles files={files} />

TabTutorialFiles.propTypes = {
  files: PropTypes.array
}

export default TabTutorialFiles
