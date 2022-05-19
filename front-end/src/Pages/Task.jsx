import React, { useEffect, useState } from 'react';
import ButtonGeneric from '../Components/ButtonGeneric';
import Input from '../Components/Input';
import Table from '../Components/Table';
import { TaskRequest } from '../Services/request';

function Task() {
  const [taskDb, setTaskDb] = useState([]);
  const [task, setTask] = useState('');

  const hadleClick = () => {
    console.log('foi clicado');
  };

  const change = ({ target }) => {
    setTask(target.value);
  };

  const dataRequest = async () => {
    const data = await TaskRequest('/');
    setTaskDb(data);
  };

  useEffect(() => {
    dataRequest();
  }, []);

  return (
    <main>
      <section>
        <Input name="task" value={ task } handleChange={ change } />
        <ButtonGeneric click={ hadleClick }>Cadastrar tarefa</ButtonGeneric>
      </section>
      <section>
       <table>
         <tr>
           <td>Tarefas</td>
           <td>Status</td>
           <td>Data de cadastro</td>
           <td>Excluir</td>
         </tr>
         { console.log(taskDb) }
         {
           taskDb.map((item) => <Table key={item.id} item={item} />)
         }
       </table>
      </section>
    </main>
  );
};

export default Task;
