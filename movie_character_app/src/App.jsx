import { EyeIcon } from '@heroicons/react/24/outline';
import Navbar from './components/Navbar';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import Loader from './components/Loader';
import { allCharacters } from '../data/data';
import { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import './App.css'

function App() {

  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Not to fetch in this way:
  // fetch('https://rickandmortyapi.com/api/character').then((res) => res.json()).
    // then((data) => setCharacters(data.results))

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true)
        const response = await fetch('https://rickandmortyapi.com/api/character');

        if (!response.ok) throw new Error('Something went wrong!');

        const data = await response.json();
        setCharacters(data.results)
        // setIsLoading(false)
      } catch(error) {
        // setIsLoading(false)
        // FOR REAL PROJECT -> error.response.data.message
        // console.log(error.message)
        toast.error(error.message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])


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

  return (
    <>
      <div className='app'>
        <Toaster/>
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
