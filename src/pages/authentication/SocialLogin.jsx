import { FcGoogle } from "react-icons/fc";
import Button from "../../components/ui/Button";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";

const SocialLogin = () => {
  const { setUser, createUserWithGoogle } = useAuth();
  const location = useLocation()
  const navigate = useNavigate()
  const form = location.state?.form || '/'
  const axiosInstance = useAxios()


  const handleGoogleSignIn = () => {
    createUserWithGoogle()
      .then(async (result) => {
        const user = result.user
        // update user profile in the database
        const userInfo = {
          email: user.email,
          role: 'user', // default role
          created_at: new Date().toISOString(),
          last_log_in: new Date().toISOString()
        }
        const userRes = await axiosInstance.post('/users', userInfo)
        console.log('user update info',userRes.data)

        setUser(result.user)
        navigate(form)
        Swal.fire({
          icon: "success",
          title: "Google Logged in Successfull",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="flex items-center mb-4">
        <div className="flex-grow h-px bg-gray-200" />
        <span className="mx-2 text-gray-400 text-sm">Or</span>
        <div className="flex-grow h-px bg-gray-200" />
      </div>
      <Button
        onClick={handleGoogleSignIn}
        variant="google"
        className="w-full mb-4"
      >
        <FcGoogle className="text-xl" />
        Login with google
      </Button>
    </div>
  );
};

export default SocialLogin;
