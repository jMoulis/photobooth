import React from 'react';
import { Link } from 'react-router-dom';

import MaskPickerBtn from './maskPickerBtn';
import LogoutLogo from '../global/logout';
import loadEventFromStorage from '../../utils/loadEventFromStorage';

class MaskPicker extends React.Component {
  state = {
    masks: null,
  }
  componentDidMount() {
    const { resetMailStatusAction } = this.props;
    // If the user goes back here from the sending form
    // reset sending mail status to not sending
    resetMailStatusAction();
    // Load the envent in the state
    this.loadEvent()
  }
  // Handle the click on the mask button
  handleClick = (evt) => {
    const { history, selectMaskAction } = this.props;
    const { id } = evt.currentTarget;
    // Set the selected mask in the reducer state
    selectMaskAction(id);
    // Go to camera page
    history.push('/camera');
  }
  // Handle the logout btn click
  handleLogout = (evt) => {
    evt.preventDefault();
    const { logoutAction } = this.props;
    logoutAction();
  }
  // this function is used to handle the refresh of the page
  loadEvent = () => {
    // Check if event is in reducer or in localstorage, fetch it
    const event = loadEventFromStorage(this.props.event, 'event');
    if (event) {
      this.setState(() => ({
        masks: event.masks,
      }));
    };
  }
  render() {
    return (
      <section id="mask-picker" className="col d-flex flex-column justify-content-between">
        <header className="d-flex justify-content-between align-items-center">
          <div id="headings">
            <h2>Please</h2>
            <h2>choose a mask</h2>
            <span className="stripe" />
          </div>
          <Link to="/reset">
            <LogoutLogo onClick={this.handleLogout} />
          </Link>
        </header>
        {/** TODO: Set id's dynamic from the ids of the masks array fetched from login ajax call
          Watch out the following code shows the different masks, the id are statics.
          For the moment I did like this because the order of the id mask doesn't follow the template.
          I could set a map(), but it will display only one btn because there is only one mask.
          the ids are used to set the right css and to find() the right mask to show in the camera page
        */}
        <div id="mask-picker--content">
          <div id={2} className={`zone-clickable zone-clickable--${2}`} onClick={this.handleClick}></div>
          <MaskPickerBtn id={2} onClick={this.handleClick} name="Mask #1 for snap people"/>
          <div id={1} className={`zone-clickable zone-clickable--${1}`} onClick={this.handleClick}></div>
          <MaskPickerBtn id={1} onClick={this.handleClick} name="Mask #2 for snap people under the helmet"/>
        </div>
      </section>
    )
  }
}

export default MaskPicker;
