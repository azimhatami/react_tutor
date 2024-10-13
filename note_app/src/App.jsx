import { useState } from 'react';
import NoteHeader from './components/NoteHeader';
import AddNote from './components/AddNote';
import NoteList from './components/NoteList';
import './App.css';

function App() {

  const [notes, setNotes] = useState([]);

  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote])
  };

  return (
    <>
      <NoteHeader />
      <div className='note_container'>
        <AddNote onAddNote={ handleAddNote }/>
        <div className='note_list'>
          <NoteList notes={ notes }/>
        </div>
      </div>
    </>
  )
}

export default App
