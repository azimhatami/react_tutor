import { useState, useReducer } from 'react';
import NoteHeader from './components/NoteHeader';
import NoteApp from './components/NoteApp';
import {NotesProvider} from './context/NotesContext';
import './App.css';


function App() {

  const [sortBy, setSortBy] = useState('latest');

  return (
    <>
      <NotesProvider>
      <NoteHeader sortBy={sortBy} onSort={e => setSortBy(e.target.value)} />
      <NoteApp sortBy={sortBy} />
      </NotesProvider>
    </>
  )
}

export default App
