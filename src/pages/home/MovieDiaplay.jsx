import React from "react";

function MovieDiaplay({movie}) {
  return (
    <>
      <div className="shadow-xl h-[700px] overflow-hidden p-4 ">
        <div className="w-[300px] container mx-auto  flex flex-col gap-2 ">
          <div className="flex justify-center">
            <img
              className=" w-[300px] "
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="movie poster "
            />
          </div>
          <h1 className="text-xl font-bold ">{movie.title}</h1>
          <p className="text-sm">{`Release Date: ${movie.release_date} | Rating: ${movie.vote_average}`}</p>
          <p className="text-justify text-md  ">{`${movie.overview.slice(
            0,
            200
          )}... `}</p>
        </div>
      </div>
      
    </>
  );
}

export default MovieDiaplay;
