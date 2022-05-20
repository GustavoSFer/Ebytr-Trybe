import React, { useEffect, useState } from 'react';
import Status from './Status';
import { upDateTaskRequest, deleteTaskRequest } from '../Services/request';
import excluir from '../icons/excluir.png';
import ButtonGeneric from './ButtonGeneric';

function Table({ item }) {
  const [status, setStatus] = useState('');

  const handleChange = async ({ target }) => {
    console.log(target.value)
    console.log('>>>', item._id)
    setStatus(target.value);
    await upDateTaskRequest('/', { id: item._id, status: target.value });
    console.log('nfsdjfosid',item.status)
  };

  const hadleClick = async () => {
    await deleteTaskRequest('/', { id: item._id });
  };

  return (
    <tr>
      <td>{ item.task }</td>
      <td><Status value={item.status} change={ handleChange } /></td>
      <td>{ item.date }</td>
      <td>
        <ButtonGeneric click={ hadleClick }>
          <img src={ excluir } alt="" />
        </ButtonGeneric>
      </td>
    </tr>
  );
}

export default Table;
