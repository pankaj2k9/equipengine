import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { loggedUserActions, loggedUserSelectors } from 'data/loggedUser';
//
import Login from './Login';

// TODO: Redirect the user to panel(panel based on their type) if the account is valid.
// TODO: Add another selector for getting the loggedUser information and use it to our App component.

// destructuring the loggedUserActions
const { addLoggedUser } = loggedUserActions;
// loggedUserSelectors
const { isUserValid } = loggedUserSelectors;

const mapState = state => ({
  isUserValid: isUserValid(state)
});

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      addLoggedUser,
      redirectToIndex: () => push('/')
    },
    dispatch
  );

export default connect(mapState, mapDispatch)(Login);
