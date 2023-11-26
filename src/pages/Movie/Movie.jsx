import {useQuery} from "@tanstack/react-query";
import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {fetchMovie} from "./moviedata";

function Movie() {
  const {id} = useParams();
  if (!id) {
    return <p>Invalid Id </p>;
  }

  const {data, isLoading} = useQuery({
    queryKey: ["movie"],
    queryFn: () => fetchMovie(id),
  });
  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <div className="mt-10 h-screen overflow-hidden p-4 ">
        <div className=" container mx-auto  flex flex-col md:flex-row md:gap-10 gap-2">
          <div className="w-[400px] sm:w-[300px] lg:w-[500px] flex justify-center">
            <img
              className=""
              src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
              alt="movie poster "
            />
          </div>
          <div className="md:w-[50%] flex flex-col ">
            <div>
              <h1 className=" md:text-3xl font-bold ">{data.title}</h1>
              <p className="text-md">{`Release Date: ${data.release_date} | Rating: ${data.vote_average}`}</p>
            </div>
            <div className="mt-4 md:mt-10">
              <h1 className=" md:text-xl font-semibold">Overview:</h1>
              <p className="text-justify md:text-lg ">{data.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Movie;
