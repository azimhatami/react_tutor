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

  const handleDeleteNote = (id) => {
    // const filteredNotes = notes.filter(n => n.id !== id);
    // setNotes(filteredNotes)
    setNotes((prevNotes) => prevNotes.filter(n => n.id !== id))
  };

  const handleCompleteNote = (event) => {
    const noteId = Number(event.target.value);
    
//    const newNotes = notes.map((note) =>
//      note.id === noteId ? {...note, completed: !note.completed} : note
//    )
//
//    setNotes(newNotes)    
    setNotes((prevNotes) => prevNotes.map((note) => 
      note.id === noteId ? {...note, completed: !note.completed} : note
    ))
  };

  return (
    <>
      <NoteHeader />
      <div className='note_container'>
        <AddNote onAddNote={ handleAddNote }/>
        <div className='note_list'>
          <NoteList 
          notes={ notes } 
          onDelete={ handleDeleteNote }
          onComplete={ handleCompleteNote }
          />
        </div>
      </div>
    </>
  )
}

export default App
