import { useRef, useState, useEffect } from "react";
import "./style.css";

import teintImage from "../assets/image_fond_de_teint.jpg";
import mascaraImage from "../assets/mascara.jpg";
import rougeImage from "../assets/levres.jpg";
import photo3 from "../assets/3.jpg";

import blonde from "../assets/blonde.jpg";
import chatain from "../assets/chatain.jpg";
import brune from "../assets/brune.jpg";
import rousse from "../assets/rousse.jpg";

function Style() {
  const modalRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const [selectedMenu, setSelectedMenu] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const savedMenuState = localStorage.getItem("menuState");
    if (savedMenuState) {
      const parsedState = JSON.parse(savedMenuState);
      setMenuOpen(parsedState.menuOpen);
      setSelectedMenu(parsedState.selectedMenu);
      setSelectedOption(parsedState.selectedOption);
    }
  }, []);

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
    {
      name: "Blonde",
      link: "blonde",
      href: "https://www.loreal-paris.fr/coloration/par-couleur/blonde/",
      img: blonde,
    },
    {
      name: "Châtain",
      link: "chatain",
      href: "https://www.loreal-paris.fr/coloration/par-couleur/chatain/",
      img: chatain,
    },
    {
      name: "Brune / Noire",
      link: "brune-noire",
      href: "https://www.loreal-paris.fr/coloration/par-couleur/brune-noire/",
      img: brune,
    },
    {
      name: "Rousse / Auburn",
      link: "rousse-auburn",
      href: "https://www.loreal-paris.fr/coloration/par-couleur/rousse-auburn/",
      img: rousse,
    },
    // {
    //   name: "Eclaircissant",
    //   link: "eclaircissant",
    //   href: "https://www.loreal-paris.fr/coloration/par-couleur/eclaircissant/",
    // },
    // {
    //   name: "Tie & dye et balayage",
    //   link: "tie-dye-et-balayage",
    //   href: "https://www.loreal-paris.fr/coloration/par-couleur/tie-dye-et-balayage/",
    // },
    // {
    //   name: "Retouche racines",
    //   link: "retouche-racines",
    //   href: "https://www.loreal-paris.fr/coloration/par-couleur/retouche-racines/",
    // },
  ];

  const makeupCategories = [
    { category: "Fond de Teint", link: "teint", image: teintImage },
    { category: "Yeux", link: "yeux", image: mascaraImage },
    { category: "Lèvres", link: "levres", image: rougeImage },
    { category: "Ongles", link: "ongles", image: photo3 },
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

      {menuOpen && (
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
                  <button
                    className="rachidbutton"
                    onClick={() => openSubMenu("Coloration")}
                  >
                    Coloration
                  </button>
                  <button
                    className="rachidbutton"
                    onClick={() => openSubMenu("Maquillage")}
                  >
                    Maquillage
                  </button>
                  <button
                    className="rachidbutton"
                    onClick={() => openSubMenu("Corps")}
                  >
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
                        href={`https://www.loreal-paris.fr/coloration/par-couleur/${hairColor.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {hairColor.name}
                      </a>

                      {hairColor.img && (
                        <img
                          src={hairColor.img}
                          alt={hairColor.name}
                          // style={{ width: '50px', height: '50px', marginLeft: '10px' }}
                          className="rounded-image"
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}

              {selectedMenu === "Maquillage" && (
                <div className="makeup-categories">
                  {makeupCategories.map((category, index) => (
                    // <div key={index} className="makeup-category">
                    <div
                      key={index}
                      className="makeup-category"
                      style={{ backgroundImage: `url(${category.image})` }}
                    >
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
      )}
    </>
  );
}

export default Style;
