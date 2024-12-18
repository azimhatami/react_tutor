import { Outlet } from 'react-router-dom';
import { useHotels } from '../context/HotelsProvider';
import Map from '../Map/Map';

function AppLayout() {
  const { hotels } = useHotels();
  return(
    <>
      <div className='grid grid-cols-[28rem_1fr] grid-row-1 h-[39rem] gap-[10rem]'>
        <div>
          <Outlet />
        </div>
        <Map markerLocations={hotels} />
      </div>
    </>
  )
}

export default AppLayout
