import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { createStructuredSelector } from "reselect"
//
import features from "features"
import Profile from "./Profile"

const mapState = () =>
  createStructuredSelector({
    user: features.auth.selectors.selectCurrentUser()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      logout: features.auth.logout
    },
    dispatch
  )

export default connect(
  mapState,
  mapDispatch
)(Profile)
