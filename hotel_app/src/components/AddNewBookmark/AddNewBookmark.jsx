import { useNavigate } from "react-router-dom";
import useUrlLocation from "../../hooks/useUrlLocation";
import { useEffect, useState } from "react";
import axios from "axios";
import { useBookmark } from '../context/BookmarkListContext';

function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char =>  127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  }

const BASE_GEOCODING_URL = "https://api-bdc.net/data/reverse-geocode-client";

function AddNewBookmark() {
  const navigate = useNavigate();
  const [lat, lng] = useUrlLocation();
  const [cityName, setCityName] = useState();
  const [country, setCountry] = useState();
  const [countryCode, setCountryCode] = useState("");
  const [isLoadingGeoCoding, setIsLoadingGeoCoding] = useState(false);
  const [geoCodingError, setGeoCodingError] = useState(null);

  const {createBookmark} = useBookmark();

  useEffect(() => {
    if (!lat || !lng) return;
    async function fetchLocationData() {
      setIsLoadingGeoCoding(true);
      setGeoCodingError(null);
      try {
        const { data } = await axios.get(
          `${BASE_GEOCODING_URL}?latitude=${lat}&longitude=${lng}`
        );

        if (!data.countryCode) throw new Error('This location is not a city! please click somewhere else.')

        console.log(data);
        setCityName(data.city || data.locality || "");
        setCountry(data.countryName);
        setCountryCode(getFlagEmoji(data.countryCode));
      } catch (error) {
        setGeoCodingError(error.message)
      } finally {
        setIsLoadingGeoCoding(false);
      }
    }

    fetchLocationData();
  }, [lat, lng]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!cityName || !country) return;
    
    const newBookmark = {
      cityName,
      country,
      countryCode,
      latitude: lat,
      longitude: lng,
      host_location: cityName + ' ' + country
    };

    await createBookmark(newBookmark)
    navigate('/bookmark/')
  };

  if (isLoadingGeoCoding) return <p>Loading...</p>;
  if (geoCodingError) return <p>{geoCodingError}</p>

  return (
    <>
      <h2 className="font-bold text-xl text-start">Bookmark New Location</h2>
      <form className="flex flex-col gap-4 mt-6" onSubmit={handleSubmit}>
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="cityname" className="text-slate-500">
            City Name:{" "}
          </label>
          <input
            value={cityName}
            onChange={(e) => {
              e.target.value;
            }}
            type="text"
            name="cityname"
            id="cityname"
            className="border-solid border-slate-400 border-[2px] rounded-xl px-3 py-1.5 outline-none font-medium w-full"
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="cityname" className="text-slate-500">
            Country Name:{" "}
          </label>
          <input
            value={country}
            onChange={(e) => {
              e.target.value;
            }}
            type="text"
            name="cityname"
            id="cityname"
            className="border-solid border-slate-400 border-[2px] rounded-xl px-3 py-1.5 outline-none font-medium w-full"
          />
          <span className="absolute bottom-[26rem] left-[31rem]">{countryCode}</span>
        </div>
        <div className="flex flex-row items-start justify-between mt-4">
          <button
            className="border-solid border-blue-500 border-2 px-2 py-1 rounded-xl text-blue-500 hover:bg-blue-500 hover:text-slate-100 w-[6rem] font-medium"
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            &larr; Back
          </button>
          <button className="border-solid border-blue-500 border-2 px-2 py-1 rounded-xl text-blue-500 hover:bg-blue-500 hover:text-slate-100 w-[6rem] font-medium">
            Add
          </button>
        </div>
      </form>
    </>
  );
}

export default AddNewBookmark;
