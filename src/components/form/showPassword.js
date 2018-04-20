import React from 'react';
import EyeLogo from '../global/eye';

const ShowPassword = ({ onClick }) => (
  <button id="show-password" onClick={onClick}>
    <EyeLogo />
  </button>
)

export default ShowPassword;