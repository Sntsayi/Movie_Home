import { useEffect, useState } from "react";

const KEY = "acc67753";
export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  //   to fetch Moveis
  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setError("");
          setIsLoading(true);
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error("Something went wrong went loading the movies !");

          const data = await res.json();
          console.log(data);
          if (data.Response === "False") throw new Error("Movie not found!");
          setMovies(data.Search);
          console.log(data.Search);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      // nothing display when the the lenght < 3 letter
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      fetchMovies();

      // cleanup function
      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return { movies, isLoading, error };
}
