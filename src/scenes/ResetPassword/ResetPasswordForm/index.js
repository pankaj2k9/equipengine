import React, { Component } from "react"
//
import { Form, Input, StyledButton } from "base_components/SimpleFormElements"

class ResetPasswordForm extends Component {
  state = {
    password: "",
    passwordConfirmation: ""
  }

  handleSubmit = () =>
    this.props.onSubmit({
      password: this.state.password,
      passwordConfirmation: this.state.passwordConfirmation
    })

  handlePasswordChange = ({ target: { value } }) =>
    this.setState({ password: value })
  handlePasswordConfirmationChange = ({ target: { value } }) =>
    this.setState({ passwordConfirmation: value })

  render() {
    const { password, passwordConfirmation } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          autoFocus
          type="password"
          value={password}
          placeholder="Password"
          onChange={this.handlePasswordChange}
        />
        <Input
          type="password"
          value={passwordConfirmation}
          placeholder="Password confirmation"
          onChange={this.handlePasswordConfirmationChange}
        />
        <StyledButton type="submit" onClick={this.handleSubmit}>
          Update password
        </StyledButton>
      </Form>
    )
  }
}

export default ResetPasswordForm
