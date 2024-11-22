import { createContext, useContext, useState } from 'react';
import useFetch from '../../hooks/useFetch'
import { toast } from 'react-hot-toast';
import axios from 'axios';


const BookmarkContext = createContext();
const baseURL = 'http://localhost:3000';

function BookmarkProvider({ children }) {

  const [currentBookmark, setCurrentBookmark] = useState(null);
  const [isLoadingCurrentBookmark, setIsLoadingCurrentBookmark] = useState(false);
  const { isLoading, data: bookmarks } = useFetch(`${baseURL}/bookmarks`);

  async function getBookmark(id) {
    setIsLoadingCurrentBookmark(true)
    try {
      const { data } = await axios.get(`${baseURL}/bookmarks/${id}`);
      setCurrentBookmark(data)
      setIsLoadingCurrentBookmark(false)
    } catch(error) {
      toast.error(error.message)
      setIsLoadingCurrentBookmark(false)
    }
  }

  return(
    <>
      <BookmarkContext.Provider 
        value={{
            isLoading, 
            bookmarks, 
            currentBookmark,
            getBookmark,
            isLoadingCurrentBookmark
        }}
      >
        { children }
      </BookmarkContext.Provider>
    </>
  );
}


export default BookmarkProvider


export function useBookmark() {
  return(
    useContext(BookmarkContext)
  );
}
