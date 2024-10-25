import { ArrowUpCircleIcon } from '@heroicons/react/24/outline';
import { IoManSharp, IoWoman} from 'react-icons/io5';
// import { episodes } from '../../data/data';
// import { character } from '../../data/data';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './Loader';

function CharacterDetail({selectedId, toast}) {

  const [character, setCharacter] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true)
        setCharacter(null)
        const {data} = await axios.get(
          `https://rickandmortyapi.com/api/character/${selectedId}`
        );
        console.log(data)
        setCharacter(data)
        setEpisodes(data.episode)
      } catch (error) {
        toast.error(error.response.data.error)
      } finally {
        setIsLoading(false)
      }
    }

    if (selectedId) fetchData()
  }, [selectedId])

    if (isLoading) 
      return (
        <div>
          <Loader/>
        </div>
      )

  if (!character || !selectedId)
    return (
        <div>Please Select a Character!</div> 
    );
  

  return (
    <>
      <div className='character_details'>
        <img 
        src={character.image} 
        alt={character.name} 
        className="character_detail_img"
        />
        <div className='character_details_info'>
          <div className='character_details_info_header'>
            <h3 className="name">
              <span>{character.gender === 'Male' ? <IoManSharp className='man' /> : <IoWoman className='woman' />}</span>
              <span> {character.name}</span>
            </h3>
            <div className='info'>
              <span className={`status ${character.status === 'Dead' ? 'red' : ''}`}></span>
              <span> { character.status } </span>
              <span> - {character.species}</span>
            </div>
          </div>
          <div className="location">
            <p>Last known location:</p>
            <p>{character.location.name}</p>
          </div>
          <div className="actions">
            <button className="btn btn_primary">Add to Favourite</button>
          </div>
        </div>
      </div>
      <div className='character_episodes'>
        <div className='title'>
          <h2>List of Episodes:</h2>
          <button>
            <ArrowUpCircleIcon />
          </button>
        </div>
        <ul>
          {episodes.map((item, index) => 
            <li key={item.id}>
              <div>{String(index + 1).padStart(2, '0')} - {item.episode} : <strong>{item.name}</strong></div>
              <div className="badge badge_secondary">{item.air_date}</div>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}


export default CharacterDetail;
