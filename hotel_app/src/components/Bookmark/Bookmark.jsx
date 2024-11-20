import Map from '../Map/Map';
import { useHotels } from '../context/HotelsProvider';


function Bookmark() {
  const { hotels } = useHotels();
  return(
    <>
      <div className='grid grid-cols-[28rem_1fr] grid-row-1 h-[39rem] gap-[10rem]'>
        <div>
          BookMark
        </div>
        <Map markerLocations={[]} />
      </div>
    </>
  );
}


export default Bookmark;
