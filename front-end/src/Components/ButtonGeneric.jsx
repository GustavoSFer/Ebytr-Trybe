import React from 'react';

function ButtonGeneric({ click, children }) {
  return (
    <button type='button' onClick={ click }  >
      { children }
    </button>
  );
};

export default ButtonGeneric;
