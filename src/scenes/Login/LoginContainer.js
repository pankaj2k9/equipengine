import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addLoggedUser } from './action';
//
import Login from './Login';

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addLoggedUser }, dispatch);

export default connect(null, mapDispatchToProps)(Login);
