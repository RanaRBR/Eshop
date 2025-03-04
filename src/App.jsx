import React from 'react';
import { useState } from 'react'
import Header from './components/header/Header'
import Boutons from './components/boutons/Boutons'
import './App.sass'
import Card from './components/card/Card';

function App() {

  return (
    <>
     <Card />
      <Header />
      <div className='everything p-20'>
        <Boutons />
      </div>
    </>
  )
}

export default App
