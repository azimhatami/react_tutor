import { useNotes } from '../context/NotesContext';

function NoteStatus() {

  const notes = useNotes();
  
  const allNotes = notes.length;
  const completedNotes = notes.filter(n => n.completed).length;
  const openNotes = allNotes - completedNotes;
  
  if (!allNotes) 
    return <h2>No Notes has already been added.</h2>

  return (
    <>
      <div className='note_header_status'>
        <ul className='note_status'>
          <li>All <span>{allNotes}</span></li>
          <li>Completed <span>{completedNotes}</span></li>
          <li>Open <span>{openNotes}</span></li>
        </ul>
      </div>
    </>
  );

}

export default NoteStatus;
