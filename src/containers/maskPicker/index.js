/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import MaskPicker from '../../components/maskPicker';
import { selectMaskAction } from '../../store/reducers/maskReducer';
import { resetMailStatusAction, logoutAction } from '../../store/reducers/appReducer';

/* 
 * Code
 */
// State
const mapStateToProps = ({ maskReducer }) => ({
    event: maskReducer.eventItem.event,
});

// Actions
const mapDispatchToProps = dispatch => ({
  selectMaskAction: (path) => {
    dispatch(selectMaskAction(path));
  },
  resetMailStatusAction: () => {
    dispatch(resetMailStatusAction());
  },
  logoutAction: () => {
    dispatch(logoutAction());
  },
});


/*
 * Export default
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const MaskPickerContainer = createContainer(MaskPicker);
export default MaskPickerContainer;