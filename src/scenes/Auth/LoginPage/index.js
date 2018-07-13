import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { toastr } from "react-redux-toastr"
//
import AbstractAuthPage from "../AbstractAuthPage"
import LoginForm from "../LoginForm"
import { selectors, types } from "../ducks"
import { login } from "../thunks"

class LoginPage extends Component {
  handleSubmit = ({ email, password }) =>
    this.props.login({ email, password }).then(action => {
      // TODO parse action.error response body
      // to check if email is not confirmed or username/password are invalid
      if (action.type === types.LOGIN_ERROR) {
        toastr.error("Login failed", "Username or password is invalid")
      }
    })

  render() {
    const { isPending } = this.props
    return (
      <AbstractAuthPage title="Login" isPending={isPending}>
        <LoginForm onSubmit={this.handleSubmit} />
      </AbstractAuthPage>
    )
  }
}

const mapState = () =>
  createStructuredSelector({
    isPending: selectors.selectIsPendingLogin()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      login
    },
    dispatch
  )

export default connect(
  mapState,
  mapDispatch
)(LoginPage)
