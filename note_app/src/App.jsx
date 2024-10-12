import NoteHeader from './components/NoteHeader';
import AddNote from './components/AddNote';
import './App.css';

function App() {

  return (
    <>
      <NoteHeader />
      <div className='note_container'>
        <AddNote />
        <div className='note_list'>
          <div className='note_header_status'>
            <ul className='note_status'>
              <li>All <span>3</span></li>
              <li>Completed <span>3</span></li>
              <li>Open <span>3</span></li>
            </ul>
          </div>
          <div className='note_items'>
            <div className='note_item'>
              <div className='note_item_header'>
                <div>
                  <p className='note_title'>Title</p>
                  <p className='note_description'>Description</p>
                </div>
                <div className='actions'>
                  <button className='trash'>&#xe872;</button>
                  <input type='checkbox' />
                </div>
              </div>
              <p className='note_footer'>{new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
