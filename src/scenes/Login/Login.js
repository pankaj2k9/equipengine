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
  redirectToIndex,
  isUserValid,
  history
}) => {
  // event handler for form onSubmit event.
  const onSubmit = e => {
    e.preventDefault();
    addLoggedUser({ username, password });

    /* handle the user validation. If user is valid, redirect to '/' path, if not stay on the same page.*/
    if (isUserValid) {
      redirectToIndex();
    }
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
  history: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
  onHandleChange: PropTypes.func.isRequired,
  addLoggedUser: PropTypes.func.isRequired,
  username: PropTypes.string,
  password: PropTypes.string,
  isUserValid: PropTypes.bool.isRequired
};

export default compose(withState, withStyle)(Login);
