import React from "react";
import InputComponent from "./InputComponent";
import SelectComponent from "../0407-componente-select/SelectComponente";
import RadioComponent from "../0408-componente-radio/RadioComponent";
import CheckboxComponent from "../0409-componente-checkbox/CheckboxComponent";

const Input = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');
  const [fruta, setFruta] = React.useState([]);
  const [termos, setTermos] = React.useState([]);

  return (
    <form>
      <CheckboxComponent 
        options={['Uva', 'Laranja', 'Limão']}
        value={fruta}
        setValue={setFruta}
      />
      <CheckboxComponent 
        options={['Termos e Condições']}
        value={termos}
        setValue={setTermos}
      />
      <RadioComponent 
        options={['Azul', 'Vermelho']}
        value={cor}
        setValue={setCor}
      />
      <SelectComponent 
        options={['Smartphone', 'Tablet']}
        value={produto} 
        setValue={setProduto} 
      />
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