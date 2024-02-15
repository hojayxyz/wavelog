import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { Link } from "react-router-dom";

function Sidebar() {
  const { showSidebar } = useContext(SidebarContext);

  return (
    <>
      {showSidebar ? (
        <aside className="col-span-12 overflow-y-auto border-r-2 border-solid border-gray-100 bg-yellow-200 p-4 sm:col-span-4 md:col-span-3 lg:col-span-2">
          <div>
            <span className="font-semibold text-stone-800">Sidebar</span>
            <ul className="flex flex-col">
              <li>
                <Link to="/friendslist">Friends</Link>
              </li>
              <li>
                <Link to="/openseatest">Opensea API test</Link>
              </li>
            </ul>
          </div>
        </aside>
      ) : null}
    </>
  );
}

export default Sidebar;
