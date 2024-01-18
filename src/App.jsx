
import NavBar from "./components/NavBar";
import "./App.css";
import Style from './components/Style'
import Mannequin from "./Mannequin";
import "./App.css";
import NavBar from "./components/NavBar";
import BoutondeGauche from './Composent/BoutondeGauche'
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <NavBar />
      <Style />
      <Mannequin />
      < BoutondeGauche />
      < Outlet />
    </>
  );
}

export default App;
