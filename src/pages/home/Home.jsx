import React, {useEffect, useState} from "react";
import MovieDiaplay from "./MovieDiaplay";
import TvDisplay from "./TvDisplay";
import {Link} from "react-router-dom";
import Movie from "../Movie/Movie";
import TvShow from "../TvShow/TvShow";

function Home({movie}) {
  const [movies, setMovies] = useState(null);
  const [tvshows, setTvShows] = useState(null);
  const [showWho, setShowWho] = useState("movies");

  const handleShowMovies = () => {
    setShowWho("movies");
  };
  const handleTvShows = () => {
    setShowWho("tvshows");
  };

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=36ba223f2c548f9ed94cf82a71a03277&language=en-US&page=1"
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    const getTvShows = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/tv/popular?api_key=36ba223f2c548f9ed94cf82a71a03277&language=en-US&page=2"
        );
        const data = await response.json();
        setTvShows(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    getMovies();
    getTvShows();
  }, []);
  return (
    <>
      {/* top buttons  */}
      <div className="flex justify-center mt-4  ">
        <button
          className={
            showWho === "movies"
              ? `bg-blue-500 px-4 py-2 font-semibold`
              : `bg-gray-300 px-4 py-2 font-semibold`
          }
          onClick={handleShowMovies}>
          Movies
        </button>
        <button
          className={
            showWho === "tvshows"
              ? `bg-blue-500 px-4 py-2 font-semibold`
              : `bg-gray-300 px-4 py-2 font-semibold`
          }
          onClick={handleTvShows}>
          TvShows
        </button>
      </div>

      <div className="my-12 flex flex-wrap justify-center gap-4 md:gap-10 container mx-auto ">
        {showWho === "movies" ? (
          <>
            {movies ? (
              movies.map((movie, index) => (
                <>
                  <Link to={`/movie/${movie.id}`}>
                    <div key={index}>
                      <MovieDiaplay movie={movie}  />
                    </div>
                  </Link>
                </>
              ))
            ) : (
              <p>Loading....</p>
            )}
          </>
        ) : (
          <>
            {tvshows ? (
              tvshows.map((show, index) => (
                <>
                  <Link to={`/tvshow/${show.id}`}>
                    <div key={index}>
                      <TvDisplay show={show}   />
                    </div>
                  </Link>
                </>
              ))
            ) : (
              <p>Loading....</p>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Home;
