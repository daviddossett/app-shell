import React from 'react';

export const Input = (props) => {
  const currentValue = props.currentInput;

  const handleChange = (e) => {
    props.onInputChange(e.target.value);
  }

  return (
    <input value={currentValue} onChange={handleChange} />
  );
};