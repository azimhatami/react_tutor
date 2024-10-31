import { EyeIcon } from '@heroicons/react/24/outline';
import Navbar from './components/Navbar';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import Loader from './components/Loader';
import { allCharacters } from '../data/data';
import { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import useCharacters from './hooks/useCharacters';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css'

function App() {

  const [query, setQuery] = useState('');
  const {isLoading, characters} = useCharacters(query)
  const [selectedId, setSelectedId] = useState(null);
  const [favourites, setFavourites] = useLocalStorage('FAVOURITES', []);

  // Not to fetch in this way:
  // fetch('https://rickandmortyapi.com/api/character').then((res) => res.json()).
    // then((data) => setCharacters(data.results))


//  useEffect(() => {
//    setIsLoading(true)
//    fetch('https://rickandmortyapi.com/api/character').
//      then((response) => {
//        if (!response.ok) throw new Error('Somthing went wrong!')
//        return response.json()
//      }).
//      then((data) => {
//        setCharacters(data.results)
//        // setIsLoading(false)
//      }).
//      catch((error) => {
//        // setIsLoading(false)
//        toast.error(error.message)
//      }).finally(() => setIsLoading(false))
//  }, [])


  const handleSelectCharacter = (id) => {
    setSelectedId(prevId => prevId === id ? null : id)
  }

  const handleAddFavourite = (character) => {
    setFavourites((prevFav) => [...prevFav, character])
  }

  const isAddToFavourite = favourites.map((fav) => fav.id).includes(selectedId)

  const handleDeleteFavourite = (id) => {
    setFavourites((prevFav) => prevFav.filter(fav => fav.id !== id))
  }

  return (
    <>
      <div className='app'>
        <Toaster/>
        <Navbar 
          numOfSearch={characters.length} 
          query={query} setQuery={setQuery} 
          favourites={favourites}
          onDelete={handleDeleteFavourite}
        />
        <div className='sidbar'>
          { isLoading ? <Loader/> : <CharacterList characters={ characters } onSelectCharacter={handleSelectCharacter} selectedId={selectedId} />}
        </div>
        <div className='main'>
          <CharacterDetail 
            selectedId={selectedId} 
            toast={toast}
            onAddFavourite={handleAddFavourite}
            isAddToFavourite={isAddToFavourite}
          />
        </div>
      </div>
    </>
  )
}

export default App
