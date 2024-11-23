import { createContext, useContext, useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch'
import { toast } from 'react-hot-toast';
import axios from 'axios';


const BookmarkContext = createContext();
const baseURL = 'http://localhost:3000';

function BookmarkProvider({ children }) {

  const [currentBookmark, setCurrentBookmark] = useState(null);
  // const [isLoadingCurrentBookmark, setIsLoadingCurrentBookmark] = useState(false);
  const [bookmarks, setBookmarks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const { isLoading, data: bookmarks } = useFetch(`${baseURL}/bookmarks`);

  useEffect(() => {
    async function fetchBookmarkList() {
      setIsLoading(true)
      try {
        const { data } = await axios.get(`${baseURL}/bookmarks/`);
        setBookmarks(data)
      } catch(error) {
        toast.error(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBookmarkList()
  }, [])

  async function getBookmark(id) {
    setIsLoading(true)
    try {
      const { data } = await axios.get(`${baseURL}/bookmarks/${id}`);
      setCurrentBookmark(data)
    } catch(error) {
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  async function createBookmark(newBookmark) {
    setIsLoading(true)
    try {
      const { data } = await axios.post(`${baseURL}/bookmarks/`, newBookmark);
      setCurrentBookmark(data)
      // console.log(data)
      setBookmarks(prev => [...prev, data])
    } catch(error) {
      toast.error(error.message)
    } finally {
      setIsLoading(false)
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
            createBookmark
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
