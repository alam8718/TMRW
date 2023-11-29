import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, {useState} from "react";
import {IoIosStarHalf} from "react-icons/io";
import {rateMovie, rateTvshow} from "./GetRate";

function Rated({id, type}) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    {
      type === "movies"
        ? rateMovie(id, inputValue)
        : rateTvshow(id, inputValue);
    }
  };
  const handleChange = (e) => {
    setInputValue(Number(e.target.value));
  };

  return (
    <>
      <div className="mt-3">
        <form onSubmit={handleSubmit} className=" flex  gap-4">
          <input
            className="bg-purple-400 rounded-md outline-none p-2"
            type="number"
            min={0}
            max={10}
            step={0.5}
            value={inputValue}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="flex items-center gap-3 px-4 py-2 rounded-md bg-purple-400 font-semibold">
            Rate <IoIosStarHalf size={20} />
          </button>
        </form>
      </div>
    </>
  );
}

export default Rated;
