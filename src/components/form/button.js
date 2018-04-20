/**
 * Npm import
 */
import React from 'react';

import Spinner from '../global/spinner';
/**
 * Code
 */
export default ({ nameBtn, name, onClick, type, disabled, spinner }) => (
  <div className="form-control form-control-button">
    <button type={type} name={name} onClick={onClick} disabled={disabled}>
      {spinner && disabled ? <Spinner /> : nameBtn}
    </button>
  </div>
);
