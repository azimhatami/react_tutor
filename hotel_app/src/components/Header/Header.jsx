import { useRef, useState } from "react";
import { HiCalendar, HiMinus, HiPlus } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import useOutsideClick from "../../hooks/useOutsideClick";
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { useNavigate, createSearchParams, useSearchParams } from "react-router-dom";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

export function Header() {
  const [destination, setDestination] = useState("");
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [date, setDate] = useState([
    {
      startDate: new Date(), 
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openDate, setOpenDate] = useState(false);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleOptions = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'inc' ? options[name] + 1 : options[name] - 1
      }
    });
  };

  const handleSearch = () => {
    const encodedParams = createSearchParams({
      date: JSON.stringify(date),
      destination,
      options: JSON.stringify(options)
    })
    // setSearchParams(encodedParams)
    navigate({
      pathname: '/hotels',
      search: encodedParams.toString()
    })
  }

  return (
    <>
      <div className="border-solid border-[1px] border-slate-400 rounded-md py-4">
        <div className="flex items-center justify-around">
          <div className="flex items-center width-12">
            <MdLocationPin className="text-red-400 text-3xl mr-1" />
            <input
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              type="text"
              placeholder="Where to go?"
              className="outline-none p-1 border-[1px] border-slate-400 rounded-lg"
            />
          </div>
          <span className="w-[1px] h-7 bg-slate-400"></span>
          <div className="flex items-center justify-between w-[15rem]">
            <HiCalendar className="text-purple-700 text-2xl" />
            <div onClick={() => setOpenDate(!openDate)}>
              {`${format(date[0].startDate, 'yyyy/MM/dd')} to ${format(date[0].endDate, 'yyyy/MMM/dd')}`}
            </div>
            {
              openDate && <DateRange
                            className='absolute top-[6.4rem] right-[36rem]'
                            ranges={date} 
                            onChange={(item) => setDate([item.selection])} 
                            minDate={new Date()}
                            moveRangeOnFirstSelection={true}
                          />
            }
          </div>
          <span className="w-[1px] h-7 bg-slate-400"></span>
          <div>
            <div className="" id='optionDropDown' onClick={() => setOpenOptions(!openOptions)}>
              {options.adult} adult - {options.children} children - {options.room} room
            </div>
            {
              openOptions && <GuestOptionList 
                              options={options} 
                              handleOptions={handleOptions} 
                              setOpenOptions={setOpenOptions} 
                            />
            }
          </div>
          <div>
            <button 
              className="bg-purple-700 text-slate-300 w-10 h-10 rounded-full text-2xl flex items-center"
              onClick={handleSearch}
            >
              <IoSearch className="flex m-auto" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export function GuestOptionList({ options, handleOptions, setOpenOptions }) {
  const optionsRef = useRef();
  useOutsideClick(optionsRef, 'optionDropDown',() => setOpenOptions(false));
  return (
    <>
      <div 
        className="w-56 h-30 bg-slate-200 rounded-lg absolute top-[90px] drop-shadow-xl transition-all ease-in-out duration-700 delay-700 py-2 flex flex-col gap-2"
        ref={optionsRef}
      >
        <OptionItem type="adult" options={options} minLimit={1} handleOptions={handleOptions} />
        <OptionItem type="children" options={options} minLimit={0} handleOptions={handleOptions} />
        <OptionItem type="room" options={options} minLimit={1} handleOptions={handleOptions} />
      </div>
    </>
  );
}

export function OptionItem({ type, options, minLimit, handleOptions }) {
  return (
    <>
      <div className="flex align-center justify-around">
        <span>{type}</span>
        <div className="flex align-center justify-around w-28">
          <button
            className="bg-purple-700 text-slate-50 w-8 rounded-lg flex place-content-center place-items-center"
            disabled={options[type] <= minLimit}
            onClick={() => handleOptions(type, 'dec')}
          >
            <HiMinus />
          </button>
          <span>{options[type]}</span>
          <button 
            className="bg-purple-700 text-slate-50 w-8 rounded-lg flex place-content-center place-items-center"
            onClick={() => handleOptions(type, 'inc')}
          >
            <HiPlus />
          </button>
        </div>
      </div>
    </>
  );
}
