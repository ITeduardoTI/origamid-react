import React from "react";
import Modal from "./Modal/Modal";
import ButtonModal from "./Modal/ButtonModal";

const UseState02 = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <div>
      <div>{modal ? 'Modal Aberto' : 'Modal Fechado'}</div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>
  );
}

export default UseState02;