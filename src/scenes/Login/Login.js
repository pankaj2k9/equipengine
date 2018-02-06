import React from 'react';
import PropTypes from 'prop-types';
import { compose, not, isEmpty } from 'ramda';
//
import LoginForm from './components/LoginForm';
import withStyle from './hoc/withStyle';

const Login = ({
  className,
  loggedUser,
  redirectToIndex,
  errorMsg,
  isUserValid,
  isPending,
  history
}) => {
  return (
    <div className={className}>
      <div className="Login__formContainer">
        <header>
          <h3>Login</h3>
          {not(isUserValid) && <span>{errorMsg}</span>}
        </header>
        <LoginForm
          errorMsg={errorMsg}
          redirectToIndex={redirectToIndex}
          isPending={isPending}
          loggedUser={loggedUser}
        />
      </div>
    </div>
  );
};

Login.propTypes = {
  history: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
  loggedUser: PropTypes.func.isRequired,
  errorMsg: PropTypes.node.isRequired,
  isUserValid: PropTypes.bool.isRequired,
  isPending: PropTypes.bool.isRequired,
  redirectToIndex: PropTypes.func.isRequired
};

export default withStyle(Login);
