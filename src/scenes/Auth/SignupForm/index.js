import React, { Component } from "react"
//
import { Form, Input, StyledButton } from "../AuthFormElements"

class SignupForm extends Component {
  state = {
    email: "",
    password: ""
  }

  handleSubmit = () =>
    this.props.onSubmit({
      email: this.state.email,
      password: this.state.password
    })

  handleEmailChange = ({ target: { value } }) => this.setState({ email: value })
  handlePasswordChange = ({ target: { value } }) =>
    this.setState({ password: value })

  render() {
    const { email, password } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          autoFocus
          onChange={this.handleEmailChange}
          value={email}
          placeholder="Email"
        />
        <Input
          onChange={this.handlePasswordChange}
          type="password"
          value={password}
          placeholder="Password"
        />
        <StyledButton type="submit" onClick={this.handleSubmit}>
          Sign up
        </StyledButton>
      </Form>
    )
  }
}

export default SignupForm
