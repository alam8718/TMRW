import React from "react";
import {Link} from "react-router-dom";

function Details({data}) {
  const link = data.homepage;
  return (
    <>
      <div className="">
        <Link className="cursor-pointer" to={link}>
          <h1 className=" md:text-3xl font-bold ">{data.title}</h1>
        </Link>
        <p className="border-b-2 pt-10 border-b-gray-00"></p>
      </div>
      <div className="mt-4 md:mt-10">
        <ul className="flex flex-col  gap-4">
          <li className="flex gap-2">
            <p className="font-semibold">Is the movie for Adults:</p>
            {data.adult ? "Yes" : "No"}
          </li>
          <li className="flex gap-2">
            <p className="font-semibold">Budget:</p>
            {data.budget}
          </li>
          <li className="flex gap-2">
            <p className="font-semibold">Genres:</p>
            {data.genres.map((genre) => genre.name).join(",")}
          </li>
          <li className="flex gap-2">
            <p className="font-semibold">IMDB ID: </p>
            {data.imdb_id}
          </li>
          <li className="flex gap-2">
            <p className="font-semibold">Popularity: </p>
            {data.popularity}
          </li>
          <li className="flex gap-2">
            <p className="font-semibold">Release Date: </p>
            {data.release_date}
          </li>
          <li className="flex gap-2">
            <p className="font-semibold">Revenue: </p>
            {data.revenue}
          </li>
          <li className="flex gap-2">
            <p className="font-semibold">Runtime:</p>
            {data.runtime}
          </li>
          <li className="flex gap-2">
            <p className="font-semibold">Vote Average:</p>
            {data.vote_average}
          </li>
          <li className="flex gap-2">
            <p className="font-semibold">Language: </p>
            {data.original_language}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Details;
