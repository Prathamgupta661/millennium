import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Weblogo-removebg-preview.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Utility for active link styling
  const navLinkClass =
    "cursor-pointer hover:text-xl hover:text-cyan-500 text-lg font-playfair font-medium transition"; // <-- removed text-white

  return (
    <>
      <nav
        className="p-4 max-h-[6rem] w-full shadow-md fixed top-0 left-0 right-0 z-50
  bg-white/40 backdrop-blur-xl border-b border-white/30"
        style={{
          background: "rgba(255,255,255,0.35)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.10)",
          border: "1px solid rgba(255,255,255,0.18)",
        }}
      >
        <div className="grid grid-cols-3 w-full items-center">
          {/* Logo */}
          <div className="flex justify-start pl-4">
            <NavLink
              to="/"
              className="text-2xl font-bold tracking-wide text-gray-800 transition"
            >
              <img
                src={logo}
                alt="Company logo"
                className="w-40 h-12 object-contain invert-70"
              />
            </NavLink>
          </div>
          {/* Desktop Nav */}
          <div className="flex justify-center">
            <ul className="hidden md:flex gap-8 items-center">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${navLinkClass} ${
                    isActive
                      ? "text-cyan-600 border-b-2 border-cyan-400 bg-white/60"
                      : "text-gray-700 hover:text-cyan-500"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${navLinkClass} ${
                    isActive
                      ? "text-cyan-600 border-b-2 border-cyan-400 bg-white/60"
                      : "text-gray-700 hover:text-cyan-500"
                  }`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `${navLinkClass} ${
                    isActive
                      ? "text-cyan-600 border-b-2 border-cyan-400 bg-white/60"
                      : "text-gray-700 hover:text-cyan-500"
                  }`
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${navLinkClass} ${
                    isActive
                      ? "text-cyan-600 border-b-2 border-cyan-400 bg-white/60"
                      : "text-gray-700 hover:text-cyan-500"
                  }`
                }
              >
                Contact Us
              </NavLink>
            </ul>
          </div>
          {/* Right Side */}
          <div className="flex justify-end items-center gap-2 pr-4">
            <button className="text-gray-700 hover:text-cyan-500 text-lg font-medium transition cursor-pointer font-playfair mr-5 md:mr-0">
              Blog
            </button>
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded hover:bg-cyan-100/60 transition"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              <span className="text-3xl text-gray-700">
                {isOpen ? "✕" : "☰"}
              </span>
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Nav */}
      {isOpen && (
        <div className="fixed top-[4.5rem] left-0 w-full bg-white/90 shadow-lg z-40 md:hidden animate-fade-in backdrop-blur-xl">
          <ul className="flex flex-col gap-6 p-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg font-semibold text-cyan-600 hover:text-pink-500 transition ${
                  isActive ? "bg-cyan-100 rounded-xl p-1" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-lg font-semibold text-cyan-600 hover:text-pink-500 transition ${
                  isActive ? "bg-cyan-100 rounded-xl p-1" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `text-lg font-semibold text-cyan-600 hover:text-pink-500 transition ${
                  isActive ? "bg-cyan-100 rounded-xl p-1" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-lg font-semibold text-cyan-600 hover:text-pink-500 transition ${
                  isActive ? "bg-cyan-100 rounded-xl p-1" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </NavLink>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
