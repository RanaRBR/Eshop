import { useState } from 'react';
import Header from './components/header/Header';
import Boutons from './components/boutons/Boutons';
import Card from './components/card/Card';
import Sidebar from './components/sidebar/Sidebar';
import './App.sass';

function App() {
  const [euro, setEuro] = useState(150);
  const [panierCount, setPanierCount] = useState(0);

  return (
    <>
      <Header />
      <div className='everything flex' >
        <div className='p-20'>
          <Boutons key={panierCount} euro={euro} panierCount={panierCount} />
          <Card euro={euro} setEuro={setEuro} panierCount={panierCount} setPanierCount={setPanierCount} />
        </div>
        <div>
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default App;

