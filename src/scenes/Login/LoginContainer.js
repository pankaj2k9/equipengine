import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { actions as loggedUserActions } from 'data/loggedUser';
import { isNil, isEmpty } from 'ramda';
//
import Login from './Login';

// destructuring the loggedUserActions
const { addLoggedUser } = loggedUserActions;

const isUserValid = createSelector(
  state => state.users,
  state => state.loggedUser,
  (users, loggedUser) =>
    isEmpty(loggedUser) || !isNil(users[loggedUser]) ? true : false
);

const mapStateToProps = state => ({
  isUserValid: isUserValid(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addLoggedUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
