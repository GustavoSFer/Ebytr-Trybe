import React from 'react';
import ButtonGeneric from '../Components/ButtonGeneric';

function Task() {
  const hadleClick = () => {
    console.log('foi clicado');
  }

  return (
    <main>
      <section>
        <ButtonGeneric click={ hadleClick }>Cadastrar tarefa</ButtonGeneric>
      </section>
      <section>
       
      </section>
    </main>
  );
};

export default Task;
