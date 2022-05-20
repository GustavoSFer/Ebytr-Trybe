import React, { useEffect, useState } from 'react';
import ButtonGeneric from '../Components/ButtonGeneric';
import Input from '../Components/Input';
import Table from '../Components/Table';
import { TaskRequest, AddTaskRequest } from '../Services/request';

function Task() {
  const [taskDb, setTaskDb] = useState([]);
  const [task, setTask] = useState('');
  const [msgError, setMsgError] = useState();

  const hadleClick = async() => {
    if (task === '') return setMsgError(<h3>Por favor, escrever uma tarefa</h3>);
    addRequest();
    setTask('');
    setMsgError('');
  };

  const change = ({ target }) => {
    setTask(target.value);
  };

  const addRequest = async () => {
    await AddTaskRequest('/', { task, status: 'Pendente' });
  };

  const dataRequest = async () => {
    const data = await TaskRequest('/');
    setTaskDb(data);
  };

  useEffect(() => {
    dataRequest();
  }, [task]);

  return (
    <main>
      <section>
        <Input name="task" value={ task } handleChange={ change } />
        <ButtonGeneric click={ hadleClick }>Cadastrar tarefa</ButtonGeneric>
        { msgError ? msgError : '' }
      </section>
      <section>
       <table>
        <thead>
          <tr>
            <td>Tarefas</td>
            <td>Status</td>
            <td>Data de cadastro</td>
            <td>Excluir / Editar</td>
          </tr>
        </thead>
        <tbody>
          {
            taskDb.map((item) => <Table key={item._id} item={item} />)
          }
        </tbody>
       </table>
      </section>
    </main>
  );
};

export default Task;
