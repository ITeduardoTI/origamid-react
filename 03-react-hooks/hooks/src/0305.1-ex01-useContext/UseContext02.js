import React from "react";
import Produto from "./Produto";
import Limpar from "./Limpar";
import { GlobalStorage } from "./GlobalContext";

const UseContext02 = () => {
  return (
    <GlobalStorage>
      <Produto />
      <Limpar />
    </GlobalStorage>
  );
}

export default UseContext02;