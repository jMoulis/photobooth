import React from 'react';

class Thumbnail extends React.Component {
  state = {
    layer: null,
    layers: []
  }
  componentDidMount() {
    this.loadMask();
  }
  thumbnailClickOnChange = (evt) => {
    const { layer } = evt.currentTarget.dataset;
    this.setState(() => ({
      layer,
    }));
  }
  loadMask = () => {
    let layers = [];
    let event = {};
    if(typeof this.props.layers === 'undefined') {
      if (localStorage.getItem('event')) {
        event = JSON.parse(localStorage.getItem('event'));
        layers = event.layers;
      }
    }
    else {
      layers = this.props.layers;
    }
    this.setState(() => ({
      layers,
      event_name: event.event_name,
    }))
  }
  render() {
    const { handleClick, picture } = this.props;
    return (
      <div>
        <span className="choose-filter">Choose your filter</span>
        <ul id="thumbnail" className="list-filter unstyled d-flex">
        {/* the fixed 3 data-layer attribute, is the default value for a non selected mask (see handleClick function)*/}
          <li
            className={`d-flex flex-column align-items-center ${this.state.layer === "3" || !this.state.layer ? 'selected' : ''}`}
            data-layer={3}
            onClick={handleClick}
          >
            <div className="thumbnail-container">
              <img
                alt="Thumbnail"
                className={`thumbnail`}
                src={picture}
                data-layer={3}
              />
              <img
                alt="Event Title"
                className="thumbnail thumbnail-event-title"
                src={this.state.event_name}
                onClick={this.thumbnailClickOnChange}
                data-layer={3}
              />
            </div>
          </li>
          {this.state.layers.map(layer => (
            <li key={layer.id}
              className={`d-flex flex-column align-items-center ${Number(this.state.layer) === layer.id ? 'selected' : ''}`}
              data-layer={layer.id}
              onClick={handleClick}
            >
            
              <div className={`thumbnail-container`}>
              {/* 1- Displays the taken picture*/}
                <img
                  alt="thumbnail"
                  className="thumbnail"
                  src={picture}
                />
                {/* 2- Displays the layer */}
                <img
                  alt="Thumbnail Layer"
                  className={`thumbnail thumbnail-mask`}
                  src={layer.src} onClick={this.thumbnailClickOnChange}
                  data-layer={layer.id}
                />
                {/* 3- Displays the event name png */}
                <img
                  alt="Event Title"
                  className="thumbnail thumbnail-event-title"
                  src={this.state.event_name} onClick={this.thumbnailClickOnChange}
                  data-layer={layer.id}
                />
              </div>
            </li>))}
        </ul>
      </div>
    )
  }
}

export default Thumbnail;