import React, { useState } from 'react';
import Status from './Status';
import { upDateTaskRequest } from '../Services/request';
import excluir from '../icons/excluir.png';
import editar from '../icons/editar.png';
import ButtonGeneric from './ButtonGeneric';

function Task({ item, click }) {
  const [toEdit, setToEdit] = useState(false);
  const [status, setStatus] = useState(item.status);
  const [inputTask, setInputTask] = useState(item.task);
  // const [deletar, setDeletar] = useState(false);
  

  const handleChange = async ({ target }) => {
    if (target.name === 'status') {
      await upDateTaskRequest('/', { id: item._id, status: target.value });
      setStatus(target.value);
    } else if (target.name === 'task') {
      setInputTask(target.value);
      await upDateTaskRequest('/', { task: target.value, status: item.status });
      
    }
    setToEdit(false);
  };

  const edit = () => {
    setToEdit(true);
  };

  // const del = () => {
  //   setDeletar(true);
  //   hadleClickDelete();
  // }

  return (
    <tr>
      <td>{ inputTask }</td>
      {/* <td>{ (toEdit) ? <Input name="task" handleBlur={ (handleChange) } /> : inputTask }</td> */}
      <td>{ (toEdit) ? <Status change={ handleChange } /> : status }</td>
      <td>{ item.date }</td>
      <td>
        <ButtonGeneric click={ click }>
          <img src={ excluir } alt="Excluir tarefa" id={item._id} />
        </ButtonGeneric>
        <ButtonGeneric click={ edit }>
          <img src={ editar } alt="Editar tarefa" />
        </ButtonGeneric>
      </td>
    </tr>
  );
}

export default Task;
