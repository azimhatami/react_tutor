function NoteList({notes, onDelete}) {
  return(
    <>
        <div className='note_header_status'>
          <ul className='note_status'>
            <li>All <span>3</span></li>
            <li>Completed <span>3</span></li>
            <li>Open <span>3</span></li>
          </ul>
        </div>
        <div className='note_items'>
          {
            notes.map((note) => <NoteItem key={note.id} note={note} onDelete={ onDelete }/>)
          }
        </div>
    </>
  );
}

export default NoteList;


function NoteItem({note, onDelete}) {

  const options = {
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
  };

  return (
    <>
      <div className='note_item'>
        <div className='note_item_header'>
          <div>
            <p className='note_title'>{note.title}</p>
            <p className='note_description'>{note.description}</p>
          </div>
          <div className='actions'>
            <button className='trash' onClick={() => onDelete(note.id)}>&#xe872;</button>
            <input type='checkbox' />
          </div>
        </div>
        <p className='note_footer'>
          {new Date(note.createdAt).toLocaleDateString('en-US', options)}
        </p>
      </div>
    </>
  );
}

