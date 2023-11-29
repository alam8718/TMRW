import React, {useEffect, useState} from "react";
import MovieDiaplay from "./MovieDiaplay";
import TvDisplay from "./TvDisplay";
import {Link} from "react-router-dom";
import Rated from "./Rated";

function Home({movie}) {
  const [movies, setMovies] = useState(null);
  const [tvshows, setTvShows] = useState(null);
  const [showWho, setShowWho] = useState("movies");
  const [count, setCount] = useState(1);

  const nextPage = () => {
    setCount(count + 1);
  };
  console.log(count);
  const prevPage = () => {
    setCount(count - 1);
  };

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
          `https://api.themoviedb.org/3/movie/popular?api_key=${
            import.meta.env.VITE_API_KEY
          }&language=en-US&page=${count}`
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
          `https://api.themoviedb.org/3/tv/popular?api_key=${
            import.meta.env.VITE_API_KEY
          }&language=en-US&page=${count}`
        );
        const data = await response.json();
        setTvShows(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    getMovies();
    getTvShows();
  }, [count]);

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
                <div key={index} className="flex flex-col">
                  <Link to={`/movie/${movie.id}`}>
                    <div>
                      <MovieDiaplay movie={movie} />
                    </div>
                  </Link>
                  <Rated type="movies" id={movie.id} />
                </div>
              ))
            ) : (
              <p>Loading....</p>
            )}
          </>
        ) : (
          <>
            {tvshows ? (
              tvshows.map((show, index) => (
                <div key={index} className="flex flex-col">
                  <Link to={`/tvshow/${show.id}`}>
                    <div>
                      <TvDisplay show={show} />
                    </div>
                  </Link>
                  <Rated type="tvshow" id={show.id} />
                </div>
              ))
            ) : (
              <p>Loading....</p>
            )}
          </>
        )}
      </div>

      {/* page change  */}

      <div className="my-20 ">
        <div className="flex justify-center gap-60">
          <button
            className={`px-8 py-1 transition-all duration-300  rounded-md ${
              count < 1 ? "bg-amber-400/60 " : " bg-amber-400 "
            }`}
            onClick={prevPage}
            disabled={count < 1}>
            Previous
          </button>
          <button
            className={`px-8 py-1 transition-all duration-300  rounded-md ${
              count > 9 ? "bg-amber-400/60 " : " bg-amber-400 "
            }`}
            onClick={nextPage}
            disabled={count > 9}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
