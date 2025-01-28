import AddNote from './AddNote';
import NoteStatus from './NoteStatus';
import NoteList from './NoteList';


function NoteApp({ sortBy }) {
  return(
    <>
      <div className='note_container'>
        <AddNote />
        <div className='note_list'>
          <NoteStatus />
          <NoteList 
          sortBy={ sortBy }
          />
        </div>
      </div>
    </>
  );
}


export default NoteApp
