import "./BoutondeGauche.css";

function BoutondeGauche() {
  return (
    <div className="container">
      <nav>
        <ul className="mcd-menu">
        <li>
            <a href=""  className="active">
              <i className="fa fa-gift"></i>
              <strong>Forme du visage</strong>
              <small>sélectionner votre forme de visage</small>
            </a>
          </li>
          <li>
            <a href="" className="active">
              <i className="fa fa-edit"></i>
              <strong>Type de Cheveux</strong>
              <small>sélectionner votre type de cheveux</small>
            </a>
          </li>
          <li>
            <a href=""  className="active">
              <i className="fa fa-globe"></i>
              <strong>Teint de peau</strong>
              <small>Affiner votre teint de peau</small>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BoutondeGauche;
