import React from "react";
import ProFastLogo from "./ProfastLogo";
import {
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa6";

const navLinks = [
  { to: "/services", label: "Services" },
  { to: "/coverage", label: "Coverage" },
  { to: "/about", label: "About Us" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://linkedin.com",
    icon: <FaLinkedinIn className="text-xl" />,
    label: "LinkedIn",
  },
  {
    href: "https://twitter.com",
    icon: <FaXTwitter className="text-xl" />,
    label: "X",
  },
  {
    href: "https://facebook.com",
    icon: <FaFacebookF className="text-xl" />,
    label: "Facebook",
  },
  {
    href: "https://youtube.com",
    icon: <FaYoutube className="text-xl" />,
    label: "YouTube",
  },
];

const Footer = () => {
  return (
    <div className="bg-gray-100 px-4 md:px-6 py-1">
      <footer className="max-w-7xl mx-auto bg-gray-900 rounded-3xl px-4 my-6 py-10 md:py-14 text-center flex flex-col items-center">
        <div className="flex flex-col items-center gap-2">
          <ProFastLogo color="white" />
          <p className="text-gray-300 text-sm md:text-base max-w-xl mt-2">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>
        <hr className="my-8 border-gray-700 w-full max-w-3xl" />
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-gray-200 text-sm font-medium mb-8">
          {navLinks.map((link) => (
            <a
              key={link.to}
              href={link.to}
              className="hover:text-white transition"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex justify-center gap-5 mt-2">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 flex items-center justify-center transition"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
