import { useState } from 'react';

function NoteHeader({ notes, sortBy, onSort }) {

  return (
    <>
      <div className='note_header'>
        <h1>My Notes ( {notes.length} )</h1>
        <select 
        className='custom_select' 
        value={sortBy}
        onChange={onSort}
        >
          <option value='latest'>Sort based on latest notes</option>
          <option value='earliest'>Sort based on earliest notes</option>
          <option value='completed'>Sort based on completed notes</option>
        </select>
      </div>
    </>
  );
}


export default NoteHeader
