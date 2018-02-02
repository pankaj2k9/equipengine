import React, { Component } from 'react';

export default WrappedComponent => {
  class EnhancedLoginForm extends Component {
    state = {
      username: '',
      password: ''
    };

    handleChange = e => {
      const { value, name } = e.target;

      // update the state
      this.setState({
        [name]: value
      });
    };

    render() {
      const { username, password } = this.state;

      return (
        <WrappedComponent
          {...this.props}
          onHandleChange={this.handleChange}
          username={username}
          password={password}
        />
      );
    }
  }

  return EnhancedLoginForm;
};
