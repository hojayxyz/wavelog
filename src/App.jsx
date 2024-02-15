import {
  // BrowserRouter,
  // Navigate,
  // Route,
  // Routes,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import { SidebarProvider } from "./context/SidebarContext";
import AddFriend from "./pages/AddFriend";
import { FriendsProvider } from "./context/FriendsContext";
import OpenseaTest from "./pages/OpenseaTest";
import JazzRadio from "./components/JazzRadio";
import FriendsList from "./pages/FriendsList";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/feed",
        element: <Feed />,
      },
      {
        path: "/addfriend",
        element: <AddFriend />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/jazz",
        element: <JazzRadio />,
      },
      {
        path: "/friendslist",
        element: <FriendsList />,
      },
      {
        path: "/openseatest",
        element: <OpenseaTest />,
      },
    ],
  },
]);

function App() {
  return (
    <SidebarProvider>
      <FriendsProvider>
        <RouterProvider router={router} />
      </FriendsProvider>
    </SidebarProvider>
  );
}

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route element={<AppLayout />}>
//           <Route index element={<Navigate replace to="feed" />} />
//           <Route path="/" element={<Navigate replace to="feed" />} />
//           <Route path="feed" element={<Feed />} />
//           <Route path="login" element={<Login />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

export default App;
