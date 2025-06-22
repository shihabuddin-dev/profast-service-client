import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import AuthLayout from "../layout/AuthLayout";
import LogIn from "../pages/authentication/LogIn";
import Register from "../pages/authentication/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },

      //  loader: () => fetch(`${import.meta.env.VITE_API_URL}/recipes`),

      // private routes
      // {
      //   path: "/my-profile",
      //   element: (
      //     <PrivateRoutes>
      //       <MyProfile />
      //     </PrivateRoutes>
      //   ),
      // },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login", 
        Component: LogIn,
      },
      {
        path: "register", 
        Component: Register,
      },
    ],
  },
]);

export default router;
