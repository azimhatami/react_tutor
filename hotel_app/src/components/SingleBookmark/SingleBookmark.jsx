import { useBookmark } from '../context/BookmarkListContext';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import ReactCountryFlag from 'react-country-flag';


function SingleBookmark() {
  const { id } = useParams();
  const { getBookmark, isLoadingCurrentBookmark, currentBookmark } = useBookmark();
  const navigate = useNavigate();

  useEffect(() => {
    getBookmark(id)
  }, [id])

  if (isLoadingCurrentBookmark || !currentBookmark) return <p>Loading ...</p>
  return(
    <>
      <div className='flex flex-col items-start gap-4'>
        <button className='border-solid border-blue-500 border-[2px] rounded-lg px-2 py-1 hover:bg-blue-500 font-bold' onClick={() => navigate(-1)}>&#11013; Back</button>
        <h2 className='text-xl font-bold'>{currentBookmark.cityName}</h2>
        <div className='flex flex-row items-center gap-4'>
          <ReactCountryFlag svg countryCode={currentBookmark.countryCode} />
          <strong>{currentBookmark.cityName}</strong>
          <span className='text-slate-500 text-sm'>{currentBookmark.country}</span>
        </div>
      </div>
    </>
  );
}


export default SingleBookmark
