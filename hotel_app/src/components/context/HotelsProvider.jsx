import { createContext, useContext, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { toast } from 'react-hot-toast';
import axios from 'axios';


const HotelContext = createContext();
const BASE_URL = 'http://localhost:3000/hotels';

function HotelsProvider({ children }) {

  const [currentHotel, setCurrentHotel] = useState(null);
  const [isLoadingCurrentHotel, setIsLoadingCurrentHotel] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const destination = searchParams.get('destination');
  const room = JSON.parse(searchParams.get('options'))?.room;
  const { isLoading, data: hotels } = useFetch(
    BASE_URL, 
    `q=${destination || ''}&accommodates_gte=${room || 1}`
  );

  async function getHotel(id) {
    setIsLoadingCurrentHotel(true)
    try {
      const { data } = await axios.get(`${BASE_URL}/${id}`);
      setCurrentHotel(data)
      setIsLoadingCurrentHotel(false)
    } catch(error) {
      toast.error(error.message)
      setIsLoadingCurrentHotel(false)
    }
  }

  return(
    <>
      <HotelContext.Provider 
        value={{isLoading, hotels, currentHotel, getHotel, isLoadingCurrentHotel}}
      >
        { children }
      </HotelContext.Provider>
    </>
  );
}

export default HotelsProvider


export function useHotels() {
  return(
    useContext(HotelContext)
  );
}
