import Spinner from "../../components/ui/Spinner";
import useUserRole from "../../hooks/useUserRole";
import Forbidden from "../forbidden/Forbidden";
import AdminDashboard from "./AdminDashboard";
import RiderDashboard from "./RiderDashboard";
import UserDashboard from "./UserDashboard";

const DashboardHome = () => {
    const {role, roleLoading}=useUserRole()
    
    if(roleLoading){
        return <Spinner/>
    }
    if(role==='user'){
        return <UserDashboard/>
    }
   else if(role==='rider'){
        return <RiderDashboard/>
    }
   else if(role==='admin'){
        return <AdminDashboard/>
    }
    else{
        return <Forbidden/>
    }
};

export default DashboardHome;