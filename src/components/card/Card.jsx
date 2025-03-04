import React, { useState } from "react";
import "./Card.sass";
import data from "..//..//..//data.json";
import national1 from "../../assets/national1.jpg";
import national2 from "../../assets/national2.jpg";
import national3 from "../../assets/national3.jpg";
import national4 from "../../assets/national4.jpg";
import national5 from "../../assets/national5.jpg";
import wood1 from "../../assets/wood1.jpg";
import wood2 from "../../assets/wood2.jpg";
import wood3 from "../../assets/wood3.jpg";
import wood4 from "../../assets/wood4.jpg";
import wood5 from "../../assets/wood5.jpg";

const images = {
  national1,
  national2,
  national3,
  national4,
  national5,
  wood1,
  wood2,
  wood3,
  wood4,
  wood5,
};

function Card() {
  const [panier, setPanier] = useState([]);
//   const [euro, setEuro]= (150);

  const ajouterAuPanier = (bougie, tailleChoisie) => {
    if (bougie.stock > 0) {
      setPanier((panierPrecedent) => {
        const articleExistant = panierPrecedent.find(
          (item) => item.id === bougie.id && item.taille === tailleChoisie
        );
        return articleExistant
          ? panierPrecedent.map((item) =>
              item.id === bougie.id && item.taille === tailleChoisie
                ? { ...item, quantite: item.quantite + 1 }
                : item
            )
          : [
              ...panierPrecedent,
              { id: bougie.id, taille: tailleChoisie, quantite: 1 },
            ];
      });

      bougie.stock -= 1;
    }
  };

  const supprimerDuPanier = (bougie, tailleChoisie) => {
    setPanier((panierPrecedent) => {
      const articleExistant = panierPrecedent.find(
        (item) => item.id === bougie.id && item.taille === tailleChoisie
      );
      if (articleExistant) {
        if (articleExistant.quantite > 1) {
          return panierPrecedent.map((item) =>
            item.id === bougie.id && item.taille === tailleChoisie
              ? { ...item, quantite: item.quantite - 1 }
              : item
          );
        } else {
          return panierPrecedent.filter(
            (item) => item.id !== bougie.id || item.taille !== tailleChoisie
          );
        }
      }
      return panierPrecedent;
    });

    bougie.stock += 1;
  };

  return (
    <div className="liste-produits flex flex-wrap justify-center gap-15 pt-15">
      {data.map((bougie, index) => {
        const [tailleChoisie, setTailleChoisie] = useState("Petite");
        return (
          <div className="carte w-55" key={index}>
            <img src={images[bougie.image]} alt={bougie.nom} className="" />
            <div className="p-2 bg-white">
              <h3 className="uppercase font-semibold title">{bougie.nom}</h3>
              <p>{bougie.description}</p>
              <div>
                <label>
                  <input
                    type="radio"
                    name={`taille-${index}`}
                    value="Petite"
                    checked={tailleChoisie === "Petite"}
                    onChange={() => setTailleChoisie("Petite")}
                  />
                  Petite
                </label>
                <label>
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
              <p>
                Prix :{" "}
                {tailleChoisie === "Petite" ? bougie.prix1 : bougie.prix2}€
              </p>
              <div>
                {bougie.stock === 0 ? (
                  <p className="rouge text-red-600">Stock indisponible</p>
                ) : (
                  <p
                    className={
                      bougie.stock < 5 ? "text-orange-600" : ""
                    }
                  >
                    Stock : <span>{bougie.stock}</span>
                  </p>
                )}
              </div>

              <div>
                <button
                  disabled={bougie.stock === 0}
                  onClick={() => ajouterAuPanier(bougie, tailleChoisie)}
                >
                  Ajouter
                </button>
                <button
                  disabled={
                    !panier.find(
                      (item) =>
                        item.id === bougie.id && item.taille === tailleChoisie
                    )
                  }
                  onClick={() => supprimerDuPanier(bougie, tailleChoisie)}
                >
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;


