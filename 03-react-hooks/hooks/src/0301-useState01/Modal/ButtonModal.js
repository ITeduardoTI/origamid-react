import React from 'react';

// Passando uma função de callback para atualizar o estado.
const ButtonModal = ({ setModal }) => {
  function handleClick() {
    setModal((ativo) => !ativo)
  }

  return <button onClick={handleClick}>Abrir</button>
}

export default ButtonModal;