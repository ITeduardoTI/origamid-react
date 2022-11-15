const Arrays = () => {
  // Exemplo 01:
  // const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight'];

  // return (
  //   <ul>
  //     {filmes.map((filme) => {
  //       return (
  //         <li key={filme}>{filme}</li>
  //       )
  //     })}
  //   </ul>
  // );

  // Exemplo 02:
  const livros = [
    { nome: 'A Game of Thrones', ano: 1996},
    { nome: 'A Clash of Kings', ano: 1998},
    { nome: 'A Storm of  Swords', ano: 2000},
  ];

  return (
    // Utilizando destructuring no objeto para evitar redundancia
    <ul>
      {livros.filter(({ano}) => ano >= 1998).map(({ nome, ano }) => {
        return <li key={nome}>{nome} {ano}</li>
      })}
    </ul>
  );
}

export default Arrays;