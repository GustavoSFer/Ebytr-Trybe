import React, { useEffect, useState } from 'react';
import ButtonGeneric from '../Components/ButtonGeneric';
import Filtro from '../Components/Filtro';
import Input from '../Components/Input';
import Task from '../Components/Task';
import { TaskRequest, AddTaskRequest, deleteTaskRequest } from '../Services/request';

function TableTask() {
  const [taskDb, setTaskDb] = useState([]);
  const [task, setTask] = useState('');
  const [msgError, setMsgError] = useState();

  const hadleClick = async() => {
    if (task === '') return setMsgError(<h3>Por favor, escrever uma tarefa</h3>);
    addRequest();
    setTask('');
    setMsgError('');
  };

  const handleBlur = ({ target }) => {
    setTask(target.value);
    console.log(target)
    target.value = '';
  };

  const addRequest = async () => {
    await AddTaskRequest('/', { task, status: 'Pendente' });
    filtrar();
  };

  const dataRequest = async () => {
    const data = await TaskRequest('/');
    setTaskDb(data);
  };

  const hadleClickDelete = async ({ target }) => {
    await deleteTaskRequest('/', target.id);
    dataRequest();
  };

  const filtrar = ({ target }) => {
    const filtro = [...taskDb].sort((a, b) => {
      if (a[target.value] < b[target.value]) {
        return -1;
      }
      if (a[target.value] > b[target.value]) {
        return 1;
      }
      return 0;
    })
    setTaskDb(filtro);
  };

  useEffect(() => {
    dataRequest();
  }, [task]);

  return (
      <main className="container-sm">
        <section className="">
          <label className="d-flex justify-content-evenly m-3">
            <Input name="task" handleBlur={ handleBlur } />
            <Filtro change={ filtrar } />
            <ButtonGeneric click={ hadleClick }>Cadastrar tarefa</ButtonGeneric>
          </label>
          { msgError ? msgError : '' }
        </section>
        <section>
        <table className="table table-dark border border-info">
          <thead>
            <tr className="table-active">
              <td>Tarefas</td>
              <td>Status</td>
              <td>Data de cadastro</td>
              <td>Excluir / Editar</td>
            </tr>
          </thead>
          <tbody>
            {
              taskDb.map((item) => <Task key={item._id} item={item} click={hadleClickDelete} />)
            }
          </tbody>
        </table>
        </section>
      </main>
  );
};

export default TableTask;
