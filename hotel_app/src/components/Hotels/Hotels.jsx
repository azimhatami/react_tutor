import { Link } from "react-router-dom";
import { useHotels } from '../context/HotelsProvider';


function Hotels() {

  const { isLoading, hotels } = useHotels();

  if (isLoading) {
    return <p>Loading...</p>
  }
  return(
    <>
      <div>
        <h2 className='text-start my-4 text-lg font-medium'>Search Results ({hotels.length})</h2>
        <div className='flex flex-col overflow-auto h-[33rem] gap-y-6'>
        {
          hotels.map((item) => {
            return(
            <Link 
              to={
                `/hotels/${item.id}?lat=${item.latitude}&lng=${item.longitude}`
              }
              key={item.id}
            >
              <div className='flex flex-row space-x-11'>
                <img 
                  src={item.picture_url.url} 
                  alt={item.name} 
                  className='w-[8rem] h-[6rem] rounded-lg'
                />
                <div className='text-start w-[16rem]'>
                  <p className='font-medium'>{item.smart_location}</p>
                  <p className='text-slate-500 text-sm text-nowrap'>{item.name}</p>
                  <p className='font-medium text-sm'>
                    €&nbsp;{item.price}&nbsp;
                    <span className='font-normal text-slate-500'>night</span>
                  </p>
                </div>
              </div>
            </Link>
            );
          })
        }
        </div>
      </div>
    </>
  );
}

export default Hotels
