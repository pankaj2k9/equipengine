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
  addLoggedUser
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
          <p>To continue in Equipt Engine</p>
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
  password: PropTypes.string
};

export default compose(withState, withStyle)(Login);
