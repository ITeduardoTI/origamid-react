import React from "react";
import InputComponent from "./InputComponent";

const Input = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

  return (
    <form>
      <InputComponent 
        id="nome" 
        label="Nome" 
        value={nome} 
        setValue={setNome} 
        required
      />
      <InputComponent 
        id="email" 
        label="Email" 
        value={email} 
        setValue={setEmail} 
      />
      <button>Enviar</button>
    </form>
  );
}

export default Input;