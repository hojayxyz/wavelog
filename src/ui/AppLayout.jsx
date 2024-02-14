import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="grid h-screen w-full grid-cols-12 grid-rows-[auto_auto_1fr_auto] bg-red-300 sm:grid-rows-[auto_1fr_auto]">
      <Header />
      <Sidebar />
      <main className="col-span-12 bg-green-200 sm:col-span-8 md:col-span-9 lg:col-span-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
