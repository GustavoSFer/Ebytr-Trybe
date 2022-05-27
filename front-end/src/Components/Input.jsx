import React from 'react';

function Input({ name, value, handleBlur = () => {} }) {  
  return (
    <div className="me-4">
      <input
        type="text"
        className="form-control m-1"
        name={ name }
        value={ value }
        onBlur={ handleBlur }
      />
    </div>
  );
}

export default Input;
