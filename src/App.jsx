import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SidebarProvider } from "./context/SidebarContext";
import { FriendsProvider } from "./context/FriendsContext";

import OpenseaTest from "./pages/OpenseaTest";
import FriendsList from "./pages/FriendsList";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/friendslist",
        element: <FriendsList />,
      },
      {
        path: "/openseatest",
        element: <OpenseaTest />,
      },
      {
        path: "/*",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <SidebarProvider>
        <FriendsProvider>
          <RouterProvider router={router} />
        </FriendsProvider>
      </SidebarProvider>
    </QueryClientProvider>
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
