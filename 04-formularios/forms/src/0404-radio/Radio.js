import React from "react";

const Radio = () => {
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');

  function handleChange({ target }) {
    setProduto(target.value);
  }

  return(
    <form>
      <h2>Cores</h2>
      <label>
        <input 
          type="radio"
          onChange={({ target }) => setCor(target.value)}
          checked={cor === 'azul'}
          // name="cor"
          value="azul"
        />
        Azul
      </label>
      <label>
        <input 
          type="radio"
          onChange={({ target }) => setCor(target.value)}
          checked={cor === 'vermelho'}
          // name="cor"
          value="vermelho"
        />
        Vermelho
      </label>

      <h2>Produtos</h2>
      <label>
        <input 
          type="radio"
          onChange={handleChange}
          checked={produto === 'smartphone'}
          // name="produto"
          value="smartphone"
        />
        Smartphone
      </label>
      <label>
        <input 
          type="radio"
          onChange={handleChange}
          checked={produto === 'notebook'}
          // name="produto"
          value="notebook"
        />
        Notebook
      </label>
    </form>
  );
}

export default Radio;