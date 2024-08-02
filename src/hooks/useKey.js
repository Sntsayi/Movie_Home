import { useEffect } from "react";

export function useKey(key, callFunction) {
  // we use keyboard and this is sideeffect and also use Dom directly so use useEffect()

  useEffect(
    function () {
      function callBack(e) {
        if (e.code.toLowerCase === key.toLowerCase) {
          callFunction();
        }
      }
      document.addEventListener("keydown", callBack);

      //   claen up function
      return function () {
        document.removeEventListener("keydown", callBack);
      };
    },
    [key, callFunction]
  );
}
