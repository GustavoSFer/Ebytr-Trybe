import React from 'react';

function ButtonGeneric({ click, children }) {
  return (
    <button type='button' onClick={ click } className="btn btn-outline-secondary m-1" >
      { children }
    </button>
  );
};

export default ButtonGeneric;
