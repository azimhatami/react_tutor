import { useNavigate } from "react-router-dom";
import useUrlLocation from "../../hooks/useUrlLocation";

function AddNewBookmark() {
    const navigate = useNavigate();
    const [lat, lng] = useUrlLocation();
  return (
    <>
      <h2 className="font-bold text-xl text-start">Bookmark New Location</h2>
      <form className="flex flex-col gap-4 mt-6">
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="cityname" className="text-slate-500">
            City Name:{" "}
          </label>
          <input
            type="text"
            name="cityname"
            id="cityname"
            className="border-solid border-slate-400 border-[2px] rounded-xl px-3 py-1.5 outline-none font-medium w-full"
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="cityname" className="text-slate-500">
            City Name:{" "}
          </label>
          <input
            type="text"
            name="cityname"
            id="cityname"
            className="border-solid border-slate-400 border-[2px] rounded-xl px-3 py-1.5 outline-none font-medium w-full"
          />
        </div>
        <div className="flex flex-row items-start justify-between mt-4">
          <button 
          className="border-solid border-blue-500 border-2 px-2 py-1 rounded-xl text-blue-500 hover:bg-blue-500 hover:text-slate-100 w-[6rem] font-medium"
          onClick={(e) => {
            e.preventDefault();
            navigate(-1)
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
