import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import Button from "../../components/ui/Button";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "./SocialLogin";
import Swal from "sweetalert2";
import axios from "axios";
import { useState } from "react";
import useAxios from "../../hooks/useAxios";

const Register = () => {
  const { setUser, createUser, updateUser } = useAuth();
  const location = useLocation()
  const navigate = useNavigate()
  const form = location.state?.form || '/'
  const [profilePic, setProfilePic] = useState('')
  const axiosInstance= useAxios()


  // react hook form validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then(async(result) => {

        // update user profile in the database
        const userInfo={
          email: data.email,
          role: 'user', // default role
          created_at: new Date().toISOString(),
          last_log_in:  new Date().toISOString()
        }
        const userRes= await axiosInstance.post('/users', userInfo)
        console.log(userRes.data)

        // updata  user profile in firebase
        const userProfile = {
          dispalyName: data.name,
          photoURL: profilePic,
        }
        updateUser(userProfile)
          .then(() => {
            console.log('profile name and picture updated')
          })
          .catch(error => {
            console.log('faild to update profile pic', error)
          })
        setUser(result)
        navigate(form)
        Swal.fire({
          icon: "success",
          title: "Registration Successfull",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleImageUpload = async (e) => {
    const image = e.target.files[0]
    // console.log(image)
    const formData = new FormData()
    formData.append("image", image)
    const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_UPLOAD_KEY}`
    const res = await axios.post(imageUploadUrl, formData)
    // console.log(res.data.data.url)
    setProfilePic(res.data.data.url)
    // console.log(profilePic)

  }
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-2">Create an Account</h2>
        <p className="mb-6 text-gray-700">Register with ProFast</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="block text-sm font-semibold mb-1" htmlFor="email">
            Name
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Name"
            className="w-full mb-4 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-200"
          />
          <label className="block text-sm font-semibold mb-1" htmlFor="email">
            Image
          </label>
          <input
            type="file"
            onChange={handleImageUpload}
            placeholder="Upload Your Image"
            className="w-full mb-4 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-200"
          />
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
            <span className="text-gray-400 text-sm cursor-pointer hover:underline">
              Forget Password?
            </span>
          </div>
          <Button variant="secondary" type="submit" className="w-full mb-4">
            Continue
          </Button>
        </form>
        <div className="text-sm text-gray-500 mb-4 text-center">
          Already have any account?{" "}
          <Link
            to="/login"
            className="text-lime-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </div>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Register;
