import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import MainBars from "./MainBars"
import features from "features"

const mapState = () =>
  createStructuredSelector({
    currentUserRole: features.auth.selectors.selectCurrentUserRole()
  })

export default connect(
  mapState,
  null
)(MainBars)
