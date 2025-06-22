import { Link } from "react-router";
import Button from "../../components/ui/Button";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const ResetPassword = () => {
  const { resetPassword } = useAuth();

  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();

    if (!email) {
      Swal.fire({
        icon: "error",
        title: "Please enter your email address.",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    resetPassword(email)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Password reset email sent! Redirecting to Gmail...",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          window.location.href = "https://mail.google.com";
        }, 1500);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (
          errorCode === "auth/user-not-found" ||
          errorCode === "auth/invalid-email"
        ) {
          Swal.fire({
            icon: "error",
            title: "This email address is not registered or is invalid.",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Failed to send reset email.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        console.error("Reset Password Error:", errorCode, errorMessage);
      });
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold mb-2">Reset Password</h2>
          <p className="mb-6 text-gray-700">Reset Your Password</p>

          <form onSubmit={handleResetPassword}>
            <label className="block text-sm font-semibold mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-4 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-200"
            />
            <Button variant="secondary" type="submit" className="w-full mb-4">
              Continue
            </Button>
          </form>
          <div className="text-sm text-gray-500 mb-4 text-center">
            Remember your password?{" "}
            <Link
              to="/login"
              className="text-lime-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
