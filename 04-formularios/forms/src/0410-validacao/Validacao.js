import React from "react";
import InputComponentValidacao from "./InputComponentValidacao";
import useForm from "./Hooks/useForm";

const Validacao = () => {
  const cep = useForm('cep');
  const email = useForm('email');
  const nome = useForm();
  const sobrenome = useForm(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate() && email.validate() && nome.validate()) {
      console.log('Enviar');
    } else {
      console.log('Não enviar');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputComponentValidacao
        label="Nome"
        id="nome"
        type="text"
        {...nome}
      />
      <InputComponentValidacao
        label="Sobrenome"
        id="sobrenome"
        type="text"
        {...sobrenome}
      />
      <InputComponentValidacao
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />
      <InputComponentValidacao
        label="Email"
        id="email"
        type="email"
        {...email}
      />
      <button>Enviar</button>
    </form>
  );
};

export default Validacao;