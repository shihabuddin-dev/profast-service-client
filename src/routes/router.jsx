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
import Spinner from "../components/ui/Spinner";
import PendingRiders from "../pages/dashboard/PendingRiders";
import ActiveRiders from "../pages/dashboard/ActiveRiders";
import MakeAdmin from "../pages/dashboard/MakeAdmin";
import Forbidden from "../pages/forbidden/Forbidden";
import AdminRoutes from "./AdminRoutes";
import AssignRider from "../pages/dashboard/AssignRider";
import RiderRoute from "./RiderRoute";
import PendingDeliveries from "../pages/dashboard/PendingDeliveries";
import CompletedDeliveries from "../pages/dashboard/CompletedDeliveries";
import MyEarnings from "../pages/dashboard/MyEarnings";
import DashboardHome from "../pages/dashboard/DashboardHome";

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
        hydrateFallbackElement: <Spinner />,
        loader: () => fetch("./serviceCenter.json"),
        Component: Coverage,
      }, {
        path: 'forbidden',
        Component: Forbidden
      },

      //  loader: () => fetch(`${import.meta.env.VITE_API_URL}/recipes`),

      // private routes
      {
        path: "sendParcel",
        hydrateFallbackElement: <Spinner />,
        loader: () => fetch("./serviceCenter.json"),
        element: (
          <PrivateRoutes>
            <SendParcel />
          </PrivateRoutes>
        ),
      },

      {
        path: "beARider",
        hydrateFallbackElement: <Spinner />,
        loader: () => fetch("./serviceCenter.json"),
        element: <PrivateRoutes><BeARider /></PrivateRoutes>,
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
        index: true, 
        Component: DashboardHome
      },
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
      // rider routes 
      {
        path: 'pending-deliveries',
        element: <RiderRoute><PendingDeliveries/></RiderRoute>
      },
      {
        path: 'completed-deliveries',
        element: <RiderRoute><CompletedDeliveries/></RiderRoute>
      },
      {
        path: 'my-earnings',
        element: <RiderRoute><MyEarnings/></RiderRoute>
      },

      // admin routes
      {
        path: "assign-rider",
        // element: <AssignRider />
        element: <AdminRoutes><AssignRider /></AdminRoutes>
      },
      {
        path: "pending-riders",
        element: <AdminRoutes><PendingRiders /></AdminRoutes>
      },
      {
        path: "active-riders",
        element: <AdminRoutes><ActiveRiders /></AdminRoutes>
      },
      {
        path: "makeAdmin",
        element: <AdminRoutes><MakeAdmin /></AdminRoutes>
        // element: <MakeAdmin />
      },
    ]
  },
]);

export default router;
