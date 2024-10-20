import { EyeIcon } from '@heroicons/react/24/outline';
import { IoManSharp } from "react-icons/io5";
import { IoWoman } from "react-icons/io5";

function CharacterList({characters}) {
  return (
    <div className='characters-list'>
      {characters.map((item) => <Character key={item.id} item={item} />)} 
    </div>
  );
}


export default CharacterList;


function Character({item}) {
  return (
    <>
    <div className='list_item'>
      <img 
      src={item.image} 
      alt={item.image}
      />
      <h3 className="name">
        <span>{item.gender === 'Male' ? <IoManSharp className='man' /> : <IoWoman className='woman' />}</span>
        <span> {item.name}</span>
      </h3>
      <div className="list_item_info info">
        <span className={`status ${item.status === 'Dead' ? 'red' : ''}`}></span>
        <span> { item.status } </span>
        <span> - { item.species }</span>
      </div>
      <button className="icon red">
        <EyeIcon />
      </button>
    </div>
    </>
  );
}

