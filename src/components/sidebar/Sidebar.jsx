import React,{ useState } from "react";
import "./Sidebar.sass";

function Sidebar({ panier, supprimerUnProduit, supprimerToutProduit, showSidebar }) {
  return (
    <div className={`sideBar flex flex-col gap-4 text-white ${showSidebar ? 'translate-x-0' : 'translate-x-full'}`}>
      <h2 className="title uppercase font-semibold">Panier</h2>

      {panier.length === 0 ? (
        <p className="text-neutral-400">Votre panier est vide.</p>
      ) : (
        panier.map((item, index) => (
          <div key={index} className="cart-item flex flex-col p-2 rounded-xl">
            <div>
               <p className="text-2xl text-orange-300 font-semibold">{item.nom} </p> 
               <p>{item.taille} - {item.quantite}</p>
            </div>
            <div className="flex gap-5">
              <button onClick={() => supprimerUnProduit(item)} className="border-1 py-1 px-2 rounded-full mt-2 cursor-pointer btn-panier">
                Supprimer
              </button>
              <button onClick={() => supprimerToutProduit(item)} className="border-1 py-1 px-2 rounded-full mt-2 cursor-pointer btn-panier">
                Rendre
              </button>
            </div>
          </div>
        ))
      )}

      {panier.length > 0 && <button className="pay-btn rounded-2xl p-1">Payer</button>}
    </div>
  );
}

export default Sidebar;
