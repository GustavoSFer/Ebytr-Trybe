import React, { useEffect, useState } from 'react';
import Status from './Status';
import { upDateTaskRequest, deleteTaskRequest } from '../Services/request';
import excluir from '../icons/excluir.png';
import editar from '../icons/editar.png';
import ButtonGeneric from './ButtonGeneric';

function Table({ item }) {
  const [toEdit, setToEdit] = useState(false);

  const handleChange = async ({ target }) => {
    await upDateTaskRequest('/', { id: item._id, status: target.value });
    setToEdit(false);
  };

  const hadleClick = async () => {
    await deleteTaskRequest('/', { id: item._id });
  };

  const edit = () => {
    setToEdit(true);
  };

  return (
    <tr>
      <td>{ item.task }</td>
      <td>{ (toEdit) ? <Status change={ handleChange } /> : item.status}</td>
      <td>{ item.date }</td>
      <td>
        <ButtonGeneric click={ hadleClick }>
          <img src={ excluir } alt="Excluir tarefa" />
        </ButtonGeneric>
        <ButtonGeneric click={ edit }>
        <img src={ editar } alt="Editar tarefa" />
        </ButtonGeneric>
      </td>
    </tr>
  );
}

export default Table;
