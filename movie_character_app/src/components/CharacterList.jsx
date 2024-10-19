import { EyeIcon } from '@heroicons/react/24/outline';

function CharacterList() {
  return (
    <div className='characters-list'>
      <div className='list_item'>
        <img 
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" 
        alt="Rick Sanchez"
        />
        <h3 className="name">
          <span>👱🏻‍♂️</span>
          <span> Rick Sanchez</span>
        </h3>
        <div className="list_item_info info">
          <span className="status"></span>
          <span> Alive </span>
          <span> - Human</span>
        </div>
        <button className="icon red">
          <EyeIcon />
        </button>
      </div>
      <div className='list_item'>
        <img 
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" 
        alt="Rick Sanchez"
        />
        <h3 className="name">
          <span>👱🏻‍♂️</span>
          <span> Rick Sanchez</span>
        </h3>
        <div className="list_item_info info">
          <span className="status"></span>
          <span> Alive </span>
          <span> - Human</span>
        </div>
        <button className="icon red">
          <EyeIcon />
        </button>
      </div>
      <div className='list_item'>
        <img 
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" 
        alt="Rick Sanchez"
        />
        <h3 className="name">
          <span>👱🏻‍♂️</span>
          <span> Rick Sanchez</span>
        </h3>
        <div className="list_item_info info">
          <span className="status"></span>
          <span> Alive </span>
          <span> - Human</span>
        </div>
        <button className="icon red">
          <EyeIcon />
        </button>
      </div>
    </div>
  );
}


export default CharacterList;
