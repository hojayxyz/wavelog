import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="grid grid-cols-12 grid-rows-[auto_auto_1fr_auto] sm:grid-rows-[auto_1fr_auto] w-full h-screen bg-red-300">
      <Header />
      <Sidebar />
      <main className="bg-green-200 col-span-12 sm:col-span-8 md:col-span-9 lg:col-span-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
