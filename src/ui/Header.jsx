import { useContext } from "react";
import { Link } from "react-router-dom";
import { SidebarContext } from "../context/SidebarContext";

function Header() {
  const { showSidebar, handleClick } = useContext(SidebarContext);
  return (
    <header className="col-span-12 flex items-center justify-between border-b-2 border-gray-100 bg-blue-200 p-4">
      <Link to="/" className=" text-blue-500 hover:text-blue-600">
        Home
      </Link>
      <p>Hojay</p>
      <button
        className={`w-6 rounded-full  px-1 transition-all  ${showSidebar ? "bg-yellow-300 hover:bg-yellow-500" : "bg-red-300 hover:bg-red-500"}`}
        onClick={handleClick}
      >
        {showSidebar ? "X" : "O"}
      </button>
    </header>
  );
}

export default Header;
