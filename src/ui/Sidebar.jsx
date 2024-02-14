import { useState } from "react";

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(true);

  function handleClick() {
    setShowSidebar(!showSidebar);
  }

  return (
    <>
      <aside className="col-span-12 border-r-2 border-solid border-gray-100 bg-yellow-200 p-4 sm:col-span-4 md:col-span-3 lg:col-span-2">
        <div className="flex items-start justify-between ">
          <p>Sidebar</p>
          <button
            className={`w-6 rounded-full  px-1 transition-all  ${showSidebar ? "bg-yellow-300 hover:bg-yellow-500" : "bg-red-300 hover:bg-red-500"}`}
            onClick={handleClick}
          >
            {showSidebar ? "X" : "O"}
          </button>
        </div>
        {showSidebar && <div>Show this only when it's open</div>}
      </aside>
    </>
  );
}

export default Sidebar;
