import React, {useState} from "react";
import ColumnDisplay from "./ColumnDisplay";
import {fetchMovies, fetchTvShows} from "./FetchingData";
import {useQuery} from "@tanstack/react-query";

export default function Home() {
  const displaytype = {
    Movies: "movies",
    TvShows: "tvshows",
  };
  const [display, setDisplay] = useState("");
  const {data: movieData, isLoading: isLoadingMovies} = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  });
  const {data: tvshowData, isLoading: isLoadingTvshows} = useQuery({
    queryKey: ["tvshows"],
    queryFn: fetchTvShows,
  });

  // data: tvshowsData it basically means giveing ar alternative variable name of this data variabke as 2 cases data is the same variable
  // it's same like the importing of an component like this
  // import {fetchData as dataFetch} from "somewhere" after this line we can use dataFetch name instand of using feeetchData.

  return (
    <>
      <div className="flex justify-center mt-4 ">
        <button
          className={`px-4 py-2  font-semibold  ${
            display === displaytype.Movies ? "bg-blue-600 " : "bg-gray-400"
          }`}
          onClick={() => setDisplay(displaytype.Movies)}>
          Movies
        </button>
        <button
          className={`px-4 py-2  font-semibold ${
            display === displaytype.TvShows ? "bg-blue-600 " : "bg-gray-400"
          }`}
          onClick={() => setDisplay(displaytype.TvShows)}>
          TvShows
        </button>
      </div>

      {
        <div>
          {display === "movies" ? (
            <ColumnDisplay data={movieData.results} type="movies" />
          ) : (
            <ColumnDisplay data={tvshowData.results} type="tvshows" />
          )}
        </div>
      }
    </>
  );
}
