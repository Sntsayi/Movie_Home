import { useEffect, useRef, useState } from "react";
import Loader from "./Loader";
import StarRating from "./StarRating";
import { useKey } from "../hooks/useKey";

function MovieDetails({ selectedID, onCloseMovie, onAddWatched, watched }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const countRef = useRef(0);

  useEffect(
    function () {
      if (userRating) countRef.current++;
    },
    [userRating]
  );

  //   to know the selectedID movie is already watched or not
  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedID);

  //   if  user already watched we get the user rating and show in jsx bottom
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedID
  )?.userRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Released: released,
    Plot: plot,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedID,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ")[0]),
      userRating,
      countRatingDescision: countRef.current,
      // count,
    };
    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  //   useKey
  useKey("Escape", onCloseMovie);

  //   useEffect for get the data by id
  const KEY = "acc67753";
  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedID}`
        );
        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
      }
      getMovieDetails();
    },
    [selectedID]
  );

  //   useEffect for change the title in DOM
  useEffect(
    function () {
      if (!title) return;
      document.title = `Movie : ${title}`;

      // cleanUpfunction
      return function () {
        document.title = "Movie-Home";
      };
    },
    [title]
  );

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header className="relative mb-3 dark:text-gray-300 text-gray-200 dark:bg-gray-900 bg-gray-600">
            <button
              className="absolute bg-white rounded-full px-2 text-center text-2xl font-bold text-black top-2 left-2"
              onClick={() => onCloseMovie()}
            >
              &larr;
            </button>

            <div className="flex gap-x-5">
              <img
                className="w-32 h-48"
                src={poster}
                alt={`Poster of ${movie} movie`}
              />

              <div className="mt-3 flex flex-col gap-y-3">
                <h2 className="text-2xl font-bold text-gray-200">{title}</h2>
                <p className="font-light">{released}</p>
                <p className="font-light">{genre}</p>
                <p className="font-light pb-2 ">
                  <span>✔</span> {imdbRating} IMDB rating
                </p>
              </div>
            </div>
          </header>

          <section>
            <div>
              {!isWatched ? (
                <>
                  <div className="dark:bg-gray-700 bg-gray-600 mt-10 mx-9 py-5 px-5 text-center rounded-lg">
                    <StarRating
                      maxLength={10}
                      size={24}
                      defaultRating={2}
                      onSetRating={setUserRating}
                      className=" "
                    />
                    {userRating > 1 && (
                      <button
                        className=" bg-purple-700 mt-5 p-1 rounded-full w-full"
                        onClick={handleAdd}
                      >
                        + Add to list
                      </button>
                    )}
                  </div>
                </>
              ) : (
                <p className="dark:bg-gray-700 bg-gray-600 mt-10 mx-9 py-5 px-5 text-center rounded-lg">
                  You rated this movie! {watchedUserRating}
                </p>
              )}
            </div>

            <div className="mx-9 mt-6 dark:text-gray-300 text-gray-600">
              <p>
                <em>{plot}</em>
              </p>

              <p className="mt-3">Starring : {actors}</p>
              <p className="mt-3">Directed by : {director}</p>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
