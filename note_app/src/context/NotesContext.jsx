import { useContext, createContext , useReducer } from 'react';

const NotesContext = createContext(null);
const NotesDispatchContext = createContext(null);

function reducer(notes, {type, payload}) {
  switch(type) {
    case 'add':
      return [...notes, payload];
      break;
    case 'delete':
      return notes.filter((n) => n.id !== payload)
      break;
    case 'complete': 
      return notes.map((note) => note.id === payload ? {...note, completed: !note.completed} : note)
      break;
    default :
      throw new Error('Unknown Error' + type)
  }
}

export function NotesProvider({children}) {
  const [notes, dispatch] = useReducer(reducer, []);
  return(
    <>
      <NotesContext.Provider value={notes}>
        <NotesDispatchContext.Provider value={dispatch}>
          {children}
        </NotesDispatchContext.Provider>
      </NotesContext.Provider>
    </>
  );
}

export function useNotes() {
  return useContext(NotesContext);
}

export function useNotesDispatch() {
  return useContext(NotesDispatchContext);
}
