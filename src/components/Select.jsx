import React, { useState } from 'react';

const Select = ({ name, options }) => {
  const [value, setValue] = useState('');

  return (
    <div>
      <label htmlFor={name}></label>
      <select name={name} value={value} onChange={(event) => setValue(event.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;