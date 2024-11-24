import { createContext, useContext, useState, useEffect, useReducer } from 'react';
import useFetch from '../../hooks/useFetch'
import { toast } from 'react-hot-toast';
import axios from 'axios';


const BookmarkContext = createContext();
const baseURL = 'http://localhost:3000';
const initialState = {
  bookmarks: [],
  isLoading: false,
  currentBookmark: null,
  error: null
};

function bookmarkReducer(state, action) {
  switch(action.type) {
    case 'loading':
      return {
        ...state,
        isLoading: true
      }
    case 'bookmarks/loaded':
      return {
        ...state,
        isLoading: false,
        bookmarks: action.payload
      }
    case 'bookmark/loaded':
      return {
        ...state,
        isLoading: false,
        currentBookmark: action.payload
      }
    case 'bookmark/created':
      return {
        ...state,
        isLoading: false,
        bookmarks: [...state.bookmarks, action.payload],
        currentBookmark: action.payload
      }
    case 'bookmark/deleted':
      return {
        ...state,
        isLoading: false,
        bookmarks: state.bookmarks.filter((item) => item.id !== action.payload),
        currentBookmark: null
      }
    case 'rejected':
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      throw new Error('Unknown action')
  }
}

function BookmarkProvider({ children }) {

  const [{bookmarks, isLoading, currentBookmark}, dispatch] = useReducer(bookmarkReducer, initialState)

  // const [currentBookmark, setCurrentBookmark] = useState(null);
  // const [isLoadingCurrentBookmark, setIsLoadingCurrentBookmark] = useState(false);
  // const [bookmarks, setBookmarks] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const { isLoading, data: bookmarks } = useFetch(`${baseURL}/bookmarks`);

  useEffect(() => {
    async function fetchBookmarkList() {
      dispatch({ type: 'loading' })
      try {
        const { data } = await axios.get(`${baseURL}/bookmarks/`);
        dispatch({ type: 'bookmarks/loaded', payload: data})
      } catch(error) {
        toast.error(error.message)
        dispatch({ type: 'rejected', payload: 'an Error occurred in loading bookmarks' })
      }
    }

    fetchBookmarkList()
  }, [])

  async function getBookmark(id) {
    if(Number(id) === currentBookmark?.id) return;

    dispatch({ type: 'loading' })
    try {
      const { data } = await axios.get(`${baseURL}/bookmarks/${id}`);
      dispatch({ type: 'bookmark/loaded', payload: data})
    } catch(error) {
      toast.error(error.message)
      dispatch({ type: 'rejected', payload: 'an Error occurred in fetching single bookmarks' })
    }
  }

  async function createBookmark(newBookmark) {
    dispatch({ type: 'loading' })
    try {
      const { data } = await axios.post(`${baseURL}/bookmarks/`, newBookmark);
      dispatch({ type: 'bookmark/created', payload: data })
    } catch(error) {
      toast.error(error.message)
      dispatch({ type: 'rejected', payload: error.message })
    }
  }

  async function deleteBookmark(id) {
    dispatch({ type: 'loading' })
    try {
      await axios.delete(`${baseURL}/bookmarks/${id}`);
      dispatch({ type: 'bookmark/deleted', payload: id })
    } catch(error) {
      toast.error(error.message)
      dispatch({ type: 'rejected', payload: error.message })
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
            createBookmark,
            deleteBookmark
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
