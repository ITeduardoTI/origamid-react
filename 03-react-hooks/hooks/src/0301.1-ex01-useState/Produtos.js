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
    <div>
      <button onClick={handleClick}>Tablet</button>
      <button onClick={handleClick}>Smartphone</button>
      <button onClick={handleClick}>Notebook</button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Items dados={dados} />}
    </div>
  );
}

export default Produtos;