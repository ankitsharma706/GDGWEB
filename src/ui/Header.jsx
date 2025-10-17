import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./../assets/logo2.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false); // Close menu on route change
  }, [location]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/signature-events", label: "Events" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-indigo-100/90 backdrop-blur-lg shadow-md py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[60rem] mx-auto px-4 sm:px-6 flex items-center justify-between overflow-x-hidden">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="GDG Logo"
            className={`transition-all duration-500 ${
              isScrolled ? "w-10 h-10" : "w-12 h-16"
            } group-hover:scale-110`}
          />
          <span
            className={`font-bold tracking-wide transition-all duration-500 ${
              isScrolled ? "text-xl text-gray-800" : "text-2xl drop-shadow"
            } group-hover:text-indigo-600`}
          >
            GDG ITER
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-2 py-1 transition-all duration-300 hover:text-indigo-600 ${
                location.pathname === link.path
                  ? "font-semibold text-gray-700"
                  : isScrolled
                  ? "text-gray-800"
                  : "text-gray-800"
              }`}
            >
              {link.label}
              {location.pathname === link.path && (
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${
                    isScrolled ? "bg-indigo-500" : "bg-yellow-300"
                  }`}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle (Centered) */}
        <div className="md:hidden fixed top-5 left-1/2 -translate-x-1/2 z-50 flex justify-center">
          <button
            className={`flex flex-col justify-between w-8 h-6 focus:outline-none transition-all duration-300 ${
              isScrolled ? "text-gray-800" : ""
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span
              className={`block w-full h-0.5 rounded transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2 bg-gray-800" : ""
              } ${isScrolled ? "bg-gray-800" : "bg-gray-800"}`}
            />
            <span
              className={`block w-full h-0.5 rounded transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              } ${isScrolled ? "bg-gray-800" : "bg-gray-800"}`}
            />
            <span
              className={`block w-full h-0.5 rounded transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2 bg-gray-800" : ""
              } ${isScrolled ? "bg-gray-800" : "bg-gray-800"}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full nav-color backdrop-blur-lg shadow-lg transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <ul className="flex flex-col items-center py-6 space-y-4">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`px-4 py-3 text-lg font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? "text-indigo-600 font-semibold"
                    : "text-gray-700 hover:text-indigo-600"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
