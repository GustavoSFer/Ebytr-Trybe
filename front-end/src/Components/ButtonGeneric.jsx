import React from 'react';

function ButtonGeneric({ click, children }) {
  return (
    <button type='button' onClick={ click } className="btn btn-warning ms-3" >
      { children }
    </button>
  );
};

export default ButtonGeneric;
