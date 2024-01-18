import { useRef, useState } from "react";
import "./style.css";

import teintImage from "../assets/image_fond_de_teint.jpg";

function Style() {
  const modalRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const openMenu = () => {
    setMenuOpen(true);
    setSelectedMenu(null);
    setSelectedOption(null);
    if (modalRef.current) {
      modalRef.current.style.display = "flex";
    }
  };

  const openSubMenu = (menu) => {
    setMenuOpen(true);
    setSelectedMenu(menu);
    setSelectedOption(null);
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.style.display = "none";
      setMenuOpen(false);
      setSelectedMenu(null);
      setSelectedOption(null);
    }
  };

  const handleWindowClick = (event) => {
    if (modalRef.current && event.target === modalRef.current) {
      closeModal();
    }
  };

  const hairColors = [
    { name: "Blonde", color: "#ffd700" },
    { name: "Châtain", color: "#33ff57" },
    { name: "Brune / Noire", color: "#5733ff" },
    { name: "Rousse / Auburn", color: "#ff5733" },
    { name: "Eclaircissant", color: "#33ff57" },
    { name: "Tie & dye et balayage", color: "#5733ff" },
    { name: "Retouche racines", color: "#ff5733" },
    { name: "Flashy", color: "#33ff57" },
  ];

  const makeupCategories = [
    { category: "Fond de Teint", link: "teint", image: teintImage },
    { category: "Yeux", link: "yeux" },
    { category: "Lèvres", link: "levres" },
    { category: "Ongles", link: "ongles" },
    { category: "Maquillage À l'affiche", link: "a-l-affiche" },
    { category: "Accessoires", link: "accessoires" },
  ];

  const bodyCategories = [
    {
      gamme: "Revitalift Filler",
      link: "revitalift-filler",
      href: "https://www.loreal-paris.fr/soin/soin-par-gamme/revitalift-filler---acide-hyaluronique-/",
    },
    {
      gamme: "Revitalift Laser",
      link: "revitalift-laser",
      href: "https://www.loreal-paris.fr/soin/soin-par-gamme/revitalift-laser/",
    },
    {
      gamme: "Revitalift Clinical",
      link: "revitalift-clinical",
      href: "https://www.loreal-paris.fr/soin/soin-par-gamme/clinical-vitamine-c/",
    },
    {
      gamme: "Age Perfect Rennaissance Cellulaire",
      link: "age-perfect-rennaissance-cellulaire",
      href: "https://www.loreal-paris.fr/soin/soin-par-gamme/age-perfect-renaissance-cellulaire/",
    },
    {
      gamme: "Age Perfect Golden Age",
      link: "age-perfect-golden-age",
      href: "https://www.loreal-paris.fr/soin/soin-par-gamme/age-perfect-golden-age/",
    },
  ];

  return (
    <>
      <button className="buttonmenu" onClick={openMenu}>
        MENU
      </button>

      <div
        id="myModal"
        className={`modal ${menuOpen ? "open" : ""}`}
        ref={modalRef}
        onClick={handleWindowClick}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h2>{selectedMenu || selectedOption}</h2>
            <span onClick={closeModal}>&times;</span>
          </div>
          <div className="modal-body">
            {selectedMenu === null && (
              <div className="menu-options">
                <button onClick={() => openSubMenu("Coloration")}>
                  Coloration
                </button>
                <button onClick={() => openSubMenu("Maquillage")}>
                  Maquillage
                </button>
                <button onClick={() => openSubMenu("Corps")}>
                  Soin du visage
                </button>
              </div>
            )}
            {selectedMenu === "Coloration" && (
              <div className="hair-color-links">
                {hairColors.map((hairColor, index) => (
                  <div key={index} className="hair-color-link">
                    <div
                      className="hair-color-option"
                      style={{ backgroundColor: hairColor.color }}
                    ></div>
                    <a
                      href={`https://www.loreal-paris.fr/coloration/par-couleur/${hairColor.name.toLowerCase()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {hairColor.name}
                    </a>
                  </div>
                ))}
              </div>
            )}

            {selectedMenu === "Maquillage" && (
              <div className="makeup-categories">
                {makeupCategories.map((category, index) => (
                  <div key={index} className="makeup-category">
                    <img src={category.image} />

                    <a
                      href={`https://www.loreal-paris.fr/maquillage/${category.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {category.category}
                    </a>
                  </div>
                ))}
              </div>
            )}

            {selectedMenu === "Corps" && (
              <div className="bodyup-categories">
                {bodyCategories.map((gamme, index) => (
                  <div key={index} className="bodyup-category">
                    <a
                      href={gamme.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {gamme.gamme}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Style;
