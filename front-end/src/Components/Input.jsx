import React from 'react';

function Input({ name, value, handleBlur = () => {} }) {  
  return (
    <div className="input-group-text">
      <input
        type="text"
        className="form-control"
        name={ name }
        value={ value }
        onBlur={ handleBlur }
      />
    </div>
  );
}

export default Input;
