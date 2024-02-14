import { useContext } from "react";
import { SidebarContext } from "./AppLayout";

function Sidebar() {
  const { showSidebar } = useContext(SidebarContext);
  return (
    <>
      {showSidebar ? (
        <aside className="col-span-12 border-r-2 border-solid border-gray-100 bg-yellow-200 p-4 sm:col-span-4 md:col-span-3 lg:col-span-2">
          <div className="flex items-start justify-between ">
            <p>Sidebar</p>
          </div>
        </aside>
      ) : null}
    </>
  );
}

export default Sidebar;
