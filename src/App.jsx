import { useEffect, useState } from "react";
import { trefoil } from "ldrs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Team from "./pages/Team";

trefoil.register();

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const footerVideo = document.getElementById("footer-video");

    if (!footerVideo) {
      setLoading(false);
      return;
    }

    if (footerVideo.readyState >= 3) {
      setTimeout(() => setLoading(false), 500);
    } else {
      footerVideo.addEventListener("loadeddata", () => {
        setTimeout(() => setLoading(false), 500);
      });
    }
  }, []);

  return (
    <Router>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999] transition-opacity duration-700">
          <l-trefoil
            size="40"
            stroke="4"
            stroke-length="0.15"
            bg-opacity="0.1"
            speed="1.4"
            color="black"
          ></l-trefoil>
        </div>
      )}

      <div
        className={`relative min-h-screen overflow-x-hidden transition-opacity duration-700 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="relative z-[20] flex bg-[#f6f7f7] flex-1 mb-[67vh] md:mb-[40vh] rounded-b-2xl overflow-hidden">
          <Sidebar />
          <main className="flex-1 min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/committee" element={<Research />} />
              <Route path="/team" element={<Team />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
