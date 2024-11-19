import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useHotels } from '../context/HotelsProvider';
import { useEffect } from 'react';

function SingleHotel() {
  const { id } = useParams();
  const { currentHotel, getHotel, isLoadingCurrentHotel } = useHotels();

  useEffect(() => {
    getHotel(id)
  }, [id])

  if (isLoadingCurrentHotel || !currentHotel) return <p>Loading ...</p>

  return(
    <>
      <div className='flex flex-col items-start mt-8 ml-10'>
        <img 
          src={currentHotel.xl_picture_url} 
          alt={currentHotel.name} 
          className='w-[24rem] rounded-lg'
        />
        <h2 className='text-[1.2rem] font-bold mt-4'>{currentHotel.name}</h2>
        <div className='text-slate-500 font-medium'>
          {currentHotel.number_of_reviews} reviews &bull; {currentHotel.smart_location} 
        </div>
      </div>
    </>
  );
}



export default SingleHotel
