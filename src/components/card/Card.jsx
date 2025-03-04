import React, { useState } from "react";
import "./Card.sass";
import data from "..//..//..//data.json";
import wood1 from "../../assets/wood1.jpg";
import wood2 from "../../assets/wood2.jpg";
import wood3 from "../../assets/wood3.jpg";
import wood4 from "../../assets/wood4.jpg";
import wood5 from "../../assets/wood5.jpg";
import national1 from "../../assets/national1.jpg";
import national2 from "../../assets/national2.jpg";
import national3 from "../../assets/national3.jpg";
import national4 from "../../assets/national4.jpg";
import national5 from "../../assets/national5.jpg";

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
};

function Carte() {
  const [panier, setPanier] = useState([]); 

  const ajouterAuPanier = (bougie, tailleChoisie) => {
    if (bougie.stock > 0) {
      setPanier((panierPrecedent) => {
        const articleExistant = panierPrecedent.find(item => item.id === bougie.id && item.taille === tailleChoisie);
        return articleExistant
          ? panierPrecedent.map(item =>
              item.id === bougie.id && item.taille === tailleChoisie
                ? { ...item, quantite: item.quantite + 1 }
                : item
            )
          : [...panierPrecedent, { id: bougie.id, taille: tailleChoisie, quantite: 1 }];
      });

      bougie.stock -= 1; 
    }
  };

  return (
    <div className="liste-produits">
      {data.map((bougie, index) => {
        const [tailleChoisie, setTailleChoisie] = useState("Petite");
        return (
          <div className="carte" key={index}>
            <img
              src={images[bougie.image]}
              alt={bougie.nom}
              className="w-60 h-60"
            />
            <h3>{bougie.nom}</h3>
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
              Prix : {tailleChoisie === "Petite" ? bougie.prix1 : bougie.prix2}€
            </p>
            <span>Stock : {bougie.stock}</span>
            <button
              disabled={bougie.stock === 0}
              onClick={() => ajouterAuPanier(bougie, tailleChoisie)}
            >
              Ajouter
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Carte;