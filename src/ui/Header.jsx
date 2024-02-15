import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import JazzRadio from "../components/JazzRadio";
import { Link } from "react-router-dom";

function Header() {
  const { showSidebar, handleClick } = useContext(SidebarContext);
  return (
    <header className="col-span-12 flex items-center justify-around border-b-2 border-gray-100 bg-blue-200 py-3">
      <button
        className={`rounded-full px-3 py-1 transition-all  ${showSidebar ? "bg-yellow-300 hover:bg-yellow-500" : "bg-red-300 hover:bg-red-500"}`}
        onClick={handleClick}
      >
        {showSidebar ? "Menu X" : "Menu O"}
      </button>
      <Link to="/" className="col-span-2">
        Wave-Log
      </Link>
      <JazzRadio />
    </header>
  );
}

export default Header;
