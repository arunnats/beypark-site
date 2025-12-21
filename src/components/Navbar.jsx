import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/analytics", label: "Analytics" },
    {
      to: "https://www.instagram.com/beyporeinternationalwaterfest/?hl=en",
      label: "Beypore Fest",
      isExternal: true,
    },
    {
      to: "/BeyPark.apk",
      label: "Download App",
      isDownload: true,
      isButton: true,
    },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full absolute top-0 left-0 z-50 font-poppins bg-transparent p-6 md:px-20 md:py-8">
      <div className="flex items-center justify-between">
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-tight text-black"
        >
          BeyPark
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const baseClasses =
              "text-sm font-semibold transition-colors duration-200";
            const activeClasses = isActive(link.to)
              ? "text-black"
              : "text-gray-500 hover:text-black";

            if (link.isButton) {
              return (
                <a
                  key={link.label}
                  href={link.to}
                  download="BeyPark.apk"
                  className="px-5 py-2.5 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-all hover:scale-105 shadow-md"
                >
                  {link.label}
                </a>
              );
            }

            if (link.isExternal) {
              return (
                <a
                  key={link.label}
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${baseClasses} ${activeClasses}`}
                >
                  {link.label}
                </a>
              );
            }

            return (
              <Link
                key={link.to}
                to={link.to}
                className={`${baseClasses} ${activeClasses}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <button
          className="md:hidden p-2 text-black focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#f6f7f7] shadow-xl p-6 flex flex-col space-y-6 md:hidden rounded-b-2xl border-t border-gray-200">
          {navLinks.map((link) => {
            if (link.isDownload) {
              return (
                <a
                  key={link.label}
                  href={link.to}
                  download="BeyPark_App.apk"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-center px-6 py-3 bg-black text-white font-bold rounded-xl"
                >
                  {link.label}
                </a>
              );
            }

            if (link.isExternal) {
              return (
                <a
                  key={link.label}
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-gray-600 hover:text-black"
                >
                  {link.label}
                </a>
              );
            }

            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-medium ${
                  isActive(link.to) ? "text-black" : "text-gray-600"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
