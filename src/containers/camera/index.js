/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import Camera from '../../components/camera';
import { storeTakenPictureAction } from '../../store/reducers/cameraReducer';
import { logoutAction } from '../../store/reducers/appReducer';
/*
 * Code
 */
// State
const mapStateToProps = ({ cameraReducer, maskReducer }) => ({
  selectedMask: maskReducer.selectedMask,
  event: maskReducer.eventItem.event,
});

// Actions
const mapDispatchToProps = dispatch => ({
  storeTakenPictureAction: (image) => {
    dispatch(storeTakenPictureAction(image));
  },
  logoutAction: () => {
    dispatch(logoutAction());
  },
});


/*
 * Export default
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const CameraContainer = createContainer(Camera);
export default CameraContainer;
