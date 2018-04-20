import React from 'react';
import PropTypes from 'prop-types';

// Displays masks btn and the stripe along aside
const MaskPickerBtn = ({ name, onClick, id }) => (
  <div id={`mask-picker-btn-container-${id}`} className="mask-picker-btn-container">
    <span className="stripe" />
    <button id={id} className="btn-mask-picker" onClick={onClick}>{name}</button>
  </div>
);

MaskPickerBtn.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default MaskPickerBtn;
