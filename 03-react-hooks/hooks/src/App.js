import React from "react";
// import UseState01 from "./0301-useState01/UseState01";
import ButtonModal from "./0301-useState01/Modal/ButtonModal";
import Modal from "./0301-useState01/Modal/Modal";

function App() {
  const [modal, setModal] = React.useState(false);

  return (
    <div className="App">
      {/* <UseState01 /> */}
      <div>{modal ? 'Modal Aberto' : 'Modal Fechado'}</div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>
  );
}

export default App;
