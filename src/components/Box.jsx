import { useState } from "react";

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  function handleButtonIsOpen() {
    setIsOpen((open) => !open);
  }

  return (
    <div className="md:w-28rem md:max-w-2xl md:min-h-screen h-96   dark:bg-gray-800 bg-gray-300 rounded-lg relative overflow-auto ">
      <button
        className="absolute text-2xl font-semibold right-2 top-1 z-50 bg-gray-700 rounded-full text-center h-8 w-8"
        onClick={handleButtonIsOpen}
      >
        {isOpen ? "-" : "+"}
      </button>

      {isOpen && children}
    </div>
  );
}
export default Box;
