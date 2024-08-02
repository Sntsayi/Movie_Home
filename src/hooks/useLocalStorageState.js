import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  // It's important to understand: this is for the initial rendering of the useState and when the page reloaded, for that i use the callback function
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    // console.log(storedValue);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });
  // this useEffect for the set the watched movies in the local storage ,and it is synchronous and use it in initial the useState in first.
  // local storage get the to key value pair that they are string ,because in setItem i use JSON.stringify() and when the getItem in initial state i use JSON.parse()
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
