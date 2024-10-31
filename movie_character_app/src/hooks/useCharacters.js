import axios from 'axios';
import {useState, useEffect} from 'react';
import toast from 'react-hot-toast';

export default function useCharacter(query) {

  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchData() {
      try {
        setIsLoading(true)
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character?name=${query}`,
          { signal: signal }
        );

        setCharacters(data.results)
        // setIsLoading(false)
      } catch(error) {
        // setIsLoading(false)
        // FOR REAL PROJECT -> error.response.data.message
        // console.log(error.message)
        // fetch => error.name === 'AbortError'
        // axios => axios.isCancel()

        if (axios.isCancel(error)) {
          console.log('cancel sucessfully')
        } else {
          setCharacters([])
          toast.error(error.response.data.error)
        }
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()

    // Clean Up function
    return () => {
      // cancel the request before component unmounts
      controller.abort()
    };
  }, [query])

  return { isLoading, characters }
}
