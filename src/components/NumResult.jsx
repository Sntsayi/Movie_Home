function NumResult({ movies = 0 }) {
  return (
    <span className=" dark:font-light inline-block mt-3 ">
      Found <strong>{movies.length}</strong> Movie
    </span>
  );
}
export default NumResult;
