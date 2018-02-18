import { compose } from 'ramda';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from './App';
// selectors
import { loggedUserSelectors } from 'data/loggedUser';

// destructuring loggedUser selectors
const { isUserAuthenticated } = loggedUserSelectors;

const mapState = state => ({
  loggedUser: state.loggedUser.user,
  isUserAuthenticated: isUserAuthenticated(state)
});

export default compose(withRouter, connect(mapState, null))(App);
