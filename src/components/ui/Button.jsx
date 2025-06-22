import React from "react";

const Button = ({
  children,
  type = "button",
  onClick = () => {},
  variant = "primary",
  className = "",
  ...props
}) => {
  let styles = "text-sm transition duration-300 ease-in-out";

  if (variant === "primary") {
    styles +=
      "border border-1 border-gray-200 bg-white hover:bg-[#CAEB66] text-gray-800 rounded-lg px-6 py-2";
  } else if (variant === "secondary") {
    styles +=
      "flex items-center bg-[#CAEB66] text-gray-900 rounded-lg px-5 py-2 gap-2 shadow-none hover:bg-[#CAEB66]";
  } else if (variant === "round") {
    styles +=
      "w-full flex items-center justify-center gap-2 bg-[#CAEB66] py-2 rounded-full px-5 font-medium text-gray-700 hover:bg-gray-200 transition";
  } else if (variant === "google") {
    styles +=
      "w-full flex items-center justify-center gap-2 bg-gray-100 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-200 transition";
  } else if (variant === "outline") {
    styles +=
      "flex items-center border-[#CAEB66] border-1 text-[#CAEB66] font-semibold rounded-full px-5 py-2 gap-2 shadow-none hover:bg-[#CAEB66] hover:text-black";
  } else if (variant === "danger") {
    styles += "bg-red-600 text-white hover:bg-red-500";
  } else {
    styles += "bg-gray-200 text-black";
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
