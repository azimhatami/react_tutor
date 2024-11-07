import { useNotes, useNotesDispatch } from '../context/NotesContext';


function NoteList({ onDelete, onComplete, sortBy }) {

  const notes = useNotes();

  let sortedNotes = notes;

  if (sortBy === 'earliest') { 
    sortedNotes = [...notes].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
  }

  if (sortBy === 'latest') { 
    sortedNotes = [...notes].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  }

  if (sortBy === 'completed') {
    sortedNotes = [...notes].sort((a, b) => Number(b.completed) - Number(a.completed))
  }

  return(
    <>
      <div className='note_items'>
        {
          sortedNotes.map((note) => <NoteItem key={note.id} note={note} onDelete={ onDelete } onComplete={onComplete} />)
        }
      </div>
    </>
  );
}

export default NoteList;


function NoteItem({note}) {

  const dispatch = useNotesDispatch();

  const options = {
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
  };

  return (
    <>
      <div className={`note_item ${note.completed ? 'note_completed' : ''}`}>
        <div className='note_item_header'>
          <div>
            <p className='note_title'>{note.title}</p>
            <p className='note_description'>{note.description}</p>
          </div>
          <div className='actions'>
            <button className='trash' onClick={() => dispatch({type: 'delete', payload: note.id})}>&#xe872;</button>
            <input 
            type='checkbox' 
            name={note.id} 
            id={note.id} 
            value={note.id} 
            onChange={(e) => {
              const noteId = Number(e.target.value);
              dispatch({type: 'complete', payload: noteId})
            }}
            checked={note.completed}
            />
          </div>
        </div>
        <p className='note_footer'>
          {new Date(note.createdAt).toLocaleDateString('en-US', options)}
        </p>
      </div>
    </>
  );
}

