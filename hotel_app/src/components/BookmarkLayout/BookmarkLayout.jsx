import Map from '../Map/Map';
import { useBookmark } from '../context/BookmarkListContext';
import { Outlet } from 'react-router-dom';


function Bookmark() {
  const { bookmarks } = useBookmark();
  return(
    <>
      <div className='grid grid-cols-[28rem_1fr] grid-row-1 h-[39rem] gap-[10rem]'>
        <div>
          <Outlet />
        </div>
        <Map markerLocations={bookmarks} />
      </div>
    </>
  );
}


export default Bookmark;
