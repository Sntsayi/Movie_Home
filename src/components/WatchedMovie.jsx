function WatchedMovie({ movie, onDeleteWatched }) {
  return (
    <li className="relative flex  gap-x-3 border-b border-gray-600  p-2 dark:text-gray-300 text-gray-600 ">
      <img
        className="w-16 h-20"
        src={movie.poster}
        alt={`${movie.title} poster`}
      />
      <div>
        <h3 className="text-base font-bold">{movie.title}</h3>
        <div className="flex gap-3 mt-3">
          <p>
            <span>⭐️</span>
            <span>{movie.imdbRating}</span>
          </p>
          <p>
            <span>🌟</span>
            <span>{movie.userRating}</span>
          </p>
          <p>
            <span>⏳</span>
            <span>{movie.runtime} min</span>
          </p>
        </div>
        <button
          className="absolute top-10 right-5 bg-red-500 px-2 rounded-full text-black text-sm hover:translate-y-0.5 transition-all duration-200"
          onClick={() => onDeleteWatched(movie.imdbID)}
        >
          X
        </button>
      </div>
    </li>
  );
}

export default WatchedMovie;
