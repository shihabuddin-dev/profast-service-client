import React from "react";

const Button = ({
  children,
  type = "button",
  onClick = () => {},
  variant = "primary",
  className = "",
  ...props
}) => {
  let styles = "text-sm hover:bg-gray-50 transition";

  if (variant === "primary") {
    styles +=
      "border border-gray-300 bg-white text-gray-800 rounded-lg px-6 py-2";
  } else if (variant === "secondary") {
    styles +=
      "flex items-center bg-lime-200 text-gray-900 rounded-lg px-5 py-2 gap-2 shadow-none hover:bg-lime-300";
  } else if (variant === "outline") {
    styles += "";
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
