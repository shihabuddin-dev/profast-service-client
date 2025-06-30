import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import AuthLayout from "../layout/AuthLayout";
import LogIn from "../pages/authentication/LogIn";
import Register from "../pages/authentication/Register";
import ResetPassword from "../pages/authentication/ResetPassword";
import Coverage from "../pages/coverage/Coverage";
import PrivateRoutes from "./PrivateRoutes";
import MyProfile from "../pages/myprofile/MyProfile";
import SendParcel from "../pages/sendParcel/SendParcel";
import DashboardLayout from "../layout/DashBoardLayout";
import MyParcels from "../pages/dashboard/MyParcels";
import Payment from "../pages/dashboard/Payment";
import PaymentHistory from "../pages/dashboard/PaymentHistory";
import TrackParcel from "../pages/dashboard/TrackParcel";
import BeARider from "../pages/beARider/BeARider";

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
        path: "coverage",
        Component: Coverage,
        loader: () => fetch("./serviceCenter.json"),
      },

      //  loader: () => fetch(`${import.meta.env.VITE_API_URL}/recipes`),

      // private routes
      {
        path: "sendParcel",
        element: (
          <PrivateRoutes>
            <SendParcel />
          </PrivateRoutes>
        ),
        loader: () => fetch("./serviceCenter.json"),
      },

      {
        path: "beARider",
        element: <PrivateRoutes><BeARider /></PrivateRoutes>
      }
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
  {
    path: "/dashboard",
    element: <PrivateRoutes><DashboardLayout /> </PrivateRoutes>,
    children: [
      {
        path: 'myParcels',
        Component: MyParcels

      },
      {
        path: 'payment/:parcelId',
        Component: Payment,

      },
      {
        path: 'paymentHistory',
        Component: PaymentHistory,

      },
      {
        path: 'track',
        Component: TrackParcel,

      },
      {
        path: "profile",
        Component: MyProfile,
      },
    ]
  },
]);

export default router;
