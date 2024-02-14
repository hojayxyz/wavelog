import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export const SidebarContext = createContext();

function AppLayout() {
  const [showSidebar, setShowSidebar] = useState(true);

  function handleClick() {
    setShowSidebar(!showSidebar);
  }

  return (
    <SidebarContext.Provider
      value={{
        showSidebar,
        handleClick,
      }}
    >
      <div
        className={`grid h-screen w-full grid-cols-12 ${showSidebar ? "grid-rows-[auto_auto_1fr_auto]" : "grid-rows-[auto_1fr_auto]"} bg-red-300 sm:grid-rows-[auto_1fr_auto]`}
      >
        <Header />
        <Sidebar />
        <main
          className={`${showSidebar ? "col-span-12 sm:col-span-8 md:col-span-9 lg:col-span-10" : "col-span-12"} bg-green-200`}
        >
          <Outlet />
        </main>
        <Footer />
      </div>
    </SidebarContext.Provider>
  );
}

export default AppLayout;
