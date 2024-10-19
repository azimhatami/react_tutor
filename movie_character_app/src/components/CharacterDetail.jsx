import { ArrowUpCircleIcon } from '@heroicons/react/24/outline';

function CharacterDetail() {
  return (
    <>
      <div className='character_details'>
        <img 
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" 
        alt="Rick Sanchez" 
        className="character_detail_img"
        />
        <div className='character_details_info'>
          <div className='character_details_info_header'>
            <h3 className="name">
              <span>👱🏻‍♂️</span>
              <span> Rick Sanchez</span>
            </h3>
            <div className='info'>
              <span className="status"></span>
              <span> Alive </span>
              <span> - Human</span>
            </div>
          </div>
          <div className="location">
            <p>Last known location:</p>
            <p>Citadel of Ricks</p>
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
          <li>
            <div>01 - S01E01 : <strong>Pilot</strong></div>
            <div className="badge badge_secondary">December 2, 2013</div>
          </li>
          <li>
            <div>02 - S01E02 : <strong>Lawnmower Dog</strong></div>
            <div className="badge badge_secondary">December 9, 2013</div>
          </li>
          <li>
            <div>03 - S01E03 : <strong>Anatomy Park</strong></div>
            <div className="badge badge_secondary">December 16, 2013</div>
          </li>
          <li>
            <div>04 - S01E04 : <strong>M. Night Shaym-Aliens!</strong></div>
            <div className="badge badge_secondary">January 13, 2014</div>
          </li>
          <li>
            <div>05 - S01E05 : <strong>Meeseeks and Destroy</strong></div>
            <div className="badge badge_secondary">January 20, 2014</div>
          </li>
          <li>
            <div>06 - S01E06 : <strong>Rick Potion #9</strong></div>
            <div className="badge badge_secondary">January 27, 2014</div>
          </li>
        </ul>
      </div>
    </>
  );
}


export default CharacterDetail;
