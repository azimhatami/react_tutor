import { EyeIcon } from '@heroicons/react/24/outline';
import Navbar from './components/Navbar';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import Loader from './components/Loader';
import { allCharacters } from '../data/data';
import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [characters, setCharacters] = useState(allCharacters);
  const [isLoading, setIsLoading] = useState(false);

  // Not to fetch in this way:
  // fetch('https://rickandmortyapi.com/api/character').then((res) => res.json()).
    // then((data) => setCharacters(data.results))

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setCharacters(data.results)
      setIsLoading(false)
    }

    fetchData()

    // fetch('https://rickandmortyapi.com/api/character').
      // then((response) => response.json()).
      // then((data) => setCharacters(data.results))
  }, [])

  return (
    <>
      <div className='app'>
        <Navbar numOfSearch={characters.length} />
        <div className='sidbar'>
          { isLoading ? <Loader/> : <CharacterList characters={ characters }/>}
        </div>
        <div className='main'>
          <CharacterDetail />
        </div>
      </div>
    </>
  )
}

export default App
