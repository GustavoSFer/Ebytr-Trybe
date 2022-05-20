import React from 'react';

function Status({ change }) {
  return (
    <select name="status" onChange={ change }>
      <option value="Pendente" >Pendente</option>
      <option value="Em andamento" >Em andamento </option>
      <option value="Pronto" >Pronto</option>
    </select>
  );
};

export default Status;
