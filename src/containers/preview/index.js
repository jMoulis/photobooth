/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import Preview from '../../components/preview';
import { setImageToSendAction, resetMailStatusAction } from '../../store/reducers/appReducer';

/*
 * Code
 */
// State
const mapStateToProps = ({ cameraReducer, maskReducer, appReducer }) => ({
  takenPicture: cameraReducer.takenPicture,
  selectedMask: maskReducer.selectedMask,
  event: maskReducer.eventItem.event,
});

// Actions
const mapDispatchToProps = dispatch => ({
  setImageToSendAction: (imageB64) => {
    dispatch(setImageToSendAction(imageB64));
  },
  resetMailStatusAction: () => {
    dispatch(resetMailStatusAction());
  },
});


/*
 * Export default
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const PreviewContainer = createContainer(Preview);
export default PreviewContainer;