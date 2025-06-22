import { FcGoogle } from "react-icons/fc";
import Button from "../../components/ui/Button";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  const { setUser,createUserWithGoogle } = useAuth();
  const handleGoogleSignIn = () => {
    createUserWithGoogle()
      .then((result) => {
        setUser(result.user)
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
