import { useState, useReducer } from 'react';
import NoteHeader from './components/NoteHeader';
import AddNote from './components/AddNote';
import NoteList from './components/NoteList';
import NoteStatus from './components/NoteStatus';
import {NotesProvider} from './context/NotesContext';
import './App.css';


function App() {

  const [sortBy, setSortBy] = useState('latest');

  return (
    <>
      <NotesProvider>
      <NoteHeader sortBy={sortBy} onSort={e => setSortBy(e.target.value)} />
      <div className='note_container'>
        <AddNote />
        <div className='note_list'>
          <NoteStatus />
          <NoteList 
          sortBy={ sortBy }
          />
        </div>
      </div>
      </NotesProvider>
    </>
  )
}

export default App
