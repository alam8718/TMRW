import React from "react";
import {Link} from "react-router-dom";
import Accordian from "./Accordian";

function TvDetails({data}) {
  const link = data.homepage;


  return (
    <>
      <div className="">
        <Link className="cursor-pointer" to={link}>
          <h1 className=" md:text-3xl font-bold ">{data.name}</h1>
        </Link>
        <p className="border-b-2 pt-10 border-b-gray-00"></p>
      </div>
      <div className="my-6 md:mt-10">
        <ul className="flex flex-col  gap-4">
          <li className="flex gap-2">
            <p className="font-semibold">Is the movie for Adults:</p>
            {data.adult ? "Yes" : "No"}
          </li>
          <li className="flex gap-2">
            <p className="font-semibold">Created By: </p>
            {data.created_by.map((name) => name.name)}
          </li>
          <li className="flex gap-2">
            <p className="font-semibold">Genres:</p>
            {data.genres.map((genre) => genre.name).join(",")}
          </li>
          <li className="flex gap-2">
            <p className="font-semibold">Popularity: </p>
            {data.popularity}
          </li>
          <li className="flex gap-2">
            <p className="font-semibold">Release Date: </p>
            {data.first_air_date}
          </li>
          <li className="flex gap-2">
            <p className="font-semibold">Vote Average:</p>
            {data.vote_average}
          </li>
          <li className="flex gap-2">
            <p className="font-semibold ">Language: </p>
            <p className="uppercase">{data.original_language}</p>
          </li>
          <li className="">
            <p className="font-semibold">Number of Seasons: </p>
            <Accordian info={data.seasons} />
          </li>
        </ul>
      </div>
    </>
  );
}

export default TvDetails;
