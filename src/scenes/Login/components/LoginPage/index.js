import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { toastr } from "react-redux-toastr"
//
import Loading from "base_components/Loading"
import LoginForm from "../LoginForm"
import { selectors, thunks, types } from "global/Auth"
//
import { Root, Centerer, Title } from "./elements"

class LoginPage extends Component {
  handleSubmit = ({ username, password }) =>
    this.props.login({ email: username, password }).then(action => {
      if (action.type === types.LOGIN_ERROR) {
        toastr.error("Login failed", "Username or password is invalid")
      }
    })

  render() {
    const { isPending } = this.props
    return (
      <Root>
        <Centerer>
          <header>
            <Title>Login</Title>
          </header>
          {isPending ? <Loading /> : <LoginForm onSubmit={this.handleSubmit} />}
        </Centerer>
      </Root>
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
      login: thunks.login
    },
    dispatch
  )

export default connect(
  mapState,
  mapDispatch
)(LoginPage)
