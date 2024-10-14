
function NoteList({notes, onDelete, onComplete}) {
  return(
    <>
      <div className='note_items'>
        {
          notes.map((note) => <NoteItem key={note.id} note={note} onDelete={ onDelete } onComplete={onComplete} />)
        }
      </div>
    </>
  );
}

export default NoteList;


function NoteItem({note, onDelete, onComplete}) {

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
            <button className='trash' onClick={() => onDelete(note.id)}>&#xe872;</button>
            <input 
            type='checkbox' 
            name={note.id} 
            id={note.id} 
            value={note.id} 
            onChange={onComplete}
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

