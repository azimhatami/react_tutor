import { MapContainer, TileLayer, useMap, Marker, Popup, } from 'react-leaflet'
import { useState, useEffect } from 'react'
import { useHotels } from '../context/HotelsProvider'
import { useSearchParams } from 'react-router-dom';


function Map() {
  const {isLoading, hotels} = useHotels();
  const [mapCenter, setMapCenter] = useState([51, 3]);
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  useEffect(() => {
    if (lat && lng) setMapCenter([lat, lng]);
  }, [lat, lng]);

  return(
    <>
      <div className='overflow-auto my-[2rem]'>
        <MapContainer 
          className='h-full' 
          center={mapCenter} 
          zoom={13} 
          scrollWheelZoom={true}
        >
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
