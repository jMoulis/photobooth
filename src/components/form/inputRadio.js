import React from 'react';

export default ({ nameField, value, name, onChange }) => (
  <label>{nameField}
    <input type="radio" name={name} value={nameField} onChange={onChange} />
  </label>
);
