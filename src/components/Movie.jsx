function Movie({ movie, onSelectMovie }) {
  //   console.log(movie.imbdID);
  return (
    <li
      onClick={() => onSelectMovie(movie.imdbID)}
      className="flex gap-3 border-b border-gray-600  p-2 hover:bg-gray-900 transition-all duration-300 cursor-pointer"
    >
      <img
        src={movie.Poster}
        alt={`${movie.Title} poster`}
        className="w-16 h-20 object-center"
      />

      <div className="font-semibold text-lg dark:text-gray-300 text-gray-600">
        <h3>{movie.Title}</h3>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
export default Movie;
