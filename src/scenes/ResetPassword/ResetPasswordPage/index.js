import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { compose } from "recompose"
import { createStructuredSelector } from "reselect"
import { toastr } from "react-redux-toastr"
import { withRouter } from "react-router-dom"
//
import AbstractAuthPage from "global/AbstractAuthPage"
import ResetPasswordForm from "../ResetPasswordForm"
import { selectors, types } from "../ducks"
import { resetPassword } from "../thunks"

class ResetPasswordPage extends Component {
  handleSubmit = ({ password, passwordConfirmation }) =>
    this.props
      .resetPassword({
        password,
        passwordConfirmation,
        resetPasswordToken: this.props.match.params.token
      })
      .then(action => {
        if (action.type === types.RESET_PASSWORD_SUCCESS) {
          toastr.success("Success", "Password has been succesfully reset")
        } else {
          toastr.error("Error", "Password reset failed")
        }
      })

  render() {
    const { isPending } = this.props
    return (
      <AbstractAuthPage title="Reset password" isPending={isPending}>
        <ResetPasswordForm onSubmit={this.handleSubmit} />
      </AbstractAuthPage>
    )
  }
}

const mapState = () =>
  createStructuredSelector({
    isPending: selectors.selectIsSendingPassword()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      resetPassword
    },
    dispatch
  )

export default compose(
  component =>
    connect(
      mapState,
      mapDispatch
    )(component),
  withRouter
)(ResetPasswordPage)
