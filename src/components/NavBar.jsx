import Logo from "./Logo";
import TitleNav from "./TitleNav";

function NavBar({ children }) {
  return (
    <>
      <nav className="rounded-lg md:flex md:justify-between space-y-3 md:space-y-0  items-center  dark:bg-purple-900 dark:text-white bg-blue-500 text-lg md:mx-4 mx-2  p-4 ">
        <div className="flex items-center justify-center gap-2">
          <Logo />
          <TitleNav text="Movie-Home" />
        </div>
        {children}
      </nav>
    </>
  );
}

export default NavBar;
