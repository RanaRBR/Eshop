
import { useState } from "react";
import Header from "./components/header/Header";
import Boutons from "./components/boutons/Boutons";
import Card from "./components/card/Card";
import Sidebar from "./components/sidebar/Sidebar";
import data from '../data.json'
import "./App.sass";
import fond from './assets/fond.jpg'

function App() {
  const [euro, setEuro] = useState(150);
  const [panier, setPanier] = useState([]);
  const [panierCount, setPanierCount] = useState(0);
  const [produits, setProduits] = useState(data)
  const [showSidebar, setShowSidebar] = useState(false); // Estado para la Sidebar

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const supprimerUnProduit = (produit) => {
    console.log("Eliminando 1 unidad de:", produit.nom, "Tamaño:", produit.taille);
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
    setProduits((prevProduits) =>
      prevProduits.map((item) =>
        item.id === produit.id
        ? {...item, stock: item.stock + 1} : item
      )
    )
  };

  const supprimerToutProduit = (produit) => {
    setPanier((prevPanier) =>
      prevPanier.filter(
        (item) => item.id !== produit.id || item.taille !== produit.taille
      )
    );

    setEuro((prevEuro) => Math.round((prevEuro + produit.prix * produit.quantite) * 100) / 100);
    setPanierCount((prev) => prev - produit.quantite);
    setProduits((prevProduits) =>
    prevProduits.map((item) =>
      item.id === produit.id
    ? {...item, stock: item.stock + produit.quantite}
    : item
      )
    )
  };

  return (
    <>
      <Header />
      <div className="flex" style={{backgroundImage: `url(${fond})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="everything p-20">
          <Boutons key={panierCount} euro={euro} panierCount={panierCount} toggleSidebar={toggleSidebar}/>
          <Card
            euro={euro}
            setEuro={setEuro}
            panier={panier}
            setPanier={setPanier}
            panierCount={panierCount}
            setPanierCount={setPanierCount}
            produits={produits}
            setProduits={setProduits}
          />
        </div>
        <Sidebar
          panier={panier}
          supprimerUnProduit={supprimerUnProduit}
          supprimerToutProduit={supprimerToutProduit}
          showSidebar={showSidebar} 
          toggleSidebar={toggleSidebar} 
        />
      </div>
    </>
  );
}

export default App;
