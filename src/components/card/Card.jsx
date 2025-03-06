import React, { useState } from "react";
import "./Card.sass";
import data from "../../../data.json";
import national1 from "../../assets/national1.jpg";
import national2 from "../../assets/national2.jpg";
import national3 from "../../assets/national3.jpg";
import national4 from "../../assets/national4.jpg";
import national5 from "../../assets/national5.jpg";
import national6 from '../../assets/national6.jpg'


const images = {
  wood1,
  wood2,
  wood3,
  wood4,
  wood5,
  national1,
  national2,
  national3,
  national4,
  national5,
  national6,
};

function Card({ euro, setEuro, panier, setPanier, panierCount, setPanierCount }) {
  
  const ajouterAuPanier = (bougie, tailleChoisie) => {
    const prix = tailleChoisie === "Petite" ? bougie.prix1 : bougie.prix2;

    if (bougie.stock > 0 && euro >= prix) {
      setPanier((prevPanier) => {
        const articleExistant = prevPanier.find(
          (item) => item.id === bougie.id && item.taille === tailleChoisie
        );
        return articleExistant
          ? prevPanier.map((item) =>
              item.id === bougie.id && item.taille === tailleChoisie
                ? { ...item, quantite: item.quantite + 1 }
                : item
            )
          : [...prevPanier, { id: bougie.id, nom: bougie.nom, taille: tailleChoisie, quantite: 1, prix }];
      });

      bougie.stock -= 1;
      setEuro((prevEuro) => Math.round((prevEuro - prix) * 100) / 100);
      setPanierCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div className="liste-produits flex flex-wrap justify-center gap-15 pt-15">
      {data.map((bougie, index) => {
        const [tailleChoisie, setTailleChoisie] = useState("Petite");
        return (
          <div className="carte w-55 bg-white rounded-lg" key={index}>
            <img src={images[bougie.image]} alt={bougie.nom} className="rounded-tl-lg rounded-tr-lg" />
            <div className="p-2 flex flex-col gap-1">
              <div className="p-2 bg-white">
                <h3 className="uppercase font-semibold title">{bougie.nom}</h3>
                <p className="desc">{bougie.description}</p>
                <div className="flex gap-5 items-center">
                  <label className="flex items-center gap-1">
                    <input
                      type="radio"
                      name={`taille-${index}`}
                      value="Petite"
                      checked={tailleChoisie === "Petite"}
                      onChange={() => setTailleChoisie("Petite")}
                    />
                    Petite
                  </label>
                  <label className="flex items-center gap-1">
                    <input
                      type="radio"
                      name={`taille-${index}`}
                      value="Grande"
                      checked={tailleChoisie === "Grande"}
                      onChange={() => setTailleChoisie("Grande")}
                    />
                    Grande
                  </label>
                </div>
                <p>Prix : {tailleChoisie === "Petite" ? bougie.prix1 : bougie.prix2}€</p>
                <div>
                  {bougie.stock === 0 ? (
                    <p className="rouge text-red-600">Stock indisponible</p>
                  ) : (
                    <p className={bougie.stock < 4 ? "text-orange-600" : ""}>
                      Stock : <span>{bougie.stock}</span>
                    </p>
                  )}
                </div>

                <div className="flex gap-10 mt-1">
                  <button
                    disabled={bougie.stock === 0}
                    onClick={() => ajouterAuPanier(bougie, tailleChoisie)}
                    className="btn border-1 px-[9px] py-[2px] rounded-full cursor-pointer"
                  >
                    Ajouter
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
