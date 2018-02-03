import { connect } from 'react-redux';
import App from './App';
//
import { loggedUserSelectors } from 'data/loggedUser';

const { getLoggedUser } = loggedUserSelectors;

const mapState = state => ({
  loggedUser: getLoggedUser(state)
});

export default connect(mapState, null)(App);
