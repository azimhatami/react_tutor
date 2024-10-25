import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { IoManSharp } from "react-icons/io5";
import { IoWoman } from "react-icons/io5";

function CharacterList({characters, selectedId, onSelectCharacter}) {
  return (
    <div className='characters-list'>
      {characters.map((item) => 
        <Character 
          key={item.id} 
          item={item} 
          onSelectCharacter={onSelectCharacter}
          selectedId={selectedId}
        />)} 
    </div>
  );
}


export default CharacterList;


function Character({item, onSelectCharacter, selectedId}) {
  return (
    <>
    <div className='list_item'>
      <img 
      src={item.image} 
      alt={item.name}
      />
      <CharacterName item={item} />
      <CharacterInfo item={item} />
      <button className="icon red" onClick={() => onSelectCharacter(item.id)} >
        {selectedId === item.id ? <EyeIcon /> : <EyeSlashIcon /> }
      </button>
    </div>
    </>
  );
}

function CharacterName({item}) {
  return(
    <h3 className="name">
      <span>{item.gender === 'Male' ? <IoManSharp className='man' /> : <IoWoman className='woman' />}</span>
      <span> {item.name}</span>
    </h3>
  )
}

function CharacterInfo({item}) {
  return(
    <div className="list_item_info info">
      <span className={`status ${item.status === 'Dead' ? 'red' : ''}`}></span>
      <span> { item.status } </span>
      <span> - { item.species }</span>
    </div>
  );
}
