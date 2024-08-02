import NavBar from "./components/NavBar";
import NumResult from "./components/NumResult";
import SearchInput from "./components/SearchInput";
import Main from "./components/Main";
import Box from "./components/Box";
import { useState } from "react";
import { useMovies } from "./hooks/useMovies";
import Loader from "./components/Loader";
import MovieList from "./components/MovieList";
import ErrorMessage from "./components/ErrorMessage";
import MovieDetails from "./components/MovieDetails";
import { useLocalStorageState } from "./hooks/useLocalStorageState";
import Summary from "./components/Summary";
import WatchedMoviesList from "./components/WatchedMoviesList";
import DarkLightButton from "./components/DarkLightButton";

// this function use in summary component
const average = function (arr) {
  return arr.reduce((acc, curr, i, arr) => (acc + curr) / arr.length, 0);
};

function App() {
  const [query, setQuery] = useState("");
  const [selectedID, setSelectedID] = useState(null);
  // custom hook:
  const { movies, isLoading, error } = useMovies(query);
  const [watched, setWatched] = useLocalStorageState([], "watched");

  console.log(selectedID);
  // setSelectedID("hello");
  // handleSelectedMovie
  function handleSelectMovie(id) {
    // setSelectedID((selectedID) => (selectedID === id ? null : id));
    setSelectedID(id);
  }
  function handleCloseMovie() {
    setSelectedID(null);
  }

  function handleWatchedMovie(movie) {
    setWatched((watched) => [...watched, movie]);
  }
  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  return (
    <div className="md:p-4 p-2 dark:bg-gray-700 bg-gray-50">
      <NavBar>
        <SearchInput query={query} setQuery={setQuery} />
        <div className="space-x-5 md:block flex justify-between items-center ">
          <NumResult movies={movies} />
          <DarkLightButton />
        </div>
      </NavBar>
      {/* for MainSection */}
      <Main>
        {/* this box for the list of movie that fetched */}
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        {/* this box for the watched movie and the detal of movie */}
        <Box>
          {selectedID ? (
            <MovieDetails
              selectedID={selectedID}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleWatchedMovie}
              watched={watched}
            />
          ) : (
            <>
              <Summary average={average} watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </div>
  );
}
export default App;
