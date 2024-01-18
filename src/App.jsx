import NavBar from "./components/NavBar";


import "./App.css";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <NavBar />
      < Outlet />

    </>
  );
}

export default App;
