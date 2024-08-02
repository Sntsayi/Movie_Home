import WatchedMovie from "./WatchedMovie";

function WatchedMoviesList({ watched, onDeleteWatched }) {
  return (
    <ul className="p-2 overflow-auto">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          onDeleteWatched={onDeleteWatched}
          key={movie.imdbID}
        />
      ))}
    </ul>
  );
}

export default WatchedMoviesList;
