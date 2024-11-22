import { 
  MapContainer, 
  TileLayer, 
  useMap, 
  Marker, 
  Popup,
  useMapEvent
} from 'react-leaflet'
import { useState, useEffect } from 'react'
import { useHotels } from '../context/HotelsProvider'
import { useSearchParams, useNavigate } from 'react-router-dom';
import useGeoLocation from '../../hooks/useGeoLocation';
import useUrlLocation from '../../hooks/useUrlLocation';

function Map({ markerLocations }) {
  // const {isLoading, hotels} = useHotels();
  const [mapCenter, setMapCenter] = useState([51, 3]);
  const [lat, lng] = useUrlLocation();

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
      <div className='overflow-auto mt-[2rem] rounded-lg'>
        <MapContainer 
          className='h-[35rem]' 
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
          <DetectClick />
          <ChangeCenter position={mapCenter} />
          {
            markerLocations.map((item) => {
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


export function DetectClick() {
  const navigate = useNavigate();
  useMapEvent({
    click: (event) => navigate(`/bookmark/add?lat=${event.latlng.lat}&lng=${event.latlng.lng}`),
  })
  return null;
}
