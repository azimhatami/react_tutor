import { useState } from 'react';
import { useNotesDispatch } from '../context/NotesContext';

function AddNote() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useNotesDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (!title || !description) return null;

    const newNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString()
    };

    dispatch({type: 'add', payload: newNote})
    setTitle('')
    setDescription('')
  };

  return (
    <>
      <div className='add_note'>
        <h2 className='add_note_title'>Add New Note</h2>
        <form className='note_form' onSubmit={handleSubmit}>
          <input 
          value={title} 
          onChange={(event) => setTitle(event.target.value)} 
          type='text' 
          className='form_title' 
          placeholder='Note title' 
          />
          <input 
          value={description} 
          onChange={(event) => setDescription(event.target.value)} 
          type='text' className='form_description' 
          placeholder='Note description' 
          />
          <button 
          type='submit' 
          className='form_btn'
          >
            Add New Note
          </button>
        </form>
      </div>
    </>
  );
}


export default AddNote;
