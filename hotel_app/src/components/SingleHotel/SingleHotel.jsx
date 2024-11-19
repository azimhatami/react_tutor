import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

function SingleHotel() {
  const { id } = useParams();
  const { data, isLoading } = useFetch(`http://localhost:3000/hotels/${id}`);

  if (isLoading) return <p>Loading ...</p>

  return(
    <>
      <div className='flex flex-col items-start mt-8 ml-10'>
        <img 
          src={data.xl_picture_url} 
          alt={data.name} 
          className='w-[24rem] rounded-lg'
        />
        <h2 className='text-[1.2rem] font-bold mt-4'>{data.name}</h2>
        <div className='text-slate-500 font-medium'>
          {data.number_of_reviews} reviews &bull; {data.smart_location} 
        </div>
      </div>
    </>
  );
}



export default SingleHotel
