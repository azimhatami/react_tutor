import useFetch from '../.././hooks/useFetch';


function LocationList() {
  const { data, isLoading } = useFetch('http://localhost:3000/hotels', '')
  return(
    <>
      <div className='my-[3rem]'>
        <h2 className='text-start text-2xl font-semibold subpixel-antialiased my-[1rem]'>Nearby Locations</h2>
        <div className='flex flex-wrap justify-between items-center gap-y-[2rem]'>
          {
            data.map((item) => {
              return (
                <div key={item.id} className='flex flex-col items-start'>
                  <img src={item.picture_url.url} alt='Picture' className='w-[23rem] h-[15rem] rounded-lg'/>
                  <div className='flex flex-col my-3 items-start gap-y-1'>
                    <p className='font-medium'>{item.smart_location}</p>
                    <p className='text-slate-500'>{item.name}</p>
                    <p className='font-medium'>
                      €&nbsp;{item.price}&nbsp;
                      <span className='font-normal text-slate-500'>night</span>
                    </p>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </>
  );
}

export default LocationList;
