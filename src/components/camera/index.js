/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import LogoCamera from '../global/logoCamera';
import LogoMaskMenu from '../global/logoMaskMenu';
import loadEventFromStorage from '../../utils/loadEventFromStorage';

class Camera extends React.Component {
  state = {
    track: null,
    selectedMask: null,
  }
  componentDidMount() {
    // Start camera with his options
    this.loadCamera();
    // Fetch masks selected from the mask picker
    this.loadMasks();
  }
  componentWillUnmount() {
    // Free the webcam
    if (this.state.track)
      return this.state.track.stop();
  }
  loadMasks = () => {
    // Check if masks are in reducer, if not load from storage
    const event = loadEventFromStorage(this.props.event, 'event');
    // Fetch id mask selected
    const idSelectedMask = this.props.selectedMask;
    const selectedMask = event.masks.find(mask => mask.id === Number(idSelectedMask));
    if (selectedMask) {
      this.setState(() => ({
        selectedMask: selectedMask.src,
      }));
    };
    // Set the event text png
    this.setState(() => ({
      event_name: event.event_name,
    }));
  }
  // Setup camera options and functions
  loadCamera = () => {
    const video = document.querySelector('video');
    // Specify which camera to use
    const constraints = {
      audio: false,
      video: { facingMode: { exact: "environment" } },
    };
    // Retreive connected media devices
    navigator.mediaDevices.getUserMedia(constraints)
      .then(stream => {
        video.srcObject = stream;
        const track = stream.getVideoTracks()[0];
        // Store the track in the state to unload the camera on unmount
        this.setState(() => ({
          track,
        }));
      })
      .catch(error => console.log(error));
  }
  handleClick = () => {
    const { storeTakenPictureAction, history } = this.props;
    // Fetch video element
    const video = document.querySelector('video');
    // Create a temp canvas
    const canvas = document.createElement('canvas');
    // Set canvas size and draw image
    canvas.width = '920';
    canvas.height = '1280';
    canvas.getContext('2d').drawImage(video, 0, 0, 920, 1280);

    // Store the picture in redux to use it on preview page
    storeTakenPictureAction(canvas.toDataURL('image/webp'));
    // GO to preview page
    history.push('/preview');
  }
  handleLogout = (evt) => {
    evt.preventDefault();
    const { logoutAction } = this.props;
    logoutAction();
  }
  render() {
    return (
      <section id="camera" className="col d-flex flex-column justify-content-between">
        <header className="d-flex justify-content-between align-items-center">
          <Link to="/start">
            <LogoMaskMenu />
          </Link>
        </header>
        <div id="camera-mask-container">
          {this.state.selectedMask && <img id="dotted" src={this.state.selectedMask} alt="mask" />}
          <video autoPlay />
        </div>  
          <img id="title-event" src={this.state.event_name} alt="Title Event"/>
          <footer className="d-flex justify-content-center">
            <LogoCamera filled={true} onClick={this.handleClick}/>
          </footer>
      </section>
    )
  }
};
Camera.propTypes = {
  storeTakenPictureAction: PropTypes.func.isRequired,
  takenPictures: PropTypes.array,
};
Camera.defaultProps = {
  takenPictures: [],
};

export default Camera;
