import { connect } from 'react-redux';
import Sidebar from './Sidebar';
//
import { loggedUserSelectors } from 'data/loggedUser';

const { selectLoggedUser } = loggedUserSelectors;

const mapState = state => ({
  accountType: selectLoggedUser(state).type // get the accountType
});

export default connect(mapState, null)(Sidebar);
