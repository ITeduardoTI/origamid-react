import React from 'react';

const UseState01 = () => {
  // // Forma de utilizar sem o destructuring
  // const ativoHook = React.useState(false);

  // // Pegando o primeiro valor do método useState:
  // const ativoValor = ativoHook[0];

  // // Pegando o segundo valor do método useState:
  // const atualizaValor = ativoHook[1];

  // // Forma de utilizar com o destructuring
  const [ativo, setAtivo] = React.useState(false);

  const [dados, setDados] = React.useState({ nome: 'Sauron', idade: '273923' });

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: 'Possui Faculdade!' });
  }

  return (
    <div>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
    </div>
  ); 
}

export default UseState01;