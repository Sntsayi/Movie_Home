function Summary({ average, watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRunTime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="flex flex-col gap-5  p-7 dark:bg-gray-900 bg-gray-600  text-gray-200 dark:text-gray-300  rounded-b-xl">
      <h2 className="text-xl font-semibold">Movies You Watched :</h2>
      <div className="flex gap-6">
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>

        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>

        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>

        <p>
          <span>⏳</span>
          <span>{avgRunTime.toFixed(2)} min</span>
        </p>
      </div>
    </div>
  );
}

export default Summary;
