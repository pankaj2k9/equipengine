import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'ramda';
//
import Button from 'base_components/RootButton';
import withStyle from './hoc/withStyle';
import withState from './hoc/withState';

const Login = ({
  className,
  onHandleChange,
  username,
  password,
  addLoggedUser,
  isUserValid
}) => {
  // event handler for form onSubmit event.
  const onSubmit = e => {
    e.preventDefault();
    addLoggedUser({ username, password });
  };

  return (
    <div className={className}>
      <div className="Login__formContainer">
        <header>
          <h3>Login</h3>
          {!isUserValid && <span>Username or password is incorrect.</span>}
        </header>
        <form onSubmit={onSubmit}>
          <input
            onChange={onHandleChange}
            name="username"
            type="text"
            value={username}
            placeholder="Username"
          />
          <input
            onChange={onHandleChange}
            name="password"
            type="password"
            value={password}
            placeholder="Password"
          />
          <Button>Login</Button>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  className: PropTypes.string.isRequired,
  onHandleChange: PropTypes.func.isRequired,
  addLoggedUser: PropTypes.func.isRequired,
  username: PropTypes.string,
  password: PropTypes.string,
  isUserValid: PropTypes.bool.isRequired
};

export default compose(withState, withStyle)(Login);
