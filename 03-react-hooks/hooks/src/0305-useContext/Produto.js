import React from "react";
import { GlobalContext } from "./GlobalContext";

const Produto = () => {
  const global = React.useContext(GlobalContext);
  console.log(global);

  return (
    <div>
      <div>Produto: {global.contar}</div>
      <button onClick={global.adicionaDois}>Adicionar</button>
    </div>
    
  );
  
}

export default Produto;