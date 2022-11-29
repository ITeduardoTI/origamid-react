import React from "react";

import './App.css';

// import CssImport from "./0501-css-import/CssImport";
// import Produto from "./0502-modules/Produto";
// import Animacoes from "./0505-animacoes/Animacoes";
// import Slide from "./0505-animacoes-projeto/Slides";
// import DogSvg from "./0506-imagens/DogSvg";


function App() {
  // const [ativar, setAtivar] = React.useState(false);
  const slides = [
    {
      id: "slide1",
      text: "Slide 1",
    },
    {
      id: "slide2",
      text: "Slide 2",
    },
    {
      id: "slide3",
      text: "Slide 3",
    }
  ];

  return (
    <div className="App">
      {/* <CssImport /> */}
      {/* <Produto /> */}
      {/* <button onClick={() => setAtivar(!ativar)}>Ativar</button> */}
      {/* {ativar && <Animacoes />} */}
      {/* <Slide slides={slides} /> */}
      {/* <DogSvg color="#8ec" /> */}
    </div>
  );
}

export default App;
