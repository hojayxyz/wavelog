import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="grid grid-cols-12 w-full h-screen bg-red-300">
      <Header />
      <Sidebar />
      <main className="bg-green-200 h-[calc(100vh-6rem)] col-span-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
