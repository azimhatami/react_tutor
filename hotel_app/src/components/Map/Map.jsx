import { MapContainer, TileLayer, useMap, Marker, Popup, } from 'react-leaflet'
import { useState, useEffect } from 'react'
import { useHotels } from '../context/HotelsProvider'
import { useSearchParams } from 'react-router-dom';
import useGeoLocation from '../../hooks/useGeoLocation';

function Map() {
  const {isLoading, hotels} = useHotels();
  const [mapCenter, setMapCenter] = useState([51, 3]);
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  const {
    isLoading: isLoadingPosition, 
    position: geolocationPosition, 
    getPosition
  } = useGeoLocation()

  useEffect(() => {
    if (lat && lng) setMapCenter([lat, lng]);
  }, [lat, lng]);

  useEffect(() => {
    if (geolocationPosition?.lat && geolocationPosition?.lng) 
      setMapCenter([geolocationPosition.lat, geolocationPosition.lng])
  }, [geolocationPosition]);

  return(
    <>
      <div className='overflow-auto mt-[2rem]'>
        <MapContainer 
          className='h-[35rem] overflow-auto' 
          center={mapCenter} 
          zoom={13} 
          scrollWheelZoom={true}
        >
          <button
            onClick={getPosition}
            className=
              'bg-blue-600 text-slate-100 absolute bottom-6 left-6 rounded-md px-1.5 py-0.5 font-bold z-[1000] hover:shadow-lg shadow-blue-500'
          >
            { isLoadingPosition ? 'Loading ...' : 'Use Your Location' }
          </button>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          <ChangeCenter position={mapCenter} />
          {
            hotels.map((item) => {
              return(
                <Marker key={item.id} position={[item.latitude, item.longitude]}>
                <Popup>
                  {item.host_location}
                </Popup>
                </Marker>
              )
          })
          }
        </MapContainer>
      </div>
    </>
  );
}


export default Map



export function ChangeCenter({position}) {
  const map = useMap();
  map.setView(position)
  return null;
}
