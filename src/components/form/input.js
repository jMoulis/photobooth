import React from 'react';

export default ({ nameField, type, onChange, value, placeholder, label, required, autocomplete }) => (
  <div className="form-control">
    {label && <label>{label}</label>}
    <input id={nameField} name={nameField} type={type} value={value} onChange={onChange} placeholder={placeholder} required={required} autoComplete={autocomplete}/>
  </div>
);
