import React from "react";
import Items from "./Items";

const Produtos = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(event) {
    setCarregando(true);

    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );
    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }

  return (
    <div >
      <button style={{ margin: '.5rem' }} onClick={handleClick}>Tablet</button>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>Smartphone</button>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>Notebook</button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Items dados={dados} />}
    </div>
  );
}

export default Produtos;