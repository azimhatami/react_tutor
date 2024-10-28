import { HeartIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Modal from './Modal';
import { Character } from './CharacterList';

function Navbar(
  {
    numOfSearch, 
    query, 
    setQuery,
    favourites,
    onDelete={onDelete}
  }
) {

  return (
    <div className='navbar'>
      <div className='navbar_logo'>LOGO &#128525;</div>
      <input 
        type='text' 
        className='nav_input' 
        placeholder='Search ...' 
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <div className='navbar_result'>Found {numOfSearch} characters</div>
      <Favourites favourites={favourites} onDelete={onDelete} />
    </div>
  );
}


export default Navbar;


export function Favourites({favourites, onDelete}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Modal title="List of Favourites" open={isOpen} onOpen={setIsOpen}>
        {
          favourites.map((item) => 
            <Character key={item.id} item={item} onSelectCharacter={() => {}} selectedId='1'>
              <button className='icon red' onClick={() => onDelete(item.id)}>
                <TrashIcon />
              </button> 
            </Character>
          )}
      </Modal>
      <button className='heart' onClick={() => setIsOpen((is) => !is)}>
        <HeartIcon />
        <span className='badge'>{favourites.length}</span>
      </button>
    </>
  );
}
