function SearchInput({ query, setQuery }) {
  return (
    <div className="flex items-center justify-center ">
      <input
        className="block  dark:bg-purple-500 border-none dark:text-white p-1.5 px-2 rounded-lg md:w-80 opacity-90 outline-none   border border-purple-800 focus:-translate-y-1 focus:shadow-2xl focus:shadow-black transition-all duration-300 placeholder:text-gray-600"
        type="text"
        placeholder="Search Movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
