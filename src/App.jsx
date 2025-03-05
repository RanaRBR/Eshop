import { useState } from 'react';
import Header from './components/header/Header';
import Boutons from './components/boutons/Boutons';
import './App.sass';
import Card from './components/card/Card';
import SideBar from './components/sideBar/SideBar';

function App() {
  const [euro, setEuro] = useState(150);
  const [panierCount, setPanierCount] = useState(0);

  return (
    <>

      <Header />

      <div className='everything p-20'>
        <div><SideBar/></div>
        <Boutons key={panierCount} euro={euro} panierCount={panierCount} />
        <Card euro={euro} setEuro={setEuro} panierCount={panierCount} setPanierCount={setPanierCount} />
       </div>
    </>
  );
}

export default App;

