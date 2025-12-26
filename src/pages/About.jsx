import React from "react";

export default function About() {
  return (
    <section className="min-h-screen py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold mb-6">About Us</h1>
        <p className="text-lg text-gray-700 mb-4">
          BeyPark is dedicated to making parking easier and smarter for the{" "}
          <span className="font-bold">Beypore International Water Fest</span>{" "}
          held on December 26, 27 & 28 2025. We design simple, secure, and
          intuitive experiences that reduce the everyday stress associated with
          finding parking.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          BeyPark began as a collaborative initiative with the{" "}
          <span className="font-bold">Kozhikode City Police</span> and{" "}
          <span className="font-bold">DTPC Kozhikode</span>, aimed at easing
          parking-related challenges during large-scale public events such as
          the <span className="font-bold">Beypore Water Fest</span>. The goal
          was simple: help visitors quickly find available{" "}
          <span className="font-bold">parking locations</span> and{" "}
          <span className="font-bold">real-time vacant parking spots</span>,
          reducing congestion and confusion.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Our Application</h2>
        <p className="text-lg text-gray-700 mb-4">
          BeyPark operates on a straightforward yet effective principle:
          tracking vehicle entry and exit at parking lots. Using a lightweight{" "}
          <span className="font-bold">AI-based vehicle detection model</span>,
          we monitor vehicles passing through parking gates. This allows us to
          accurately maintain a real-time count of{" "}
          <span className="font-bold">occupied</span> and{" "}
          <span className="font-bold">available parking slots</span> for each
          location which can be accessed through the website or the Android
          Application.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Team & Guidance</h2>
        <p className="text-lg text-gray-700 mb-4">
          BeyPark is developed under the{" "}
          <span className="font-bold">
            Centre of Excellence Urban Planning & Developement NIT Calicut
          </span>{" "}
          with the guidance of{" "}
          <span className="font-bold">Dr. Munavar Fairooz C.</span>,{" "}
          <span className="font-bold">Dr. Harikrishna M.</span>, and{" "}
          <span className="font-bold">Dr. Nishant M. P.</span>, in a
          collaborative effort between members of the{" "}
          <span className="font-bold">
            Departments of Computer Science & Engineering and Civil Engineering
          </span>{" "}
          with a core team comprising{" "}
          <span className="font-bold">Arun Natarajan</span>,{" "}
          <span className="font-bold">Hafeez Muhammed</span>,{" "}
          <span className="font-bold">Kamble Aditya Dattatray</span>,{" "}
          <span className="font-bold">Aadil Krishna K.</span>,{" "}
          <span className="font-bold">Abhina</span>, and{" "}
          <span className="font-bold">Abhiram</span>, bringing together
          expertise in Software Engineering, Civil Engineering, AI, Traffic
          Management, and real-world on-field deployment.
        </p>
        <div className="flex justify-center mt-6">
          <div className="relative w-[350px] md:w-[500px] group">
            <img
              src="/croped.png"
              alt="BeyPark Team"
              className="w-full h-auto rounded-md"
            />

            <div className="absolute inset-0 rounded-md bg-white/30 opacity-30 md:opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
