import React from "react";

const UseEffect01 =  () => {
  const [contar, setContar] = React.useState(0);

  // React.useEffect(() => {
  //   console.log('Executou');
  // }, []);

  const titulo = 'Total ';

  React.useEffect(() => {
    document.title = titulo + contar;
  }, [contar]);

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>
}

export default UseEffect01;