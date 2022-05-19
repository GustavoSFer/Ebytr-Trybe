import React from 'react';

function Input({ name, task, handleChange }) {  
  return (
    <input type="text" name={ name } value={ task } onChange={ handleChange } />
  );
}

export default Input;
