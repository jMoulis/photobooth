/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import Thumbnail from '../../components/preview/thumbnail';

/*
 * Code
 */
// State
const mapStateToProps = ({ cameraReducer, maskReducer, appReducer }) => ({
  takenPicture: cameraReducer.takenPicture,
  masks: maskReducer.eventItem.event.masks,
  selectedImage: appReducer.selectedImageId,
});

// Actions
const mapDispatchToProps = dispatch => ({});


/*
 * Export default
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const ThumbnailContainer = createContainer(Thumbnail);
export default ThumbnailContainer;