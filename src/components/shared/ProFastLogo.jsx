import logo from "../../assets/logo.png";

const ProFastLogo = ({ color = "dark" }) => {
  return (
    <div className="relative">
      <img src={logo} alt="ProFast logo" />
      <span
        className={`absolute bottom-0 left-5 font-bold text-xl tracking-tight ${
          color === "white" ? "text-white" : "text-gray-800"
        }`}
      >
        ProFast
      </span>
    </div>
  );
};

export default ProFastLogo;
