import React from "react";
import "./SideBar.sass";

function SideBar({ panier, supprimerUnProduit, supprimerToutProduit }) {
  return (
    <div className="sideBar text-white">
      <h2 className="title">🛒 Panier</h2>

      {panier.length === 0 ? (
        <p className="empty">Votre panier est vide.</p>
      ) : (
        panier.map((item, index) => (
          <div key={index} className="cart-item">
            <p>
              {item.nom} ({item.taille}) - {item.quantite}
            </p>
            <div className="buttons">
              <button onClick={() => supprimerUnProduit(item)}>➖</button>
              <button onClick={() => supprimerToutProduit(item)}>🗑️</button>
            </div>
          </div>
        ))
      )}

      {panier.length > 0 && <button className="pay-btn">💳 Payer</button>}
    </div>
  );
}

export default SideBar;
