import { useState, useReducer } from 'react';
import NoteHeader from './components/NoteHeader';
import AddNote from './components/AddNote';
import NoteList from './components/NoteList';
import NoteStatus from './components/NoteStatus';
import './App.css';


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

function App() {

  // const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState('latest');
  const [notes, dispatch] = useReducer(reducer, [])

  const handleAddNote = (newNote) => {
    // state
    // setNotes((prevNotes) => [...prevNotes, newNote])
    // reducer
    dispatch({type: 'add', payload: newNote})
  };

  const handleDeleteNote = (id) => {
    // const filteredNotes = notes.filter(n => n.id !== id);
    // setNotes(filteredNotes)
    // state
    // setNotes((prevNotes) => prevNotes.filter(n => n.id !== id))
    // reducer
    dispatch({type: 'delete', payload: id})
  };

  const handleCompleteNote = (event) => {
    const noteId = Number(event.target.value);
    // const newNotes = notes.map((note) =>
      // note.id === noteId ? {...note, completed: !note.completed} : note
    // )
    // setNotes(newNotes)    
    // state
    // setNotes((prevNotes) => prevNotes.map((note) => 
      // note.id === noteId ? {...note, completed: !note.completed} : note
    // ))

    // reducer
    dispatch({type: 'complete', payload: noteId})
  };

  return (
    <>
      <NoteHeader notes={notes} sortBy={sortBy} onSort={e => setSortBy(e.target.value)} />
      <div className='note_container'>
        <AddNote onAddNote={ handleAddNote }/>
        <div className='note_list'>
          <NoteStatus notes={notes} />
          <NoteList 
          notes={ notes }
          sortBy={ sortBy }
          onDelete={ handleDeleteNote }
          onComplete={ handleCompleteNote }
          />
        </div>
      </div>
    </>
  )
}

export default App
