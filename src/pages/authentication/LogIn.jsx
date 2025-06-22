import { useForm } from "react-hook-form";
import { Link } from "react-router";
import Button from "../../components/ui/Button";
import SocialLogin from "./SocialLogin";
import useAuth from "../../hooks/useAuth";

const LogIn = () => {
  const { setUser,signInUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signInUser(data.email, data.password)
      .then((userCredential) => {
        const currentUser = userCredential.user;
        setUser(currentUser)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
        <p className="mb-6 text-gray-700">Login with ProFast</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="block text-sm font-semibold mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Email"
            className="w-full mb-4 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-200"
          />
          {errors.email?.type === "required" && (
            <span className="text-red-500 text-xs">Invalid Email</span>
          )}
          <label
            className="block text-sm font-semibold mb-1"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 20,
            })}
            placeholder="Password"
            className="w-full mb-2 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-200"
          />
          {errors.password?.type === "required" && (
            <span className="text-red-500 text-xs">Invalid Password</span>
          )}
          {errors.password?.type === "minLength" && (
            <span className="text-red-500 text-xs">
              Password Min Length is 6 Character or Longer
            </span>
          )}
          {errors.password?.type === "maxLength" && (
            <span className="text-red-500 text-xs">
              Password Max Length is 20 Character
            </span>
          )}

          <div className="flex justify-between items-center mb-4">
            <Link
              to="/forgetPassword"
              className="text-gray-400 text-sm cursor-pointer hover:underline"
            >
              Forget Password?
            </Link>
          </div>
          <Button variant="secondary" type="submit" className="w-full mb-4">
            Continue
          </Button>
        </form>
        <div className="text-sm text-gray-500 mb-4 text-center">
          Don’t have any account?{" "}
          <Link
            to="/register"
            className="text-lime-600 font-semibold hover:underline"
          >
            Register
          </Link>
        </div>
        <SocialLogin />
      </div>
    </div>
  );
};

export default LogIn;
