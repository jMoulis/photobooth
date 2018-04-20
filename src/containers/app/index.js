/*
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


/*
 * Local import
 */
import App from '../../components/app';
import { resetMailStatusAction } from '../../store/reducers/appReducer';
/*
 * Code
 */
// State
const mapStateToProps = ({ appReducer }) => ({
  login: appReducer.login,
  mailStatus: appReducer.mailStatus,
});

// Actions
const mapDispatchToProps = dispatch => ({
  resetMailStatusAction: () => {
    dispatch(resetMailStatusAction());
  }
});


/*
 * Export default
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const AppContainer = createContainer(App);
export default withRouter(AppContainer);