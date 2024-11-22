import { useBookmark } from '../context/BookmarkListContext';
import ReactCountryFlag from "react-country-flag";
import { Link } from 'react-router-dom';


function Bookmark() {
  const { isLoading, bookmarks, currentBookmark } = useBookmark();

  if (isLoading) return <p>Loading ...</p> 

  return(
    <>
      <div>
        <h2>Bookmark List</h2>
        <div className='flex flex-col gap-3'>
          {bookmarks.map((item) => {
            return(
              <Link key={item.id} to={`${item.id}?lat=${item.latitude}&lng=${item.longitude}`}>
                <div 
                  className={`flex 
                  flex-row 
                  items-center 
                  justify-start 
                  gap-4 
                  border-solid 
                  border-slate-400 
                  border-[2px] 
                  rounded-2xl 
                  px-3 
                  py-2 
                  ${item.id === currentBookmark?.id ? 'border-blue-500' : ''}`} 
                >
                  <ReactCountryFlag svg countryCode={item.countryCode} />
                  <strong>{item.cityName}</strong>
                  <span className='text-slate-500 text-sm'>{item.country}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}



export default Bookmark
