import React from 'react';

function Filtro({ change }) {
  return (
    <select name="status" onChange={ change } className=" form-select-sm m-1">
      <option value="Selecione" >Selecionar Filtro</option>
      <option value="task" >Tarefas</option>
      <option value="status" >Status</option>
      <option value="date" >Data</option>
    </select>
  );
};

export default Filtro;
