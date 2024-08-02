import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

function DarkLightButton() {
  const [statusTheme, setStatusTheme] = useState("dark");

  //  for get the stored theme in local storage when the page refeshed
  useEffect(function () {
    const getStoredThemeStatus = localStorage.getItem("themeStatus");
    if (getStoredThemeStatus) {
      setStatusTheme(getStoredThemeStatus);
      document.documentElement.classList.add(getStoredThemeStatus);
    }
  }, []);

  //   for switch when we use the button of switch theme and store in local storage
  function handleStatusTheme() {
    const newThemeStatus = statusTheme === "light" ? "dark" : "light";
    setStatusTheme(newThemeStatus);
    localStorage.setItem("themeStatus", newThemeStatus);
    document.documentElement.classList.remove(statusTheme);
    document.documentElement.classList.add(newThemeStatus);
  }

  return (
    <button onClick={() => handleStatusTheme()}>
      {statusTheme === "light" ? (
        <MdDarkMode className="text-2xl text-black bg-white rounded-lg " />
      ) : (
        <CiLight className="text-2xl text-yellow-500 bg-white rounded-lg font-extrabold " />
      )}
    </button>
  );
}
export default DarkLightButton;
