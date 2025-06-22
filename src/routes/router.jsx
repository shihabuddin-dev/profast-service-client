import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import AuthLayout from "../layout/AuthLayout";
import LogIn from "../pages/authentication/LogIn";
import Register from "../pages/authentication/Register";
import ResetPassword from "../pages/authentication/ResetPassword";
import Coverage from "../pages/coverage/Coverage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'coverage',
        Component: Coverage

      }

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
      {
        path: "forgetPassword", 
        Component: ResetPassword,
      },
    ],
  },
]);

export default router;
