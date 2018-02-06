import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { loggedUserActions, loggedUserSelectors } from 'data/loggedUser';
//
import Login from './Login';

// destructuring the loggedUserActions
const { loggedUser } = loggedUserActions;

// loggedUserSelectors
const { getErrorMessage, isUserValid } = loggedUserSelectors;

const mapState = state => ({
  errorMsg: getErrorMessage(state),
  isUserValid: isUserValid(state),
  isPending: state.loggedUser.processRequest.pending
});

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      loggedUser,
      redirectToIndex: () => push('/')
    },
    dispatch
  );

export default connect(mapState, mapDispatch)(Login);
