import { Navigate } from "react-router";
import Spinner from "../components/ui/Spinner";
import useAuth from "../hooks/useAuth";
import useUserRole from "../hooks/useUserRole";

const AdminRoutes = ({ children }) => {
    const { user, loading } = useAuth()
    const { role, roleLoading } = useUserRole()

    // when loading true show spinner
    if (loading || roleLoading) {
        return <Spinner />;
    }
    // if user role don't match 
    if (!user || role !== 'admin') {
        return <Navigate state={{ from: location?.pathname }} to="/forbidden" />;
    }
    return children
};

export default AdminRoutes;