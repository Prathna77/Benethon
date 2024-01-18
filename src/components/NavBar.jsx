import { Link } from "react-router-dom";
import "./NavBar.css";


function NavBar() {
  return (
    <div className="container_Navbar">
      <img src="src\assets\LIA (3).png" width="140px" height="128px" />
      <ul className="nav_Ul">
        <Link to ="/">
          <p className="nav_Hom"> Homme</p>
        </Link>
        <Link to ="/woman">
          <p className="nav_Fem">Femme</p>
        </Link>
      </ul>
      <button className="buttonNav">LOGIN</button>
    </div>
  );
}

export default NavBar;
