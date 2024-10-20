import { EyeIcon } from '@heroicons/react/24/outline';
import Navbar from './components/Navbar';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import { allCharacters } from '../data/data';
import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className='app'>
        <Navbar />
        <div className='sidbar'>
          <CharacterList characters={ allCharacters }/>
        </div>
        <div className='main'>
          <CharacterDetail />
        </div>
      </div>
    </>
  )
}

export default App
