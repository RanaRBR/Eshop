
import { useState } from "react";
import Header from "./components/header/Header";
import Boutons from "./components/boutons/Boutons";
import Card from "./components/card/Card";
import SideBar from "./components/sidebar/Sidebar";
import "./App.sass";

function App() {
  const [euro, setEuro] = useState(150);
  const [panier, setPanier] = useState([]);
  const [panierCount, setPanierCount] = useState(0);

  const supprimerUnProduit = (produit) => {
    setPanier((prevPanier) =>
      prevPanier
        .map((item) =>
          item.id === produit.id && item.taille === produit.taille
            ? { ...item, quantite: item.quantite - 1 }
            : item
        )
        .filter((item) => item.quantite > 0)
    );

    setEuro((prevEuro) => Math.round((prevEuro + produit.prix) * 100) / 100);
    setPanierCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const supprimerToutProduit = (produit) => {
    setPanier((prevPanier) =>
      prevPanier.filter(
        (item) => item.id !== produit.id || item.taille !== produit.taille
      )
    );

    setEuro((prevEuro) => Math.round((prevEuro + produit.prix * produit.quantite) * 100) / 100);
    setPanierCount((prev) => prev - produit.quantite);
  };

  return (
    <>
      <Header />
      <div className="flex">
        <div className="everything p-20">
          <Boutons key={panierCount} euro={euro} panierCount={panierCount} />
          <Card
            euro={euro}
            setEuro={setEuro}
            panier={panier}
            setPanier={setPanier}
            panierCount={panierCount}
            setPanierCount={setPanierCount}
          />
        </div>
        <SideBar
          panier={panier}
          supprimerUnProduit={supprimerUnProduit}
          supprimerToutProduit={supprimerToutProduit}
        />
      </div>
    </>
  );
}

export default App;
