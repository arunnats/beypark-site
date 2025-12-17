import { Link } from "react-router-dom";

export default function Footer() {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/research", label: "Committee" },
    { to: "/team", label: "Call for Papers" },
    { to: "/preview", label: "Call for PhD Forum" },
    { to: "/registration", label: "Registration" },
    { to: "/speakers", label: "Speakers" },
    { to: "/programme", label: "Programme" },
  ];

  return (
    <footer className="fixed left-0 bottom-0 w-full h-[68vh] md:h-[42vh] z-0">
      <video
        id="footer-video"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        src="/footervid.mp4"
      />

      <div className="fixed inset-0 bg-black bg-opacity-30 z-0" />

      <div className="absolute bottom-3 md:bottom-0 w-full flex flex-col text-white text-left px-5 py-2 md:px-20 md:py-10">
        <div className="mb-[3vh]">
          <p className="text-[3rem] md:text-6xl font-semibold translate-y-4 md:translate-y-0">
            ASCAT 2026
          </p>
          <p className="text-[2.3rem] md:text-4xl font-semibold">NIT Calicut</p>
          <p className="text-[1.5rem] md:text-3xl font-semibold -translate-y-2 md:translate-y-0">
            Mar 06 - Mar 08 2026
          </p>

          <nav className="flex flex-wrap flex-col md:flex-row justify-left gap-2 md:gap-6 mt-3 text-md md:text-xl font-semibold">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="hover:underline">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-gray-300 opacity-50" />

        <div className="flex justify-between items-center py-2 text-xs">
          <span>© {new Date().getFullYear()} NIT Calicut</span>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Credits{" "}
          </a>
        </div>
      </div>
    </footer>
  );
}
