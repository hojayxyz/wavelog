import { useContext } from "react";
import { Link } from "react-router-dom";
import { SidebarContext } from "../context/SidebarContext";
import JazzRadio from "../components/JazzRadio";

function Header() {
  const { showSidebar, handleClick } = useContext(SidebarContext);
  return (
    <header className="col-span-12 flex items-center justify-center space-x-5 border-b-2 border-gray-100 bg-blue-200 p-4">
      <button
        className={`rounded-full px-3 py-1 transition-all  ${showSidebar ? "bg-yellow-300 hover:bg-yellow-500" : "bg-red-300 hover:bg-red-500"}`}
        onClick={handleClick}
      >
        {showSidebar ? "Sidebar X" : "Sidebar O"}
      </button>
      <Link to="/" className="col-span-9 text-blue-500 hover:text-blue-600">
        Home
      </Link>
      <p className="col-span-2">Wave-Log</p>
      <JazzRadio />
    </header>
  );
}

export default Header;
