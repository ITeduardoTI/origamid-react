import React from "react";

const Checkbox1 = () => {
  const [termos, setTermos] = React.useState('');

  return(
    <form>
      {termos && <p>Aceitou os termos.</p>}
      <label>
      <input 
        type="checkbox"
        value="Termos"
        checked={termos}
        onChange={({ target }) => setTermos(target.checked)}
      />
      Aceito os termos.
      </label>
    </form>
  );
}

export default Checkbox1;