import { useSearchParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';


function Hotels() {
  const [searchParams, setSearchParams] = useSearchParams();
  const destination = searchParams.get('destination');
  const room = JSON.parse(searchParams.get('options'))?.room;
  console.log(searchParams)
  const { isLoading, data } = useFetch(
    'http://localhost:3000/hotels', 
    `q=${destination || ''}&accommodates_gte=${room || 1}`
  );

  if (isLoading) {
    return <p>Loading...</p>
  }
  return(
    <>
      <div>{data.length}</div>
    </>
  );
}

export default Hotels
