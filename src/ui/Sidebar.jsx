import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { Link } from "react-router-dom";

function Sidebar() {
  const { showSidebar } = useContext(SidebarContext);

  return (
    <>
      {showSidebar ? (
        <aside className="col-span-12 overflow-y-auto border-r-2 border-solid border-gray-100 bg-yellow-200 sm:col-span-4 md:col-span-3 lg:col-span-2">
          <div>
            <ul className="m-5 flex flex-col space-y-3">
              <li>
                <Link to="/" className=" text-blue-500 hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/friendslist"
                  className="text-blue-500 hover:text-blue-600"
                >
                  Friends
                </Link>
              </li>
              <li>
                <Link
                  to="/openseatest"
                  className="text-blue-500 hover:text-blue-600"
                >
                  Opensea API test
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      ) : null}
    </>
  );
}

export default Sidebar;
