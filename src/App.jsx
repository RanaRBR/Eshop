import { useState } from 'react'
import Header from './components/header/Header'
import Boutons from './components/boutons/Boutons'
import './App.sass'

function App() {

  return (
    <>
      <Header />
      <div className='everything p-20'>
        <Boutons />
      </div>
    </>
  )
}

export default App
