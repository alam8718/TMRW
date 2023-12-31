import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import TvDetails from "./TvDetails";
import {fetchTvshows} from './tvshowsData'

function TvShow() {
  const {id} = useParams();
  if (!id) {
    return <p>Invalid Id </p>;
  }

  const {data, isLoading} = useQuery({
    queryKey: ["tvshow"],
    queryFn: () => fetchTvshows(id),
  });
  if (isLoading) {
    return <p>Loading ...</p>;
  }
  console.log(data);

  return (
    <>
      <div className="mt-10  overflow-hidden p-4 border mx-10 ">
        <div className=" container mx-auto  flex  flex-col md:flex-row md:gap-10 gap-2 p-10">
          <div className="w-[400px]  flex justify-center">
            <img
              className=""
              src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
              alt="movie poster "
            />
          </div>
          <div className="md:w-[50%] flex flex-col ">
            <TvDetails data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

export default TvShow;
