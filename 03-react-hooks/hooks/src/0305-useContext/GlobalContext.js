import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [contar, setContar] = React.useState(0);

  function adicionaUm() {
    setContar(contar => contar + 1);
  }

  function adicionaDois() {
    setContar(contar => contar + 2);
  }

  return (
    <GlobalContext.Provider value={{ contar: contar, setContar, adicionaUm, adicionaDois }}>
        { children }
    </GlobalContext.Provider>
  ); 
}