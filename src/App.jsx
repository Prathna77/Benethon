import { useState } from "react";
import { Outlet } from "react-router";
import { Modal } from "react-responsive-modal";
import NavBar from "./components/NavBar";
import Style from "./components/Style";
import BoutondeGauche from "./Composant/BoutondeGauche";
import "./App.css";
import "react-responsive-modal/styles.css";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <Modal
        open={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Example Modal"
      >
        <h2>You clicked on!</h2>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>

      <NavBar />
      <Style />
  
      <BoutondeGauche />
      <Outlet context={[setModalIsOpen]} />
    </>
  );
}

export default App;
