import Mannequin from "./Mannequin";
import NavBar from "../src/components/NavBar";
import { useState } from "react";
import Modal from "react-responsive-modal"
import 'react-responsive-modal/styles.css';
import "./App.css";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
    <NavBar />
    <Modal
  open={modalIsOpen}
  onRequestClose={() => setModalIsOpen(false)}
  contentLabel="Example Modal"
>
  <h2>You clicked on!</h2>
  <button onClick={() => setModalIsOpen(false)}>Close</button>
</Modal>
      <Mannequin setModalIsOpen={setModalIsOpen} />
    </>
  );
}

export default App;
