const Propriedades = () => {
  // Sem utilizar a desestruturação
  // const Titulo = (props) => {
  //   return <h1 style={{ color: props.cor }}>{props.texto}</h1>
  // }

  // Utilizando a desestruturação
  const Titulo = ({ cor, texto, children }) => {
    return <h1 style={{ color: cor }}>{ texto }, { children }</h1>
  }

  return (
    <div>
      <Titulo cor="red" texto="Meu titulo 1">
        Essa string é um children
        <p>Outro children</p>
      </Titulo>
      <Titulo cor="blue" texto="Meu titulo 2" />
    </div>
  );
}

export default Propriedades;