
import Style from './components/Style'
import Mannequin from "./Mannequin";
import "./App.css";
import NavBar from "./components/NavBar";
import BoutondeGauche from './Composent/BoutondeGauche'
function App() {
  return (
    
      <div>
      <NavBar />
<div className="placement">
      < BoutondeGauche />
      <Mannequin />
      <Style />
      </div>
    </div>
  );
}

export default App;
