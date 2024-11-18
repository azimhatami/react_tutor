import { MapContainer, TileLayer, useMap, Marker, Popup, } from 'react-leaflet'
import { useState } from 'react'
import { useHotels } from '../context/HotelsProvider'


function Map() {
  const {isLoading, hotels} = useHotels();
  const [mapCenter, setMapCenter] = useState([51, 3]);
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
