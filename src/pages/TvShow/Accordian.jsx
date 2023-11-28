import React, {useState} from "react";
import AccordianCard from "./AccordianCard";
function Accordian({info}) {
  console.log(info);
  return (
    <>
      <div className="h-[200px] overflow-y-scroll">
        {info.map((season) => (
          <AccordianCard season={season} />
        ))}
      </div>
    </>
  );
}

export default Accordian;
