import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import MainBars from "./MainBars"
import { selectors } from "global/Auth"

const mapState = () =>
  createStructuredSelector({
    currentUserRole: selectors.selectCurrentUserRole()
  })

export default connect(
  mapState,
  null
)(MainBars)
