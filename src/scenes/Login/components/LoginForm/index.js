import React from 'react';
import PropTypes from 'prop-types';
//
import Button from 'base_components/RootButton';
import withState from './hoc/withState';

const LoginForm = ({
  onHandleChange,
  username,
  password,
  loggedUser,
  isPending
}) => {
  // event handler for form onSubmit event.
  const onSubmit = e => {
    e.preventDefault();
    loggedUser({ username, password });
  };

  return (
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
      <Button disabled={isPending}>Login</Button>
    </form>
  );
};

LoginForm.propTypes = {
  onHandleChange: PropTypes.func.isRequired,
  username: PropTypes.string,
  password: PropTypes.string,
  loggedUser: PropTypes.func.isRequired,
  isPending: PropTypes.bool.isRequired
};

export default withState(LoginForm);
