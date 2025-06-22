import React, { useState } from "react";
import ProFastLogo from "./ProFastLogo";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import Button from "../ui/Button";
import { Link, NavLink } from "react-router";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const navLinks = [
  { to: "/services", label: "Services" },
  { to: "/coverage", label: "Coverage" },
  { to: "/about", label: "About Us" },
  { to: "/pricing", label: "Pricing" },
  { to: "/be-a-rider", label: "Be a Rider" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, signOutUser } = useAuth();
  
   // logout user
    const handleLogOut = () => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Sign out!",
      }).then((result) => {
        if (result.isConfirmed) {
          signOutUser();
          Swal.fire({
            title: "Sign out!",
            text: "You have been Sign out.",
            icon: "success",
          })
            .then(() => {})
            .catch((error) => {
              console.log(error);
              Swal.fire({
                title: "Error!",
                text: "Sign Out failed.",
                icon: "error",
              });
            });
        }
      });
    };

  return (
    <nav className="bg-gray-100 py-4 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-white rounded-2xl px-4 md:px-6 py-3 shadow-sm relative">
        {/* Logo */}
        <div className="flex items-center z-20">
          <ProFastLogo />
        </div>
        {/* Nav Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-gray-700 text-sm hover:text-black transition${
                  isActive ? " font-bold text-black" : ""
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        {/* Buttons */}
        <div className="hidden md:flex items-center gap-3 md:gap-4 z-20">
          {user ? (
            <Button onClick={handleLogOut} variant="danger">
              Log Out
            </Button>
          ) : (
            <Link to="/login">
              <Button>Log In</Button>
            </Link>
          )}
          <Button variant="secondary">Be a rider</Button>
          <span className="flex items-center justify-center bg-gray-900 rounded-full w-8 h-8 ml-2">
            <FiArrowUpRight className="text-lime-200 text-lg" />
          </span>
        </div>
        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden ml-2 z-30 p-2 rounded-md text-black hover:bg-gray-200 focus:outline-none"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <FiMenu className="w-7 h-7" />
        </button>
        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-30 transition-opacity duration-300 ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          } z-40`}
          onClick={() => setMenuOpen(false)}
        />
        {/* Mobile Menu Drawer */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <ProFastLogo />
            <button
              className="p-2 rounded-md text-black hover:bg-gray-800 focus:outline-none"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-gray-700 text-base font-medium hover:text-black transition${
                    isActive ? " font-bold text-black" : ""
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            {user ? (
              <Button onClick={handleLogOut} variant="danger">
                Log Out
              </Button>
            ) : (
              <Link to="/login">
                <Button
                  className="mt-4 w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  Log In
                </Button>
              </Link>
            )}
            <Button
              variant="secondary"
              className="w-full"
              onClick={() => setMenuOpen(false)}
            >
              Be a rider
            </Button>
            <span className="flex items-center justify-center bg-gray-900 rounded-full w-8 h-8 ml-2">
              <FiArrowUpRight className="text-lime-200 text-lg" />
            </span>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
