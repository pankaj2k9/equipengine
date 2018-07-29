import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { toastr } from "react-redux-toastr"
//
import AbstractAuthPage from "global/AbstractAuthPage"
import SignupForm from "../SignupForm"
import { selectors, types } from "../ducks"
import { signup } from "../thunks"

class SignupPage extends Component {
  handleSubmit = ({ email, password }) =>
    this.props.signup({ email, password }).then(action => {
      if (action.type === types.SIGNUP_ERROR) {
        toastr.error("Sign up failed", "Username or password are invalid")
      }
    })

  render() {
    const { isPending } = this.props
    return (
      <AbstractAuthPage title="Sign Up" isPending={isPending}>
        <SignupForm onSubmit={this.handleSubmit} />
      </AbstractAuthPage>
    )
  }
}

const mapState = () =>
  createStructuredSelector({
    isPending: selectors.selectIsPendingSignup()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      signup
    },
    dispatch
  )

export default connect(
  mapState,
  mapDispatch
)(SignupPage)
