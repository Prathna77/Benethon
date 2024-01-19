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
  const [scale, setScale] = useState(1);
  return (
    <div>
        <NavBar />
        <div className="placement">
        <BoutondeGauche />
      {/* <Modal
        open={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Example Modal"
      >
        <h2>You clicked on!</h2>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal> */}

  
      <Outlet context={[setModalIsOpen,setScale]} />
        <Style />
      </div>
    </div>
  );
}

export default App;
