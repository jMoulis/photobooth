import React from 'react';

export default ({ nameField, onChange, value }) => (
  <div className="d-flex flex-column">
    <label htmlFor={nameField}>{nameField}</label>
    <textarea id={nameField} name={nameField} value={value} onChange={onChange}/>
  </div>
);
