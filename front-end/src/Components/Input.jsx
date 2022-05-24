import React from 'react';

function Input({ name, value, handleBlur = () => {} }) {  
  return (
    <input type="text" name={ name } value={ value } onBlur={ handleBlur } />
  );
}

export default Input;
