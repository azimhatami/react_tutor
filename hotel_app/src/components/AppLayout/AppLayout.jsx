import { Outlet } from 'react-router-dom'

function AppLayout() {
  return(
    <>
      <div className='grid grid-cols-2'>
        <div>
          <Outlet />
        </div>
        <div>map</div>
      </div>
    </>
  )
}

export default AppLayout
