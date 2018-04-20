import React from 'react';
import { Link } from 'react-router-dom';

const Confirmation = ({ imageFilteredMaskToSend, history }) => (
  <section id="confirmation-container" className="col">
    {/* <div style={{ "background": `url(${imageFilteredMaskToSend})`, top: 0, bottom: 0, left: 0, right: 0, position: 'absolute'}} /> */}
    <div className="d-flex flex-column justify-content-around">
      <p>Thank You For Your Time!</p>
      <div className="d-flex flex-column align-items-center">
        <h1>Your picture is on it's way!</h1>
        <div>
          <img src={imageFilteredMaskToSend} alt="SentImage" />
        </div>
      </div>
      <footer>
        <Link to="/start" className="form-control-button">Done</Link>
      </footer>
    </div>
  </section>
);

export default Confirmation;
