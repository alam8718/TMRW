import React, {useState} from "react";
import {IoMdArrowDropright} from "react-icons/io";

function AccordianCard({season}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <div className="flex flex-col w-full  border-b py-1">
        <div className="">
          <button onClick={handleOpen} className="flex ">
            <IoMdArrowDropright size={30} />
            {season.name}
          </button>
        </div>
        <div
          className={`overflow-hidden flex flex-col ${
            open ? "ml-7 p-2 border w-[50%]" : "hidden"
          }`}>
          <span>{`Air date : ${season.air_date}`}</span>
          <span>{`Episord : ${season.episode_count}`}</span>
        </div>
      </div>
    </>
  );
}

export default AccordianCard;
