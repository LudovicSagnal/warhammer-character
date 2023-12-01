import React, { useState } from 'react';

const Select = ({ name, label, options, setValue, onValueChange }) => {
  const [value, setSelectedValue] = useState('');

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select name={name} value={value} onChange={(event) => {
          setSelectedValue(event.target.value);
          setValue(event.target.value);
          onValueChange(event);
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;