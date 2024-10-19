import { HeartIcon } from '@heroicons/react/24/outline';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar_logo'>LOGO &#128525;</div>
      <input type='text' className='nav_input' placeholder='Search ...' />
      <div className='navbar_result'>Found 5 characters</div>
      <button className='heart'>
        <HeartIcon />
        <span className='badge'>0</span>
      </button>
    </div>
  );
}



export default Navbar;
