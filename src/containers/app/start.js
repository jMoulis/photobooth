/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import Start from '../../components/app/start';
import { resetMailStatusAction } from '../../store/reducers/appReducer';
/*
 * Code
 */
// State
const mapStateToProps = ({ appReducer }) => ({
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
const StartContainer = createContainer(Start);
export default StartContainer;