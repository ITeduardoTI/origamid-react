import React from "react";

const UseRef02 = () => {
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeoutRef = React.useRef();

  function handleClick() {
    setCarrinho(carrinho + 1);
    setNotificacao('Item adicionado ao carrinho!');

    console.log(timeoutRef.current);

    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 2000);

    console.log(timeoutRef.current);
  }

  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar no Carrinho {carrinho}</button>
    </div>
  );
}

export default UseRef02;