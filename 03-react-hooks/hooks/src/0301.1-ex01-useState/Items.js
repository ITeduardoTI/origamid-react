import React from "react";

const Items = ({ dados }) => {
  console.log(dados)
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>{dados.preco}</p>
      <img src={ dados.fotos[0].src } alt={ dados.nome } />
    </div>
  );
}

export default Items;