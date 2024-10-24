import { HeartIcon } from '@heroicons/react/24/outline';

function Navbar({numOfSearch, query, setQuery}) {
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
      <button className='heart'>
        <HeartIcon />
        <span className='badge'>0</span>
      </button>
    </div>
  );
}



export default Navbar;
