import React from 'react';

function ButtonGeneric({ click, children, enable }) {
  return (
    <button type='button' onClick={ click } disabled={ enable } >
      { children }
    </button>
  );
};

export default ButtonGeneric;
