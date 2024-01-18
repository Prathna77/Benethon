import NavBar from "./components/NavBar";
import Style from "./components/Style";
import BoutondeGauche from "./Composent/BoutondeGauche";
import { Outlet } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Style />
      <BoutondeGauche />
      <Outlet />
    </>
  );
}

export default App;
