import "./NavBar.css";

function NavBar() {
  return (
    <div className="container_Navbar">
      <img src="src\assets\LIA (3).png" width="140px" height="128px" />
      <ul className="nav_Ul">
        <li className="nav_Hom">Homme</li>
        <li className="nav_Fem">Femme</li>
      </ul>
      <button className="buttonNav">LOGIN</button>
    </div>
  );
}

export default NavBar;
