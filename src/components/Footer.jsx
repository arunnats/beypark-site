import { Link } from "react-router-dom";

export default function Footer() {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/analytics", label: "Analytics" },
    {
      to: "/beypark-android.apk",
      label: "Download",
      isDownload: true,
    },
    {
      to: "https://www.instagram.com/beyporeinternationalwaterfest/?hl=en",
      label: "Beypore Fest",
      isExternal: true,
    },
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

      <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col text-white px-6 pb-4 md:px-20 md:pb-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-12">
          <Link to="/" className="flex flex-col items-start mb-8 md:mb-0 group">
            <p className="text-[1.5rem] md:text-[1.42rem] font-extrabold translate-y-7 md:translate-y-3 translate-x-[1px]">
              Parking made simple.
            </p>
            <p className="text-[4rem] md:text-6xl font-extrabold ">BeyPark</p>
          </Link>

          <nav className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8 text-base md:text-lg font-bold">
            {navLinks.map((link) => {
              if (link.isDownload) {
                return (
                  <a
                    key={link.label}
                    href={link.to}
                    download="BeyPark_App.apk"
                    className="hover:text-gray-200 transition-colors cursor-pointer"
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
                    className="hover:text-gray-200 transition-colors"
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="hover:text-gray-200 transition-colors"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="w-full h-px bg-white/40 mb-4" />

        <div className="flex justify-between items-center text-xs md:text-sm opacity-80">
          <span>© {new Date().getFullYear()} NIT Calicut</span>
          <Link to="/credits" className="hover:underline">
            Credits
          </Link>
        </div>
      </div>
    </footer>
  );
}
