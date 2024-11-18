import { Outlet } from 'react-router-dom';
import Map from '../Map/Map';

function AppLayout() {
  return(
    <>
      <div className='grid grid-cols-2 grid-row-1 h-screen'>
        <div>
          <Outlet />
        </div>
        <Map />
      </div>
    </>
  )
}

export default AppLayout
