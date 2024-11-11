import { useState } from "react";
import { HiCalendar } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";

function Header() {
  const [destination, setDestination] = useState('');
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
          <div className="flex items-center justify-between w-[7rem]">
            <HiCalendar className="text-purple-700 text-2xl"/>
            <div>2024/05/11</div>
          </div>
          <span className="w-[1px] h-7 bg-slate-400"></span>
          <div>
            <div>1 adult - 2 children - 1 room</div>
          </div>
          <div>
            <button className="bg-purple-700 text-slate-300 w-10 h-10 rounded-full text-2xl flex items-center">
              <IoSearch className="flex m-auto"/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
