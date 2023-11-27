import {useQuery} from "@tanstack/react-query";
import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {fetchMovie} from "./moviedata";
import Details from "./Details";

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
  console.log(data);

  return (
    <>
      <div className="my-20  overflow-hidden p-4  mx-10 ">
        <div className=" container mx-auto  flex border flex-col md:flex-row md:gap-10 gap-2 p-10">
          <div className="w-[400px]  flex justify-center">
            <img
              className=""
              src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
              alt="movie poster "
            />
          </div>
          <div className="md:w-[50%] flex flex-col ">
            <Details data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Movie;
