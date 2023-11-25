import React, {useState} from "react";
function ColumnDisplay({data, type}) {
  return (
    <>
      <div>
        {type === "movies" ? (
          <>
            <div>
              <p>{data[6].title}</p>
              <img
                className="w-44"
                src={`https://image.tmdb.org/t/p/original${data[6].poster_path}`}
                alt="movie poster "
              />
            </div>
            <div>
              <p>{data[3].title}</p>
              <img
                className="w-44"
                src={`https://image.tmdb.org/t/p/original${data[3].poster_path}`}
                alt="movie poster "
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <p>{data[8].name}</p>
              <img
                className="w-44"
                src={`https://image.tmdb.org/t/p/original${data[8].poster_path}`}
                alt="movie poster "
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ColumnDisplay;
