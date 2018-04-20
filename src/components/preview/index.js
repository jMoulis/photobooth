import React from 'react';
import { Link } from 'react-router-dom';
import mergeImages from 'merge-images';


import Thumbnail from '../../containers/preview/thumbnail';
import LogoCamera from '../global/logoCamera';
import LogoEmail from '../global/logoEmail';
import loadEventFromStorage from '../../utils/loadEventFromStorage';

class Preview extends React.Component {
  state = {
    picture: '',
    layer: null,
    event: {},
  };
  componentDidMount() {
    this.setPicture();
    this.loadEvent();
    // If the user goes back here from the sending form
    // reset sending mail status to not sending
    const { resetMailStatusAction } = this.props;
    resetMailStatusAction();
  }
  // This method controls the refresh case
  // It first fetches the pictures from the reducer
  // and then from the localstorage
  // TODO: Use the loadFromlocage 
  setPicture = () => {
    const picture = loadEventFromStorage(this.props.takenPicture, 'picture');
    this.setState(() => ({
      picture,
    }))
    return picture;
  }
  loadEvent = () => {
    const event = loadEventFromStorage(this.props.event, 'event');
    this.setState(() => ({
      event,
    }));
  }
  handleSend = (evt) => {
    const { setImageToSendAction } = this.props;
    // Fetch new image
    const eventTitleImg = document.querySelector('.event-title');

    // Merge images
    // By default we set an array with the event name png
    let mergedImages = [
      { src: this.state.picture, x: 0, y: 0 },
      { src: eventTitleImg.src, x: 115, y: 800 },
    ];
    // If there is a layer selected we set a new object
    // with the layer added to be merged
    if (this.state.layer) {
      mergedImages = [
        { src: this.state.picture, x: 0, y: 0 },
        { src: this.state.layer.src, x: 0, y: 0 },
        { src: eventTitleImg.src, x: 115, y: 800 },
      ];
    }
    // Merge function (from external module)
    mergeImages(mergedImages)
      .then(b64 => {
        // Set the merged image to the state (reducer)
        setImageToSendAction(b64);
      })
      .then(() => this.props.history.push('/form'))
      .catch((error) => console.log(error));
  }

  handleThumbnailClick = (evt) => {
    // Fetch the layer id and find the layer and set it in the state
    const selectedLayer = this.state.event.layers.find(layer => (
      layer.id === Number(evt.currentTarget.dataset.layer))
    );
    this.setState((prevState) => ({
      ...prevState,
      layer: selectedLayer,
    }))
  }
  
  render() {
    return (
      <section id="preview" className="col d-flex flex-column justify-content-between">
        <ul className="navbar align-items-center">
          <li>
            <Link to="/camera">
              <LogoCamera />
            </Link>
          </li>
          <li>
            <button onClick={this.handleSend}>
              <LogoEmail />
            </button>
          </li>
        </ul>
        <div className="main-picture">
          <img id="image-preview" src={this.state.picture} alt="preview" />
          <div className="mask">
            <img alt="Event Title" className="event-title" src={this.state.event.event_name} />
            {this.state.layer && <img id="mask" src={this.state.layer.src} alt="mask" />}
          </div>
        </div>
        {/* pass the takenpicture to be displyed in the thumbnail*/}
        <Thumbnail handleClick={this.handleThumbnailClick} picture={this.state.picture} />
      </section>
    );
  }
}

export default Preview;
