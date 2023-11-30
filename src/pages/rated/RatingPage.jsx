import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import MovieDiaplay from "../home/MovieDiaplay";
import TvDisplay from "../home/TvDisplay";
import Auth from "../auth/Auth";

function RatingPage() {
  const [ratedMovies, setRatedMovies] = useState(null);
  const [ratedTvShows, setRatedTvShows] = useState(null);
  const [showWho, setShowWho] = useState("movies");

  const handleShowMovies = () => {
    setShowWho("movies");
  };
  const handleTvShows = () => {
    setShowWho("tvshows");
  };

  useEffect(() => {
    const fetchRatedMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/guest_session/${localStorage.getItem(
            "guest_session_id"
          )}/rated/movies?language=en-US&page=1&sort_by=created_at.asc&api_key=${
            import.meta.env.VITE_API_KEY
          }`
        );
        const data = await response.json();
        setRatedMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRatedTvshows = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/guest_session/${localStorage.getItem(
            "guest_session_id"
          )}/rated/tv?language=en-US&page=1&sort_by=created_at.asc&api_key=${
            import.meta.env.VITE_API_KEY
          }`
        );
        const data = await response.json();
        setRatedTvShows(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRatedMovies();
    fetchRatedTvshows();
  }, []);

  return (
    <>
      {/* top buttons  */}
      <div className=" container mx-auto sm:mx-20  mt-10  ">
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

      {/* rated header  */}
      <div className="flex justify-center border mx-20 mt-10">
        {showWho === "movies" ? (
          <h1 className="text-4xl py-4">Rated Movies</h1>
        ) : (
          <h1 className="text-4xl py-4">Rated TV Shows</h1>
        )}
      </div>

      <div className="my-12 flex flex-wrap justify-center gap-4 md:gap-10 container mx-auto ">
        {showWho === "movies" ? (
          <>
            {ratedMovies ? (
              ratedMovies.map((movie, index) => (
                <div key={index} className="flex flex-col">
                  <Link to={`/movie/${movie.id}`}>
                    <div>
                      <MovieDiaplay movie={movie} />
                    </div>
                  </Link>
                  <div>
                    <h1 className="mt-4 w-[50%] px-3 py-2 bg-green-500 text-white font-semibold flex items-center  ">
                      Your Rating: {movie.rating}
                    </h1>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-3xl">Login First ....... </p>
            )}
          </>
        ) : (
          <>
            {ratedTvShows ? (
              ratedTvShows.map((show, index) => (
                <div key={index} className="flex flex-col">
                  <Link to={`/tvshow/${show.id}`}>
                    <div>
                      <TvDisplay show={show} />
                    </div>
                  </Link>
                  <div>
                    <h1 className="mt-4 w-[50%] px-3 py-2 bg-green-500 text-white font-semibold flex items-center  ">
                      Your Rating: {show.rating}
                    </h1>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-3xl">Login First ....... </p>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default RatingPage;
