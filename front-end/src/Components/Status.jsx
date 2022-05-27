import React from 'react';

function Status({ change }) {
  return (
    <select name="status" onChange={ change } className=" form-select-sm mb-3">
      <option value="Selecione" > *Selecionar Opção</option>
      <option value="Pendente" >Pendente</option>
      <option value="Em andamento" >Em andamento </option>
      <option value="Pronto" >Pronto</option>
    </select>
  );
};

export default Status;
