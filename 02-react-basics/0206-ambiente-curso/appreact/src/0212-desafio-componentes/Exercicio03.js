import Header from "./Components/Header";
import Home from "./Components/Home";
import Produtos from "./Components/Produtos";

const Exercicio03 = () => {
  const { pathname } = window.location;
  let Pagina;

  if(pathname === "/produtos") {
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }

  return (
    <section>
      <Header />
      <Pagina />
    </section>
  );
}

export default Exercicio03;