import React from 'react';

const LogoCamera = ({ onClick, filled }) => (
  <span>
    {filled ?
      <img className="logo-camera" alt="Camera" src="/img/camera-btn.png" onClick={onClick} onKeyPress={onClick} /> :
      <svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" onClick={onClick}>
        <title>photo</title>
        <path d="M20,16.91A5.09,5.09,0,1,1,14.91,22,5.09,5.09,0,0,1,20,16.91m0-2.49A7.58,7.58,0,1,0,27.58,22,7.58,7.58,0,0,0,20,14.42Z"/><path d="M24.82,4.9,27.7,8.05a2,2,0,0,0,1.48.65h6A1.81,1.81,0,0,1,37,10.5V33.3a1.81,1.81,0,0,1-1.8,1.8H4.8A1.81,1.81,0,0,1,3,33.3V10.5A1.81,1.81,0,0,1,4.8,8.7h6a2,2,0,0,0,1.48-.65L15.18,4.9h9.64m.88-2H14.3L10.82,6.7h-6A3.81,3.81,0,0,0,1,10.5V33.3a3.81,3.81,0,0,0,3.8,3.8H35.2A3.81,3.81,0,0,0,39,33.3V10.5a3.81,3.81,0,0,0-3.8-3.8h-6L25.7,2.9Z"/>
      </svg>
    }
  </span>
);

export default LogoCamera;
