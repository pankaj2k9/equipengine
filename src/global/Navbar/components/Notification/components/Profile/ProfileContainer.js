import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { createStructuredSelector } from "reselect"
//
import Profile from "./Profile"
import { thunks, selectors } from "global/Auth"

const mapState = () =>
  createStructuredSelector({
    user: selectors.selectCurrentUser()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      logout: thunks.logout
    },
    dispatch
  )

export default connect(
  mapState,
  mapDispatch
)(Profile)
