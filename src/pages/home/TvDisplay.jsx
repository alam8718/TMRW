import React from "react";

function TvDisplay({show}) {
  return (
    <>
      <div className="shadow-xl h-[670px] overflow-hidden p-4 ">
        <div className="w-[300px]  container mx-auto  flex flex-col gap-2">
          <div className="flex justify-center">
            <img
              className=" w-[300px]"
              src={`https://image.tmdb.org/t/p/original${show.poster_path}`}
              alt="movie poster "
            />
          </div>
          <h1 className="text-xl font-bold ">{show.name}</h1>
          <p className="text-sm">{`Release Date: ${show.release_date} | Rating: ${show.vote_average}`}</p>
          <p className="text-justify text-md  ">{show.overview}</p>
        </div>
      </div>
    </>
  );
}

export default TvDisplay;
