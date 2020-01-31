import React, { useState } from 'react';
import { Input } from './Input';

export const InputDisplayer = () => {
  const [inputState, setInputState] = useState('10');

  const handleInputChange = (newInputValue) => {
    setInputState(newInputValue);
  }
  
  return (
    <div>
      <Input currentInput={inputState} onInputChange={handleInputChange} />
      <Input currentInput={inputState} onInputChange={handleInputChange} />
    </div>
  );
};