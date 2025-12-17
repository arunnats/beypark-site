import { Link } from "react-router-dom";
import { useState } from "react";

export function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/committee", label: "Committee" },
    { to: "/team", label: "Call for Papers" },
    { to: "/preview", label: "Call for PhD Forum" },
    { to: "/registration", label: "Registration" },
    { to: "/speakers", label: "Speakers" },
    { to: "/programme", label: "Programme" },
  ];

  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/committee", label: "Committee" },
    { to: "/team", label: "Call for Papers" },
    { to: "/preview", label: "Call for PhD Forum" },
    { to: "/registration", label: "Registration" },
    { to: "/speakers", label: "Speakers" },
    { to: "/programme", label: "Programme" },
  ];

  return (
    <>
      <div className="hidden md:block fixed left-0 top-0 w-64 flex flex-col px-6 py-8 z-[30]">
        <a href="https://nitc.ac.in" className="mb-2">
          <img src="./NIT_Calicut.svg" alt="" className="h-24" />
        </a>
        <div className="font-bold text-3xl">ASCAT 2026</div>
        <div className="mb font-bold text-md">NIT Calicut</div>
        <div className="mb-2 font-bold text-md">Mar 06 - Mar 08 2026</div>

        <ul className="space-y-1">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:hidden">
        <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
          <div className="flex justify-between items-center px-4 py-3">
            <a
              href="https://nitc.ac.in"
              className="flex items-center space-x-2"
            >
              <img src="./NIT_Calicut.svg" alt="NIT Calicut" className="h-10" />
              <span className="font-bold text-xl">ASCAT 2026</span>
            </a>
            <button
              className="text-2xl md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>

          <div
            className={`absolute top-full left-0 w-full bg-white shadow-lg transform transition-all duration-300 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] rounded-b-lg ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
          >
            <ul className="flex flex-col items-start px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </header>

        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </div>
    </>
  );
}
