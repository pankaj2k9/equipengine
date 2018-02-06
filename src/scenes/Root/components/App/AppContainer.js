import { compose } from 'ramda';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from './App';

const mapState = state => ({
  loggedUser: state.loggedUser.user
});

export default compose(withRouter, connect(mapState, null))(App);
