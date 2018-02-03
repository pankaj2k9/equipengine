import { compose } from 'ramda';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from './App';
//
import { loggedUserSelectors } from 'data/loggedUser';

const { getLoggedUser } = loggedUserSelectors;

const mapState = state => ({
  loggedUser: getLoggedUser(state)
});

export default compose(withRouter, connect(mapState, null))(App);
