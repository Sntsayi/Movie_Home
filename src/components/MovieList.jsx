import Movie from "./Movie";

function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className="overflow-auto p-3 grid  mt-3 ">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}
export default MovieList;
