
function NoteHeader() {
  return (
    <>
      <div className='note_header'>
        <h1>My Notes (3)</h1>
        <select>
          <option>Sort based on latest notes</option>
          <option>Sort based on earliest notes</option>
          <option>Sort based on completed notes</option>
        </select>
      </div>
    </>
  );
}


export default NoteHeader
