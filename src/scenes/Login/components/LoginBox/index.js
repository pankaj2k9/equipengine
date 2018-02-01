import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'ramda';
// redux
import { connect } from 'react-redux';
import { loggedUser } from '../../action';
//
import Button from 'base_components/RootButton';
import withStyle from './withStyle';
import withState from './withState';

const LoginBox = ({
  className,
  onHandleChange,
  username,
  password,
  onSubmit
}) => (
  <div className={className}>
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
);

LoginBox.propTypes = {
  className: PropTypes.string.isRequired,
  onHandleChange: PropTypes.func.isRequired,
  username: PropTypes.string,
  password: PropTypes.string
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: e => {
    e.preventDefault();

    dispatch(
      loggedUser({
        username: ownProps.username,
        password: ownProps.password
      })
    );
  }
});

export default compose(withStyle, withState, connect(null, mapDispatchToProps))(
  LoginBox
);
