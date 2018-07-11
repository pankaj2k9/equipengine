import React, { Component } from "react"
//
import { Form, Input, StyledButton } from "./elements"

// TODO try to implement by compose
class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  }

  handleSubmit = () =>
    this.props.onSubmit({
      username: this.state.username,
      password: this.state.password
    })

  handleChange = ({ target: { value, name } }) =>
    this.setState({
      [name]: value
    })

  render() {
    const { username, password } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          autoFocus
          onChange={this.handleChange}
          name="username"
          type="text"
          value={username}
          placeholder="Username"
        />
        <Input
          onChange={this.handleChange}
          name="password"
          type="password"
          value={password}
          placeholder="Password"
        />
        <StyledButton type="submit" onClick={this.handleSubmit}>
          Login
        </StyledButton>
      </Form>
    )
  }
}

export default LoginForm
