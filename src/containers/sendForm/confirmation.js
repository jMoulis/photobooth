/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import Confirmation from '../../components/sendForm/confirmation';

/*
 * Code
 */
// State
const mapStateToProps = ({ appReducer }) => ({
  imageFilteredMaskToSend: appReducer.imageFilteredMaskToSend,
});

// Actions
const mapDispatchToProps = dispatch => ({});


/*
 * Export default
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const ConfirmationContainer = createContainer(Confirmation);
export default ConfirmationContainer;