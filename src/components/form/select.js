import React from 'react';

const SelectBox = ({ onChange, options, label, name, required }) => (
  <div className="form-control">
    <select name={name} onChange={onChange} required={required}>
      <option value="">{label}</option>
      {options.map((option, index) => (
        <option key={index} value={option.name}>{option.name}</option>
      ))}
    </select>
  </div>
);

export default SelectBox;
