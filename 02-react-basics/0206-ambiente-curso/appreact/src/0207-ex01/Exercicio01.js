// const luana = {
//   cliente: 'Luana',
//   idade: 27,
//   compras: [
//     { nome: 'Notebook', preco: 'R$ 2500' },
//     { nome: 'Geladeira', preco: 'R$ 3000' },
//     { nome: 'Smartphone', preco: 'R$ 1500' }
//   ],
//   ativa: true,
// };

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const estiloAtiva = {
  color: 'green',
}

const estiloInativa = {
  color: 'red',
}

const Exercicio01 = () => {
  const dados = mario;

  const totalGasto = dados.compras.map((item) => Number(item.preco.replace('R$ ', ''))).reduce((a, b) => a + b);

  return (
    <>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p >Situação: <span style={dados.ativa ? estiloAtiva : estiloInativa}>{dados.ativa ? 'Ativa' : 'Inativa'}</span></p>
      <p>Total gasto: {totalGasto}</p>
      {totalGasto > 10000 && <p>Você está gastando muito!</p>}
    </>
  );
}

export default Exercicio01;
