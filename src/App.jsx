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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
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
