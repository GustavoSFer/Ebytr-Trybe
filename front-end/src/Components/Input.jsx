import React from 'react';

function Input({ name, value, handleChange }) {  
  return (
    <input type="text" name={ name } value={ value } onChange={ handleChange } />
  );
}

export default Input;
