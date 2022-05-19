import React, { useEffect, useState } from 'react';
import ButtonGeneric from '../Components/ButtonGeneric';
import Table from '../Components/Table';
import { TaskRequest } from '../Services/request';

function Task() {
  const [taskDb, setTaskDb] = useState([]);

  const hadleClick = () => {
    console.log('foi clicado');
  }

  const dataRequest = async () => {
    const data = await TaskRequest('/');
    setTaskDb(data);
  }

  useEffect(() => {
    dataRequest();
  }, [])

  return (
    <main>
      <section>
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
