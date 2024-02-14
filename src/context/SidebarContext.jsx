import { createContext, useState } from "react";

const SidebarContext = createContext();

function SidebarProvider({ children }) {
  const [showSidebar, setShowSidebar] = useState(true);

  function handleClick() {
    setShowSidebar(!showSidebar);
  }

  return (
    <SidebarContext.Provider
      value={{
        showSidebar: showSidebar,
        handleClick: handleClick,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export { SidebarProvider, SidebarContext };
