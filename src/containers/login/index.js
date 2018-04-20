/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import Login from '../../components/login';
import { loginAction } from '../../store/reducers/appReducer';

/*
 * Code
 */
// State
const mapStateToProps = ({ appReducer }) => ({
  login: appReducer.login,
});

// Actions
const mapDispatchToProps = dispatch => ({
  loginAction: (values) => {
    dispatch(loginAction(values));
  },
});


/*
 * Export default
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const LoginContainer = createContainer(Login);
export default LoginContainer;